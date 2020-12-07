'use strict'

const aws = require('aws-sdk')
const NodeGeocoder = require('node-geocoder')
const geoHash = require('latlon-geohash')
const uuidV4 = require('uuid/v4')

const dynamoDb = new aws.DynamoDB.DocumentClient()
const {RESTAURANT} = require('./restaurant-constants.js')
const {API_STATUS} = require('./zeat-constants.js')
const zeatUtil = require('./zeat-util')

const {ORDER_STATUS} = require('./order-constants.js')

const {debugGeneric, debugCloudWatch, debugCloudWatchError} = require('./debug.js')

const geocoderOptions = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
}

const geocoder = NodeGeocoder(geocoderOptions)

function createRestaurant (restaurant) {
  return new Promise((resolve, reject) => {
    const {
      address
    } = restaurant

    // Geocode using Promise
    geocoder.geocode(address)
      .then((res) => {
        debugGeneric(JSON.stringify(res))

        const {
          latitude,
          longitude,
          formattedAddress
        } = res[0]

        let restId = res[0].extra.googlePlaceId
        const currTime = new Date()

        if (!restId) restId = uuidV4()

        const geoHashValue = geoHash.encode(latitude, longitude, RESTAURANT.GEOHASH_PRECISION)

        debugGeneric('Creating new Restaurant Record')

        const restaurantParams = {
          TableName: process.env.TABLE_RESTAURANT,
          Item: {
            restaurantId: restId,
            rangeKeyId: RESTAURANT.RANGE_KEY_DETAIL,
            name: restaurant.name,
            cuisine: restaurant.cuisine,
            address: formattedAddress,
            geoHash: geoHashValue,
            geoPoint: {
              latitude,
              longitude
            },
            ownerGuid: restaurant.ownerGuid,
            submittedAt: currTime.toISOString(),
            updatedAt: currTime.toISOString()
          }
        }

        dynamoDb.put(restaurantParams).promise()
          .then(() => resolve({status: API_STATUS.SUCCESS}))
          .catch((err) => {
            debugCloudWatchError(JSON.stringify(err))
            reject(err)
          })
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(err)
      })
  })
}

/**
 *
 * @param {Object} location - Location Object
 * @param {String} location.latitude - Location Latitude
 * @param {String} location.longitude - Location Longitude
 * @returns {Promise}
 */
function searchRestaurant (location) {
  return new Promise((resolve, reject) => {
    debugGeneric(`Longitude -> ${location.longitude}`)
    debugGeneric(`Latitude -> ${location.latitude}`)

    const geoHashValue = geoHash.encode(location.latitude, location.longitude, RESTAURANT.GEOHASH_PRECISION)
    debugGeneric(`GeoHash -> ${geoHashValue}`)

    const params = {
      TableName: process.env.TABLE_RESTAURANT,
      KeyConditionExpression: '#geoHash = :geoHashValue',
      IndexName: 'GeohashRestaurantIndex',
      ExpressionAttributeNames: {
        '#geoHash': 'geoHash'
      },
      ExpressionAttributeValues: {
        ':geoHashValue': geoHashValue
      },
      ReturnConsumedCapacity: 'TOTAL'
    }

    // Code needs to be modified to look at adjacent hash partition and
    // get restaurants in those locations. For now, we will get
    // restaurants in one location. The code should be modified to
    // use request Items.

    dynamoDb.query(params).promise()
      .then((res) => {
        resolve(res.Items)
      })
      .catch((err) => {
        debugCloudWatchError(`Error -> ${JSON.stringify(err)}`)
        reject(err)
      })
  })
}

function updateMenu (menuParam) {
  return new Promise((resolve, reject) => {
    const restQueryParams = {
      TableName: process.env.TABLE_RESTAURANT,
      KeyConditionExpression: 'restaurantId = :restId and rangeKeyId = :rangeKeyId',
      ExpressionAttributeValues: {
        ':restId': menuParam.restaurantId,
        ':rangeKeyId': RESTAURANT.RANGE_KEY_DETAIL
      },
      ReturnConsumedCapacity: 'TOTAL'
    }

    dynamoDb.query(restQueryParams).promise()
      .then((res) => {
        const menuList = []

        debugGeneric(`Restaurant => ${JSON.stringify(res)}`)

        const menuToUpdate = {
          name: menuParam.name,
          description: menuParam.description,
          duration: menuParam.duration,
          active: menuParam.active,
          menuKey: menuParam.menuKey
        }

        debugGeneric(`Updated Menu => ${JSON.stringify(menuToUpdate)}`)

        let menuUpdated = false

        if (res.Items[0].menus) {
          for (const menu of res.Items[0].menus) {
            if (menuToUpdate.name === menu.name) {
              menuList.push(menuToUpdate)
              menuUpdated = true
            } else {
              menuList.push(menu)
            }
          }
        }

        if (!menuUpdated) menuList.push(menuToUpdate)

        return menuList
      })
      .then((menus) => {
        debugGeneric(`MenuList -> ${JSON.stringify(menus)}`)
        const updMenuParams = {
          TableName: process.env.TABLE_RESTAURANT,
          Key: {
            restaurantId: menuParam.restaurantId,
            rangeKeyId: RESTAURANT.RANGE_KEY_DETAIL
          },
          UpdateExpression: 'SET menus = :menus',
          ExpressionAttributeValues: {
            ':menus': menus
          },
          ReturnConsumedCapacity: 'TOTAL'
        }

        dynamoDb.update(updMenuParams).promise()
          .then(() => resolve({status: API_STATUS.SUCCESS}))
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(err)
      })
  })
}

function uploadMenu (restaurantId, menu) {
  return new Promise((resolve, reject) => {

    const s3 = new aws.S3({apiVersion: '2006-03-01'})

    // Update Menu IDs, if not present
    menu.sections.forEach((section) => {
      section.id = section.id ? section.id : uuidV4()
      section.subsections.forEach((subSection) => {
        subSection.id = subSection.id ? subSection.id : uuidV4()
        subSection.items.forEach((item) => {
          item.id = item.id ? item.id : uuidV4()
        })
      })
    })

    const uploadParams = {
      Bucket: process.env.S3_BUCKET,
      Key: `${restaurantId}/${menu.name}.json`,
      Body: JSON.stringify(menu),
      ContentType: 'application/json',
      ACL: 'public-read'
    }

    let location

    s3.upload(uploadParams).promise()
      .then((res) => {
        location = `${res.Key}?versionId=${res.VersionId}`

        debugGeneric(`Upload Result => ${JSON.stringify(res)}`)

        const menuParam = {
          restaurantId: restaurantId,
          name: menu.name,
          description: menu.description,
          duration: menu.duration,
          active: menu.active,
          menuKey: location
        }

        return updateMenu(menuParam)
      })
      .then((res) => {
        resolve(location)
      })
      .catch((err) => {
        reject(err)
      })
  })
}


function createDiningTable (restaurantId, diningTable) {
  return new Promise((resolve, reject) => {

    const timestamp = new Date().getTime()

    const diningTablePutParams = {
      TableName: process.env.TABLE_RESTAURANT,
      Item: {
        restaurantId: restaurantId,
        rangeKeyId: RESTAURANT.DINING_TABLE + diningTable.name,
        name: diningTable.name,
        maxSeats: diningTable.maxSeats,
        submittedAt: timestamp,
        updatedAt: timestamp
      },
      ReturnConsumedCapacity: 'TOTAL'
    }

    dynamoDb.put(diningTablePutParams).promise()
      .then(res => resolve({status: API_STATUS.SUCCESS}))
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(err)
      })
  })
}


function listOrders (restaurantId) {
  return new Promise((resolve, reject) => {
    const foursHoursPrior = new Date()
    foursHoursPrior.setHours(foursHoursPrior.getHours() - 4)

    const listOrderParams = {
      TableName: process.env.TABLE_RESTAURANT_ORDER,
      KeyConditionExpression: 'restaurantId = :restaurantId and rangeKeyId >= :rangeKeyWithTime',
      ExpressionAttributeValues: {
        ':restaurantId': restaurantId,
        ':rangeKeyWithTime': `DATE:${zeatUtil.toISOString(foursHoursPrior)}`
      },
      ScanIndexForward: false,
      ReturnConsumedCapacity: 'TOTAL'
    }

    dynamoDb.query(listOrderParams).promise()
      .then((data) => {
        debugGeneric(JSON.stringify(data))
        const activeOrders = data.Items.filter(order => order.orderStatusId <= ORDER_STATUS.TABLE_ASSIGNED)

        return resolve({
          orders: activeOrders
        })
      })
      .catch((err) => {
        debugCloudWatchError(err)
        reject(err)
      })
  })
}

function getRestaurantDetails (restaurantId) {
  return new Promise((resolve, reject) => {
    const listRestaurantDetails = {
      TableName: process.env.TABLE_RESTAURANT,
      Key: {
        restaurantId: restaurantId,
        rangeKeyId: RESTAURANT.RANGE_KEY_DETAIL
      }
    }

    dynamoDb.get(listRestaurantDetails).promise()
      .then((result) => {
        return resolve(result.Item)
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(err)
      })
  })
}

module.exports = {
  createRestaurant,
  searchRestaurant,
  uploadMenu,
  createDiningTable,
  listOrders,
  getRestaurantDetails
}

const restaurantUtil = require('./restaurant-util.js')
const {API_STATUS} = require('./zeat-constants.js')

const {debugGeneric, debugCloudWatchError} = require('./debug.js')

const api = {
  createRestaurant: (event, context, callback) => {
    const requestBody = JSON.parse(event.body)

    requestBody.ownerGuid = event.requestContext.authorizer.claims.sub

    restaurantUtil.createRestaurant(requestBody)
      .then((res) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res)
        })
      })
      .catch((err) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({status: API_STATUS.ERROR})
        })
      })
  },
  searchRestaurant: (event, context, callback) => {
    const {
      latitude,
      longitude
    } = event.queryStringParameters

    debugGeneric(`Longitude -> ${longitude}`)
    debugGeneric(`Latitude -> ${latitude}`)

    restaurantUtil.searchRestaurant({latitude, longitude})
      .then((searchResults) => {
        const response = {
          statusCode: 200,
          body: JSON.stringify({status: API_STATUS.SUCCESS, restaurants: searchResults})
        }
        callback(null, response)
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            status: API_STATUS.ERROR,
            message: 'Error while searching for restaurants'
          })
        }
        callback(null, response)
      })
  },
  createMenu: (event, context, callback) => {
    const menu = JSON.parse(event.body)
    const restaurantId = event.pathParameters.restaurantId

    restaurantUtil.uploadMenu(restaurantId, menu)
      .then((menuLocation) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: 'SUCCESS',
            location: menuLocation
          })
        })
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))

        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            status: 'ERROR',
            message: 'Unable to create restaurant menu.'
          })
        })
      })
  },
  createDiningTable: (event, context, callback) => {
    const diningTable = JSON.parse(event.body)
    console.log(JSON.stringify(event))
    const restaurantId = event.pathParameters.restaurantId

    restaurantUtil.createDiningTable(restaurantId, diningTable)
      .then((result) => resolve(result))
      .catch((error) => {
        debugCloudWatchError(JSON.stringify(error))
        resolve({status: API_STATUS.ERROR})
      })
  },
  listOrders: (event, context, callback) => {
    const {
      restaurantId
    } = event.pathParameters

    debugGeneric(`RestaurantID -> ${restaurantId}`)

    restaurantUtil.listOrders(restaurantId)
      .then((response) => {
        debugGeneric(`OrderList -> ${JSON.stringify(response)}`)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: API_STATUS.SUCCESS,
            orders: response.orders
          })
        })
      })
      .catch((error) => {
        debugCloudWatchError(JSON.stringify(error))
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: API_STATUS.ERROR
          })
        })
      })
  },
  getRestaurantDetails: (event, context, callback) => {
    const {
      restaurantId
    } = event.pathParameters

    restaurantUtil.getRestaurantDetails(restaurantId)
      .then((restaurant) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: API_STATUS.SUCCESS,
            restaurant: restaurant
          })
        })
      })
  }
}

module.exports = {
  create: api.createRestaurant,
  search: api.searchRestaurant,
  createMenu: api.createMenu,
  createDiningTable: api.createDiningTable,
  listOrders: api.listOrders,
  getRestaurantDetails: api.getRestaurantDetails
}
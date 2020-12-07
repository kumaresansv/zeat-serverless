// Imported Modules
const aws = require('aws-sdk')
const uuidV4 = require('uuid/v4')
const {doUntil} = require('async')

// Custom File Imports
const zeatUtil = require('./zeat-util.js')

const {DINER_STATUS, ORDER_DETAIL_CONSTANTS, ORDER_STATUS, ORDER_STATUS_DESCRIPTION, ORDER_TYPE, ITEM_STATUS, ITEM_STATUS_DESCRIPTION} = require('./order-constants')

const {API_STATUS, DYNAMODB_ERROR_CODES} = require('./zeat-constants.js')

const {processBatchResponse} = require('./dynamo-util.js')

const {debugGeneric, debugCloudWatch, debugCloudWatchError} = require('./debug.js')

const dynamoDb = new aws.DynamoDB.DocumentClient()
const sns = new aws.SNS()

function getRangeKeyId (orderDateInISO, orderId) {
  return `DATE:${orderDateInISO}$ORDER:${orderId}`
}

// Get Active Order for Diner
function getActiveOrder (dinerId) {
  return new Promise((resolve, reject) => {
    const twoHoursPrior = new Date()
    twoHoursPrior.setHours(twoHoursPrior.getHours() - 2)

    debugCloudWatch('Checking for Active Order')

    // Params for getting recent orders
    const checkDinerOrderParams = {
      TableName: process.env.TABLE_ORDER,
      IndexName: 'DinerOrderDateIndex',
      KeyConditionExpression: 'dinerId = :dinerId and orderDate >= :startTime',
      ExpressionAttributeValues: {
        ':dinerId': dinerId,
        ':startTime': zeatUtil.toISOString(twoHoursPrior)
      },
      ScanIndexForward: false,
      Limit: 10
    }

    dynamoDb.query(checkDinerOrderParams).promise()
      .then((data) => {
        debugGeneric(JSON.stringify(data))
        let index = 0
        let order = {}

        let activeOrderSearchComplete = false
        doUntil(
          (callback) => {
            if (data.Items.length === 0) {
              activeOrderSearchComplete = true
              callback()
            } else {

              const checkOrderStatusParams = {
                TableName: process.env.TABLE_ORDER,
                Key: {
                  orderId: data.Items[index].orderId,
                  rangeKeyId: ORDER_DETAIL_CONSTANTS.ORDER
                }
              }

              index++
              dynamoDb.get(checkOrderStatusParams).promise()
                .then((orderData) => {
                  debugGeneric(`Order Record => ${JSON.stringify(orderData.Item)}`)

                  if (orderData.Item.orderStatusId <= ORDER_STATUS.PAYMENT_COMPLETED) {
                    order = orderData.Item
                    activeOrderSearchComplete = true
                  }
                  callback()
                })
                .catch((err) => {
                  reject(err)
                })
            }
          },
          // Do Until Condition Check
          () => activeOrderSearchComplete || (index > data.Items.length - 1),
          // Final call from doUntil after it is complete
          (err) => {
            if (err) {
              reject(err)
            } else {
              debugCloudWatch('Returning Active Order')
              resolve({
                status: API_STATUS.SUCCESS,
                order: order
              })
            }
          }
        )
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function getOrderDetails (dinerId, orderId) {
  return new Promise((resolve, reject) => {
    const getOrderParams = {
      TableName: process.env.TABLE_ORDER,
      KeyConditionExpression: 'orderId = :orderId',
      ExpressionAttributeValues: {
        ':orderId': orderId
      }
      // ConsistentRead: true
    }

    dynamoDb.query(getOrderParams).promise()
      .then((orderData) => {

        const orderDiner = orderData.Items.filter(orderRecord => orderRecord.rangeKeyId === `DINER:${dinerId}`)

        let orderDetails = []
        if (orderDiner.length === 1) {
          if (orderDiner[0].dinerStatus === DINER_STATUS.APPROVED) {
            orderDetails = orderData.Items
          }
        }

        return resolve({
          status: API_STATUS.SUCCESS,
          order: orderDetails
        })

      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(err)
      })
  })
}

/**
 * @param diner
 * @param orderParams
 * @param orderParams.orderDateTime Order DateTime
 * @param orderParams.groupName Group Name
 * @param orderParams.orderType Order Type
 * @param orderParams.groupCount Group Count
 * @returns {Promise}
 */
function createNewOrder (diner, orderParams) {
  return new Promise((resolve, reject) => {
    debugGeneric(`Diner -> ${JSON.stringify(diner)}`)
    debugGeneric(`New Order Detail -> ${JSON.stringify(orderParams)}`)

    const currTime = new Date()

    let orderDateTime = currTime

    debugCloudWatch(`Current Time -> ${zeatUtil.toISOString(orderDateTime)}`)

    const isoOrderDateTimeInString = orderParams.orderDateTime
    if (isoOrderDateTimeInString) {
      orderDateTime = new Date(isoOrderDateTimeInString)
      debugCloudWatch(`Order Date Time -> ${zeatUtil.toISOString(orderDateTime)}`)
    }

    // TODO
    // Validate Order Type
    let orderStatusId = ORDER_STATUS.WAITING_FOR_TABLE
    if (orderParams.orderType === ORDER_TYPE.ONLINE) {
      orderStatusId = ORDER_STATUS.ONLINE_ORDER
    }

    const orderId = uuidV4()
    const rangeKeyId = getRangeKeyId(zeatUtil.toISOString(orderDateTime), orderId)

    const orderBatchPutParams = {
      RequestItems: {
        [process.env.TABLE_RESTAURANT_ORDER]: [{
          PutRequest: {
            Item: {
              restaurantId: orderParams.restaurant.restaurantId,
              rangeKeyId: rangeKeyId,
              orderId: orderId,
              restaurant: orderParams.restaurant,
              orderDate: zeatUtil.toISOString(orderDateTime),
              groupName: orderParams.groupName,
              orderType: orderParams.orderType,
              groupCount: orderParams.groupCount,
              orderStatusId: orderStatusId,
              diners: [diner],
              orderStatus: ORDER_STATUS_DESCRIPTION[orderStatusId],
              submittedAt: zeatUtil.toISOString(currTime),
              updatedAt: zeatUtil.toISOString(currTime)
            }
          }
        }],
        [process.env.TABLE_ORDER]: [{
          PutRequest: {
            Item: {
              orderId: orderId,
              rangeKeyId: ORDER_DETAIL_CONSTANTS.ORDER,
              restaurant: orderParams.restaurant,
              restaurantId: orderParams.restaurant.restaurantId,
              orderDate: zeatUtil.toISOString(orderDateTime),
              groupName: orderParams.groupName,
              orderType: orderParams.orderType,
              groupCount: orderParams.groupCount,
              orderStatusId: orderStatusId,
              orderStatus: ORDER_STATUS_DESCRIPTION[orderStatusId],
              submittedAt: zeatUtil.toISOString(currTime),
              updatedAt: zeatUtil.toISOString(currTime)
            }
          }
        },
          {
            PutRequest: {
              Item: {
                orderId: orderId,
                rangeKeyId: ORDER_DETAIL_CONSTANTS.DINER + diner.dinerId,
                dinerId: diner.dinerId,
                diner: diner,
                orderDate: zeatUtil.toISOString(orderDateTime),
                restaurant: orderParams.restaurant,
                restaurantId: orderParams.restaurant.restaurantId,
                dinerStatus: DINER_STATUS.APPROVED,
                submittedAt: zeatUtil.toISOString(currTime),
                updatedAt: zeatUtil.toISOString(currTime)
              }
            }
          }
        ]
      }
    }

    dynamoDb.batchWrite(orderBatchPutParams).promise()
      .then((data) => {
        // TO DO
        // Need to implement JITTER based retry
        debugGeneric(`Batch Result -> ${JSON.stringify(data)}`)

        // SNS Topic Creation
        let orderTopicParams = {
          Name: `order-${orderId}`
        }

        sns.createTopic(orderTopicParams).promise()
          .then((response) => {
            debugGeneric(JSON.stringify(response))
          })
          .catch((error) => {
            debugCloudWatchError(JSON.stringify(error))
          })

        return resolve({
          status: API_STATUS.SUCCESS,
          order: [orderBatchPutParams.RequestItems[process.env.TABLE_ORDER][0].PutRequest.Item,
            orderBatchPutParams.RequestItems[process.env.TABLE_ORDER][1].PutRequest.Item]
        })
      })
      .catch((error) => reject(error))
  })
}

/**
 * @param dinerId
 * @param orderId
 * @returns {Promise}
 */
function cancelOrder (dinerId, orderId) {
  return new Promise((resolve, reject) => {
    // TODO
    // If diner has active items in the order, a notification
    // needs to be sent to Restaurant for order. The notification
    // should be sent to restaurant after approval from another
    // diner. For now just cancelling the order without
    // checking anything else.

    const deleteDinerParams = {
      TableName: process.env.TABLE_ORDER,
      Key: {
        orderId: orderId,
        rangeKeyId: ORDER_DETAIL_CONSTANTS.DINER + dinerId
      }
    }

    dynamoDb.delete(deleteDinerParams).promise()
      .then(() => {
        resolve({
          status: API_STATUS.SUCCESS
        })
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        reject(new Error({
            status: API_STATUS.ERROR,
            message: 'Unable to cancel your request'
          }
        ))
      })
  })
}

/**
 *
 * @param diner
 * @param order
 * @returns {Promise}
 */
function joinOrder (diner, order) {
  return new Promise((resolve, reject) => {
    // Get Active Order For Diner
    getActiveOrder(diner.dinerId)
      .then((currentOrder) => {
        if (currentOrder.status === API_STATUS.SUCCESS) {
          if (!currentOrder.order.orderId) {
            const currTime = new Date()

            debugCloudWatch('Adding Diner to Order as Unapproved')

            // TODO
            // Logic around Pre-approved Joining Table will be implemented later
            // The code should check the pre-approver to be an approved diner
            // before auto approving current diner

            const dinerOrderAttributes = {
              orderId: order.orderId,
              rangeKeyId: ORDER_DETAIL_CONSTANTS.DINER + diner.dinerId,
              diner: diner,
              dinerId: diner.dinerId,
              orderDate: order.orderDate,
              restaurant: order.restaurant,
              dinerStatus: DINER_STATUS.UNAPPROVED,
              restaurantId: order.restaurant.restaurantId,
              createdAt: zeatUtil.toISOString(currTime),
              updatedAt: zeatUtil.toISOString(currTime)
            }

            const orderPutParams = {
              TableName: process.env.TABLE_ORDER,
              Item: dinerOrderAttributes
            }

            dynamoDb.put(orderPutParams).promise()
              .then(() => {
                debugGeneric('Success')
                resolve({
                  status: API_STATUS.SUCCESS,
                  message: 'Your request to join table has been sent. Please have your friends approve it.'
                })
              })
              .catch((err) => {
                debugCloudWatchError(err)
                reject(new Error({
                  status: API_STATUS.ERROR,
                  message: 'Unable to join order. Please try again later.'
                }))
              })
          } else if (order.orderId === currentOrder.order.orderId) {
            resolve({
              status: API_STATUS.SUCCESS,
              message: 'You have already requested to join this table.'
            })
          } else {
            reject(new Error({
              status: API_STATUS.ERROR,
              message: 'You have another active Order. Please cancel it before joining another table.'
            }))
          }
        } else {
          reject(new Error({
            status: API_STATUS.ERROR,
            message: 'Unable to join order. Please try again later.'
          }))
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 *
 * @param dinerAttributes
 * @param restId
 * @param rangeKeyId
 * @returns {Promise}
 */
function appendDinerToDinersMap (dinerAttributes, restId, rangeKeyId) {
  return new Promise((resolve) => {
    debugGeneric(`Append Diner Attributes -> ${JSON.stringify(dinerAttributes)}`)
    debugGeneric(`Restaurant Id -> ${restId}`)
    debugGeneric(`Range Key Id -> ${rangeKeyId}`)

    const updDinerToOrderMapParams = {
      TableName: process.env.TABLE_RESTAURANT_ORDER,
      Key: {
        restaurantId: restId,
        rangeKeyId: rangeKeyId
      },
      UpdateExpression: 'SET #dinerList = list_append(#dinerList, :diner)',
      ExpressionAttributeNames: {
        '#dinerList': 'diners'
      },
      ExpressionAttributeValues: {
        ':diner': dinerAttributes
      },
      ReturnConsumedCapacity: 'TOTAL'
    }

    dynamoDb.update(updDinerToOrderMapParams).promise()
      .then(() => {
        debugCloudWatch('Diner added to the list too')
        return resolve({status: API_STATUS.SUCCESS})
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))
        return resolve({
          status: API_STATUS.ERROR,
          message: 'Unable to approve diner now.'
        })
      })
  })
}

/**
 *
 * @param orderId
 * @param dinerId
 * @param status
 * @returns {Promise}
 */
function updateDinerStatus (orderId, dinerId, status) {
  return new Promise((resolve, reject) => {
    const currTime = new Date()

    const updDinerStatusParams = {
      TableName: process.env.TABLE_ORDER,
      Key: {
        orderId: orderId,
        rangeKeyId: ORDER_DETAIL_CONSTANTS.DINER + dinerId
      },
      UpdateExpression: 'SET #DINER_STATUS = :newStatus, updatedAt = :updatedAt',
      ConditionExpression: '#DINER_STATUS <> :newStatus',
      ExpressionAttributeNames: {
        '#DINER_STATUS': 'dinerStatus'
      },
      ExpressionAttributeValues: {
        ':newStatus': status,
        ':updatedAt': `${currTime.toISOString().split('.')[0]}Z`
      }
    }

    debugGeneric(JSON.stringify(updDinerStatusParams))

    dynamoDb.update(updDinerStatusParams).promise()
      .then(() => {
        debugCloudWatch('Diner status updated')
        // console.log(JSON.stringify(res))
        return resolve({status: API_STATUS.SUCCESS})
      })
      .catch((err) => {
        debugCloudWatchError(JSON.stringify(err))

        if (err.code === DYNAMODB_ERROR_CODES.CONDITIONAL_CHECK_FAIL) {
          return resolve({status: API_STATUS.SUCCESS})
        } else {
          return reject(new Error({status: API_STATUS.ERROR}))
        }
      })
  })
}

function approveDiners (orderId, dinerId, approverId) {
  return new Promise((resolve, reject) => {

    getActiveOrder(dinerId)
      .then((activeOrder) => {

        if (activeOrder.order.orderId === orderId) {
          return getOrderDetails(approverId, orderId)
        }
      })
      .then((orderDetails) => {

        if (orderDetails.order.length > 0) {
          resolve(updateDinerStatus(orderId, dinerId, DINER_STATUS.APPROVED))
        } else {
          resolve({
            status: API_STATUS.ERROR,
            message: 'You are not authorized to approve.'
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 *
 * @param {Object} orderDiner - Order under which the items have to be added
 * @param {String} orderDiner.restaurantId - Restaurant for which order needs to be updated
 * @param {String} orderDiner.orderId - Order under which items have to be added
 * @param {String} orderDiner.dinerId - Diner ID for whome the items have to be added
 * @param {Object[]} items - List of Items to be added to the array
 * @returns {Promise}
 */
function updateItems (orderDiner, items) {
  return new Promise((resolve, reject) => {

    const totalItems = items.length
    let itemsProcessedCount = 0
    let failedItems = []

    debugGeneric(JSON.stringify(orderDiner))

    items.forEach((item) => {
      debugGeneric(JSON.stringify(item))
      const itemPutParams = {
        TableName: process.env.TABLE_ORDER,
        Item: {
          orderId: item.orderId || orderDiner.orderId,
          rangeKeyId: `ITEM:${item.orderItemId}`,
          orderItemId: item.orderItemId,
          dinerId: item.dinerId || orderDiner.dinerId,
          restaurantId: item.restaurantId,
          itemId: item.itemId,
          itemName: item.itemName,
          itemDescription: item.itemDescription,
          itemQuantity: item.itemQuantity,
          itemPrice: item.itemPrice,
          orderItemStatus: item.orderItemStatus,
          orderItemStatusDescription: ITEM_STATUS_DESCRIPTION[item.orderItemStatus],
          orderItemTotalPrice: item.orderItemTotalPrice,
          itemOptionGroups: item.itemOptionGroups
        },
        ConditionExpression: '(attribute_not_exists(rangeKeyId) or orderItemStatus <= :itemInCartStatus) OR (orderItemStatus > :itemInCartStatus AND orderItemStatus <= :orderItemStatus and itemQuantity = :itemQuantity and itemId = :itemId and itemPrice = :itemPrice and orderItemTotalPrice = :orderItemTotalPrice)',
        ExpressionAttributeValues: {
          ':orderItemStatus': item.orderItemStatus,
          ':itemInCartStatus': ITEM_STATUS.ITEM_ADDED_IN_CART,
          ':itemQuantity': item.itemQuantity,
          ':itemId': item.itemId,
          ':itemPrice': item.itemPrice,
          ':orderItemTotalPrice': item.orderItemTotalPrice
        }
      }

      dynamoDb.put(itemPutParams).promise()
        .then(() => {
          itemsProcessedCount += 1
          if (itemsProcessedCount >= totalItems) {
            debugCloudWatch('All Records Processed')
            debugCloudWatch('Failed Records -> ', failedItems.length)
            if (failedItems.length > 0) {
              debugCloudWatch('Some or all records failed')
              resolve({
                status: API_STATUS.ERROR,
                message: 'There was an error processing your request. Please check and request again.',
                failures: failedItems
              })
            } else {
              resolve({
                status: API_STATUS.SUCCESS
              })

            }

          }
        })
        .catch((error) => {
          debugCloudWatchError(JSON.stringify(error))
          itemsProcessedCount += 1
          failedItems.push(item)

          if (itemsProcessedCount >= totalItems) {
            debugCloudWatch('All Records Processed')
            debugCloudWatch('Failed Records -> ', failedItems.length)

            resolve({
              status: API_STATUS.ERROR,
              message: 'There was an error processing your request. Please check and request again.',
              failures: failedItems
            })
          }
        })

    })

    // // Check whether Order is Active
    // // For now we will assume that App will implement the check
    // items.forEach((item) => {
    //   let batchRequestItem = {
    //     PutRequest: {
    //       Item: {
    //         orderId: orderDiner.orderId,
    //         rangeKeyId: `ITEM:${item.orderItemId}`,
    //         dinerId: orderDiner.dinerId,
    //         restaurantId: orderDiner.restaurantId,
    //         itemId: item.itemId,
    //         itemName: item.itemName,
    //         itemDescription: item.itemDescription,
    //         itemQuantity: item.itemQuantity,
    //         itemPrice: item.itemPrice,
    //         orderItemStatus: item.orderItemStatus,
    //         orderItemTotalPrice: item.orderItemTotalPrice,
    //         itemOptionGroups: item.itemOptionGroups
    //       }
    //     }
    //   }
    //   putItemsBatchRequest.RequestItems[process.env.TABLE_ORDER].push(batchRequestItem)
    // })
    //
    // // Call Batch Write with custom response function that retries
    // let batchResponse = dynamoDb.batchWrite(putItemsBatchRequest, processBatchResponse)
    //
    // if (batchResponse instanceof Error) {
    //   reject(err)
    //
    // } else {
    //   resolve(batchResponse)
    // }
  })
}

module.exports = {
  getActiveOrder,
  getOrderDetails,
  createNewOrder,
  cancelOrder,
  joinOrder,
  appendDinerToDinersMap,
  approveDiners,
  updateItems
}
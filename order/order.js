const orderUtil = require('./order-util.js')
const {API_STATUS} = require('./zeat-constants.js')
const {debugGeneric, debugCloudWatch, debugCloudWatchError} = require('./debug.js')

const {DINER_STATUS} = require('./order-constants')

function getRangeKeyId (orderDateInISO, orderId) {
  return `DATE:${orderDateInISO}$ORDER:${orderId}`
  // return `DATE:${orderDateInISO}$` + `ORDER:${orderId}`
}

const api = {
  createOrder: (event, context, callback) => {
    // Get value from Cognito Context
    // const dinerId = event.requestContext.authorizer.claims.sub;
    console.log(`Context -> ${JSON.stringify(event)}`)

    const {
      username,
      dinerId
    } = event.context

    orderUtil.getActiveOrder(dinerId)
      .then((currentOrder) => {
        debugGeneric(`Active Order Result => ${JSON.stringify(currentOrder)}`)
        if (currentOrder.status === API_STATUS.SUCCESS) {
          if (!currentOrder.order.orderId) {
            debugCloudWatch('Create New Order')

            const {
              nickname,
              phone
            } = event.body.diner

            const diner = {
              dinerId,
              username,
              nickname,
              phone
            }

            const orderParams = event.body

            orderUtil.createNewOrder(diner, orderParams)
              .then((newOrder) => {
                callback(null, newOrder)
              })
              .catch(error => {
                debugCloudWatchError(JSON.stringify(error))
                callback(null, {
                  status: API_STATUS.ERROR,
                  message: 'Unable to request for a new table. Please try again.'
                })
              })
          } else {
            callback(null, {
              status: API_STATUS.ERROR,
              message: 'You already have an active order. Please cancel that to create a new order.'
            })
          }
        } else {
          callback(null, {
            status: API_STATUS.ERROR,
            message: 'Unable to request for a new table. Please try again.'
          })
        }
      })
      .catch((error) => {
        debugCloudWatchError(JSON.stringify(error))
        callback(null, {
          status: API_STATUS.ERROR,
          message: 'Unable to request for a new table. Please try again.'
        })

      })
  },
  activeOrder: (event, context, callback) => {
    // Get value from Cognito Context

    debugGeneric(JSON.stringify(event))

    const dinerId = event.requestContext.authorizer.claims.sub

    orderUtil.getActiveOrder(dinerId)
      .then((currentOrder) => {
        debugGeneric(`Response -> ${JSON.stringify(currentOrder)}`)

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(currentOrder)
        })
      })
  },
  getOrderDetails: (event, context, callback) => {
    // Get value from Cognito Context
    debugGeneric(JSON.stringify(event))

    const {dinerId} = event.context
    const {orderId} = event.params.path

    orderUtil.getOrderDetails(dinerId, orderId)
      .then((orderDetails) => {
        debugGeneric(`Response -> ${JSON.stringify(orderDetails)}`)

        callback(null, orderDetails)
      })
  },
  joinOrder: (event, context, callback) => {
    const dinerId = event.requestContext.authorizer.claims.sub
    const username = event.requestContext.authorizer.claims['cognito:username']

    const requestBody = JSON.parse(event.body)

    const {
      nickname,
      phone
    } = requestBody.diner

    const {orderId} = event.pathParameters

    orderUtil.getActiveOrder(dinerId)
      .then((currentOrder) => {
        if (currentOrder.status === API_STATUS.SUCCESS) {
          if (currentOrder.order.length === 0) {

            const diner = {
              dinerId,
              username,
              nickname,
              phone
            }

            const joinOrderParams = event.body

            return orderUtil.joinOrder(diner, joinOrderParams)
          } else if (orderId === currentOrder.order.orderId) {
            return {
              status: API_STATUS.SUCCESS,
              message: 'You have already requested to join this table.'
            }
          } else {
            return {
              status: API_STATUS.SUCCESS,
              message: 'You have another active Order. Please cancel it before joining another table.'
            }
          }
        } else {
          return {
            status: API_STATUS.SUCCESS,
            message: 'Unable to join order. Please try again later.'
          }
        }
      })
      .then((res) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res)
        })
      })
      .catch((err) => {
        // Gets called if request fails, or even if .then fails
        console.log(err)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: API_STATUS.ERROR,
            message: 'Unable to Join Table. Please try again later.'
          })
        })
      })
  },
  approveDiner: (event, context, callback) => {
    // Get value from Cognito Context
    const dinerId = event.requestContext.authorizer.claims.sub
    const {orderId} = event.pathParameters
    const dinerToApprove = event.pathParameters.dinerId
    let orderDateTime

    orderUtil.getActiveOrder(dinerId)
      .then((currentOrder) => {
        let isApproverApproved = false
        let isDinerAlreadyApproved = false
        let approvedDinerAttributes

        const orderSummary = currentOrder.order.filter(orderRecord => orderRecord.rangeKeyId === 'ORDER')

        const restId = orderSummary[0].restaurant.restaurantId
        orderDateTime = orderSummary[0].orderDate

        console.log(`Restaurant ID -> ${restId}`)

        if (orderSummary[0].orderId === orderId) {
          console.log(`Setting Order Date -> ${orderDateTime}`)

          const orderDiners = currentOrder.order.filter(orderRecord => orderRecord.rangeKeyId.startsWith('DINER'))

          orderDiners.forEach((orderDiner) => {
            console.log(`Diner is ${JSON.stringify(orderDiner)}`)

            if (orderDiner.diner.dinerId === dinerId && orderDiner.status === DINER_STATUS.APPROVED) {
              isApproverApproved = true
              console.log('Approver is approved.')
            }

            if (orderDiner.diner.dinerId === dinerToApprove) {
              if (orderDiner.status === DINER_STATUS.APPROVED) {
                isDinerAlreadyApproved = true
                console.log('Diner already approved.')
              }
              approvedDinerAttributes = orderDiner.diner
            }
          })

          console.log(`isApproverApproved -> ${isApproverApproved}`)
          console.log(`isDinerAlreadyApproved -> ${isDinerAlreadyApproved}`)

          if (isDinerAlreadyApproved) {
            return {status: API_STATUS.SUCCESS}
          } else if (isApproverApproved) {
            console.log('Adding diner as approved')
            const rangeKeyId = getRangeKeyId(orderDateTime, orderId)
            return orderUtil.appendDinerToDinersMap([approvedDinerAttributes], restId, rangeKeyId)
          } else {
            return {status: API_STATUS.ERROR}
          }
        } else {
          return {status: API_STATUS.ERROR}
        }
      })
      .then((res) => {
        console.log(`Order Date -> ${orderDateTime}`)
        if (res.status === API_STATUS.SUCCESS) {
          return orderUtil.updateDinerStatus({
            orderId,
            dinerToApprove,
            status: DINER_STATUS.APPROVED
          })
        } else {
          return {status: API_STATUS.ERROR}
        }
      })
      .then((res) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res)
        })
      })
      .catch((err) => {
        console.log(`Error -> ${JSON.stringify(err)}`)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: 'ERROR'
          })
        })
      })
  },
  updateItems: (event, context, callback) => {
    // Get value from Cognito Context
    const dinerId = event.requestContext.authorizer.claims.sub
    const {orderId} = event.pathParameters

    const orderDiner = {
      orderId: orderId,
      dinerId: dinerId
    }

    const items = JSON.parse(event.body)

    orderUtil.updateItems(orderDiner, items)
      .then((response) =>  {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(response)
        })
      })
      .catch((error) => {
        debugCloudWatchError(JSON.stringify(error))
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: 'ERROR',
            message: 'Error receieved while processing request. Please retry.'
          })
        })

      })


  }
}



module.exports = {
  dinerActivOrder: api.activeOrder,
  getOrderDetails: api.getOrderDetails,
  createOrder: api.createOrder,
  joinOrder: api.joinOrder,
  approveDiner: api.approveDiner,
  listOrders: api.listOrders,
  updateItems: api.updateItems
}

const {describe, it, before} = require('mocha')

const chai = require('chai')

const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
chai.should()

const {expect} = chai

const debugMocha = require('debug')('Mocha')

const aws = require('aws-sdk')

const dynamoDb = new aws.DynamoDB.DocumentClient()

const orderUtil = require('./../order-util.js')
const orderConstants = require('./../order-constants')
const orderMockup = require('./order-mockup')
const {API_STATUS, DYNAMODB_ERROR_CODES} = require('./../zeat-constants.js')

// var order = null
let order
let diner1Order = null
let diner2Order = null
let status = null
let orderDate
let orderRestaurantId

const diner1 = {
  dinerId: process.env.DINER1_DINERID,
  username: process.env.DINER1_USERNAME,
  nickname: process.env.DINER1_NICKNAME,
  phone: process.env.DINER1_PHONE
}

const orderParams = {
  restaurant: {
    restaurantId: process.env.KANISHKA_RESTAURANT_ID,
    name: process.env.KANISHKA_RESTAURANT_NAME,
    address: process.env.KANISHKA_RESTAURANT_ADDRESS
  },
  groupName: process.env.DINER1_ORDER_GROUP_NAME,
  groupCount: process.env.DINER1_ORDER_GROUP_COUNT,
  orderType: process.env.DINER1_ORDER_GROUP_TYPE
}

const joinOrderParams = {
  restaurant: {
    restaurantId: process.env.KANISHKA_RESTAURANT_ID,
    name: process.env.KANISHKA_RESTAURANT_NAME,
    address: process.env.KANISHKA_RESTAURANT_ADDRESS
  }
}

const diner2 = {
  dinerId: process.env.DINER2_DINERID,
  username: process.env.DINER2_USERNAME,
  nickname: process.env.DINER2_NICKNAME,
  phone: process.env.DINER2_PHONE
}

describe('Before Testing Setup', function () {
  // var activeOrderResult = null

  // Get Active Order and delete all records manually

  before((done) => {
    orderUtil.getActiveOrder(diner1.dinerId)
      .then((orderResponse) => {
        if (orderResponse.order.orderId) {
          return orderUtil.getOrderDetails(diner1.dinerId, orderResponse.order.orderId)
        } else {
          return {order: []}
        }
      })
      .then((activeOrder) => {
        let recordCount = activeOrder.order.length
        let deletedRecorCount = 0
        if (recordCount > 0) {
          activeOrder.order.forEach((item) => {
            const deleteDinerParams = {
              TableName: process.env.TABLE_ORDER,
              Key: {
                orderId: item.orderId,
                rangeKeyId: item.rangeKeyId
              }
            }

            dynamoDb.delete(deleteDinerParams).promise()
              .then((result) => {
                deletedRecorCount += 1
                if (deletedRecorCount >= recordCount) {
                  debugMocha('Order Deleted')
                  done()
                }
              })
              .catch((err) => {
                deletedRecorCount += 1
                if (deletedRecorCount >= recordCount) {
                  done()
                }
              })
          })
        } else {
          done()
        }
      })
  })

  diner1Order = null
  status = null

  describe('DINER 1 : Check for Active Order', function () {

    it('Should be fulfilled', function () {
      return orderUtil.getActiveOrder(diner1.dinerId).should.be.fulfilled
        .then((result) => {
          debugMocha(JSON.stringify((result)))
          //Deep Clone the order Object so that the reference is not lost later
          order = result.order
          status = result.status
        })
    })

    it('Should return SUCCESS status', () => {
      expect(status).to.equal('SUCCESS')
    })

    it('Should not have any active order', function () {
      expect(order).to.deep.equal({})
    })
  })

})

describe('ORDER: Order Creation & Joining', function () {

  describe('DINER 1 : Create New Order', function () {
    diner1Order = null
    status = null

    it(`Should be created`, function () {
      return orderUtil.createNewOrder(diner1, orderParams).should.be.fulfilled
        .then((result) => {
          diner1Order = result.order
          status = result.status
        })
    })

    it(`Should have 2 rows`, function () {
      diner1Order.should.be.instanceOf(Array)
        .and.have.length(2)
    })

  })

  describe(`DINER 1 : Get Order Details`, function () {

    order = null

    it('Should return recently created Order', function () {
      return orderUtil.getActiveOrder(diner1.dinerId).should.eventually.be.fulfilled
        .then((result) => {
          debugMocha(JSON.stringify((result)))
          order = JSON.parse(JSON.stringify(result.order))
          status = result.status
        })
    })

    it('Should return order details', function () {

      return orderUtil.getOrderDetails(diner1.dinerId, order.orderId).should.be.fulfilled
        .then((result) => {
          diner1Order = result.order
          status = result.status
          orderDate = diner1Order[0].orderDate
          orderRestaurantId = diner1Order[0].restaurantId
        })

      // TODO
      // Check for message later
    })

    it(`Should have 2 rows`, function () {
      diner1Order.should.be.instanceOf(Array)
        .and.have.length(2)
    })

    it('DINER1 Status should be Approved', function () {
      (diner1Order.filter((item) => item.rangeKeyId === orderConstants.ORDER_DETAIL_CONSTANTS.DINER + diner1.dinerId))[0].should.have.deep.property('dinerStatus', 'approved')
    })

  })

  describe(`DINER 2 : Join DINER 1`, function () {
    it('Should be fulfilled', function () {

      joinOrderParams.orderId = order.orderId
      joinOrderParams.orderDate = order.orderDate

      var joinOrderPromise = orderUtil.joinOrder(diner2, joinOrderParams)

      return expect(joinOrderPromise).to.eventually.be.fulfilled
        .and.have.property('status').to.equal('SUCCESS')

      // TODO
      // Check for message later
    })
  })

  describe('DINER 1 : Check Active Order After DINER 1 Joining', function () {
    diner1Order = null
    status = null

    it('Should return order details', function () {

      return orderUtil.getOrderDetails(diner1.dinerId, order.orderId).should.be.fulfilled
        .then((result) => {
          diner1Order = result.order
          status = result.status
        })

      // TODO
      // Check for message later
    })

    it(`Should have 3 rows`, function () {
      diner1Order.should.be.instanceOf(Array)
        .and.have.length(3)
    })

    it('DINER2 Status should be Unapproved', function () {
      (diner1Order.filter((item) => item.rangeKeyId === orderConstants.ORDER_DETAIL_CONSTANTS.DINER + diner2.dinerId))[0].should.have.deep.property('dinerStatus', 'unapproved')
    })

  })

  describe('DINER 2 : Check Active Order', function () {
    diner2Order = null
    status = null

    it('Should be fulfilled', function () {
      return orderUtil.getActiveOrder(process.env.DINER2_DINERID).should.be.fulfilled
        .then((result) => {
          diner2Order = result.order
          status = result.status
        })
    })

    it('Should return SUCCESS status', () => {
      expect(status).to.equal('SUCCESS')
    })

    it('Should be equal to DINER 1 Order', function () {
      expect(diner2Order.orderId).to.equal(order.orderId)
    })

    // it('DINER 1 & DINER 2 orders should match', function () {
    //   // expect(diner1Order).excluding('tokens').to.deep.equal(diner2Order)
    //   expect(diner1Order).to.deep.equal(diner2Order)
    // })
  })

  describe('DINER 2 : Get Order Details before being APPROVED ', function () {
    diner1Order = null
    status = null

    it('Should return order details', function () {

      return orderUtil.getOrderDetails(diner2.dinerId, order.orderId).should.be.fulfilled
        .then((result) => {
          diner2Order = result.order
          status = result.status
        })

    })

    it('Should return SUCCESS status', () => {
      expect(status).to.equal('SUCCESS')
    })

    it(`Should have 0 rows`, function () {
      diner1Order.should.be.instanceOf(Array)
        .and.have.length(3)
    })

  })

  describe('DINER 2 : Join DINER 1 Order Again', function () {
    it('Should result in ALREADY REQEUESTED TO JOIN TABLE message', function () {
      var joinOrderPromise = orderUtil.joinOrder(diner2, joinOrderParams)

      return expect(joinOrderPromise).to.eventually.be.fulfilled
        .and.have.property('message').to.equal('You have already requested to join this table.')
    })
  })

  describe('DINER 1 : Approve Diner 2', function () {
    it('Should result in Diner 2 getting approved', function () {
      var approveDiner2Promise = orderUtil.approveDiners(order.orderId, diner2.dinerId, diner1.dinerId)

      return expect(approveDiner2Promise).to.eventually.be.fulfilled
        .and.have.property('status').to.equal('SUCCESS')
    })

    diner2Order = null
    status = null
    it('Should be fulfilled', function () {
      return orderUtil.getOrderDetails(diner2.dinerId, order.orderId).should.be.fulfilled
        .then((result) => {
          diner2Order = result.order
          status = result.status
        })
    })

    it('Diner2 status should be APPROVED', function () {
      (diner2Order.filter((item) => item.rangeKeyId === orderConstants.ORDER_DETAIL_CONSTANTS.DINER + diner2.dinerId))[0]
        .should.have.deep.property('dinerStatus', 'approved')
    })

  })

})

describe('ORDER: Adding Items', function () {

  beforeEach((done) => {

    diner2Order = null
    status = null

    orderUtil.getOrderDetails(diner2.dinerId, order.orderId).should.be.fulfilled
      .then((result) => {
        diner2Order = result.order
        status = result.status
        done()
      })
  })

  const diner1Items = orderMockup.diner1Items
  const diner2Items = orderMockup.diner2Items

  describe('DINER 1 : Add 2 items to order', function () {
    it('Should be fulfilled with Success Status', function () {
      let orderDiner1 = {
        orderId: order.orderId,
        restaurantId: orderRestaurantId,
        dinerId: diner1.dinerId

      }
      let addDiner1ItemsPromise = orderUtil.updateItems(orderDiner1, diner1Items)

      return expect(addDiner1ItemsPromise).to.eventually.be.fulfilled
        .and.have.deep.property('status', API_STATUS.SUCCESS)
    })

    it('Should contain 2 items', function () {
      let items = diner2Order.filter(item => item.rangeKeyId.includes('ITEM', 0))
      return items.should.have.length(2)
    })

  })

 describe('DINER 2 : Add 2 items to order', function () {

    it('Should be fulfilled with Success Status', function () {
      let orderDiner2 = {
        orderId: order.orderId,
        restaurantId: orderRestaurantId,
        dinerId: diner2.dinerId

      }
      let addDiner2ItemsPromise = orderUtil.updateItems(orderDiner2, diner2Items)

      return expect(addDiner2ItemsPromise).to.eventually.be.fulfilled
        .and.have.deep.property('status', API_STATUS.SUCCESS)
    })

    it('Should contain 4 items', function () {
      let items = diner2Order.filter(item => item.rangeKeyId.includes('ITEM', 0))
      return items.should.have.length(4)
    })

  })

  describe('DINER 2 : Add same items again to order', function () {

    it('Should be fulfilled with Success Status', function () {
      let orderDiner2 = {
        orderId: order.orderId,
        restaurantId: orderRestaurantId,
        dinerId: diner2.dinerId

      }

      let addDiner2ItemsPromise = orderUtil.updateItems(orderDiner2, diner2Items)

      return expect(addDiner2ItemsPromise).to.eventually.be.fulfilled
        .and.have.deep.property('status', API_STATUS.SUCCESS)
    })

    it('Should contain 4 items', function () {
      let items = diner2Order.filter(item => item.rangeKeyId.includes('ITEM', 0))
      return items.should.have.length(4)
    })

  })

  describe('DINER 1 : Update status for Diner1 Items', function () {
    it('Should be fulfilled with Success Status', function () {

      diner1Items[0].orderItemStatus = orderConstants.ITEM_STATUS.ITEM_ORDER_PLACED
      diner1Items[1].orderItemStatus = orderConstants.ITEM_STATUS.ITEM_ORDER_PLACED

      diner1Items[0].orderId = order.orderId
      diner1Items[1].orderId = order.orderId


      let orderDiner1 = {
        orderId: order.orderId,
        restaurantId: orderRestaurantId,
        dinerId: diner1.dinerId

      }
      let addDiner1ItemsPromise = orderUtil.updateItems(orderDiner1, diner1Items)

      return expect(addDiner1ItemsPromise).to.eventually.be.fulfilled
        .and.have.deep.property('status', API_STATUS.SUCCESS)
    })

    it('Should contain 4 items', function () {
      let items = diner2Order.filter(item => item.rangeKeyId.includes('ITEM', 0))
      return items.should.have.length(4)
    })

  })

  describe('DINER 1 : Downgrade Status for one Item', function () {
    it('Should be fulfilled with Error Status', function () {

      diner1Items[0].orderItemStatus = orderConstants.ITEM_STATUS.ITEM_ADDED_IN_CART
      diner1Items[1].orderItemStatus = orderConstants.ITEM_STATUS.ITEM_ORDER_PLACED

      diner1Items[0].orderId = order.orderId
      diner1Items[1].orderId = order.orderId


      let orderDiner1 = {
        orderId: order.orderId,
        restaurantId: orderRestaurantId,
        dinerId: diner1.dinerId

      }
      let addDiner1ItemsPromise = orderUtil.updateItems(orderDiner1, diner1Items)

      return expect(addDiner1ItemsPromise).to.eventually.be.fulfilled
        .and.have.deep.property('status', API_STATUS.ERROR)
    })

    it('Should contain 4 items', function () {
      let items = diner2Order.filter(item => item.rangeKeyId.includes('ITEM', 0))
      return items.should.have.length(4)
    })

  })




})

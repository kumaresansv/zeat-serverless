const {describe, it, before} = require('mocha')

const chai = require('chai')

const chaiAsPromised = require('chai-as-promised')

const {expect} = chai

const debugMocha = require('debug')('Mocha')

const aws = require('aws-sdk')

chai.use(chaiAsPromised)
chai.should()

const restaurantUtil = require('./../restaurant-util')

const {KANISHKA_RESTAURANT, BANGKOK_BASIL_RESTAURANT, SOUTHERN_SPICE_RESTAURANT, HOMEGROWN_RESTAURANT} = require('./restaurant-mockup')

const {KANISHKA_MENU} = require('./menu-mockup')

const KANISHKA_OWNER = process.env.KANISHKA_OWNER

const REDMOND = {
  latitude: 47.67398,
  longitude: -122.121513
}

describe('Testing Restaurant Creation', function () {
  describe('Create Restaurants', function () {
    it('Kanishka Restaurant should be created', function () {
      return restaurantUtil.createRestaurant(KANISHKA_RESTAURANT).should.be.fulfilled
    })

    it('Bangkok Basil Restaurant should be created', function () {
      return restaurantUtil.createRestaurant(BANGKOK_BASIL_RESTAURANT).should.be.fulfilled
    })

    it('Southern Spice Restaurant should be created', function () {
      return restaurantUtil.createRestaurant(SOUTHERN_SPICE_RESTAURANT).should.be.fulfilled
    })

    it('Homegrown Restaurant should be created', function () {
      return restaurantUtil.createRestaurant(HOMEGROWN_RESTAURANT).should.be.fulfilled
    })
  })
})

describe('Search Restaurants', function () {
  describe('Searching Restaurants near Redmond', function () {
    it('Should return with results', function () {
      return restaurantUtil.searchRestaurant(REDMOND).should.eventually.be.fulfilled
        .and.be.instanceOf(Array)
        .and.have.length.greaterThan(0)
    })
  })
})

describe('Create Menu', function () {
  describe('Creating Menu for Kanishka', function () {
    it('Should return with results', function () {
      return restaurantUtil.uploadMenu(process.env.KANISHKA_RESTAURANT_ID, KANISHKA_MENU).should.eventually.be.fulfilled
    })
  })
})

describe('Create Dining Table', function () {

  let diningTable = {
    name: "T1",
    maxSeats: 8
  }

  describe('Creating Table for Kanishka', function () {
    it('Should create table', function () {
      return restaurantUtil.createDiningTable(process.env.KANISHKA_RESTAURANT_ID, diningTable).should.eventually.be.fulfilled
    })
  })
})

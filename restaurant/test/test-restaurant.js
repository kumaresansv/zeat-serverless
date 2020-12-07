const {describe, it, before} = require('mocha')

const chai = require('chai')

const chaiAsPromised = require('chai-as-promised')

const {expect} = chai

const debugMocha = require('debug')('Mocha')

const aws = require('aws-sdk')

chai.use(chaiAsPromised)
chai.should()

const restaurant = require('./../restaurant')

const REDMOND = {queryStringParameters : {
  latitude: 47.67398,
  longitude: -122.121513
}}

var myCallback = function(data) {
  console.log('got data: '+data);
};


describe('Search Restaurants', function () {
  describe('Searching Restaurants near Redmond', function () {
    it('Should return with results', function () {
      debugMocha(JSON.stringify(REDMOND))
      return restaurant.search(REDMOND, {} , myCallback)
        // .should.eventually.be.fulfilled
        // .and.be.instanceOf(Array)
        // .and.have.length.greaterThan(0)
    })
  })
})

'use strict'

const fcmAdmin = require('firebase-admin')
const orderDetailUtil = require('./orderDetailUtil.js')
const AWS = require('aws-sdk')
const parse = AWS.DynamoDB.Converter.output

const serviceAccount = require('./zeat-fb4c2-firebase-adminsdk-9j1w1-11567d6900.json')

var fcmApp = fcmAdmin.initializeApp({
  credential: fcmAdmin.credential.cert(serviceAccount),
  databaseURL: process.env.FCM_DATABASE
})

function reduceEventData (eventData, notificationType) {
  console.log('Filtering Records for type ' + notificationType)

  var reducedData = eventData.Records.reduce(function (prevValue, currentRecord) {
    if (currentRecord.eventName != 'REMOVE') {
      // Parse DynamoDB JSON to Standard JSON
      var currentRecordImage = parse({ M: currentRecord.dynamodb.NewImage })
      console.log('Current Parsed Record -> ' + JSON.stringify(currentRecordImage))

      if (currentRecordImage.notification) {
        if (currentRecordImage.notification.to.indexOf(notificationType) >= 0) {
          prevValue.push(currentRecordImage)
        }
      }
    }
    return prevValue
  }, [])

  return reducedData
}

function sendMessageViaFCM (record) {
  return new Promise(function (resolve, reject) {
    var tokens = record.tokens
    if (!tokens) {
      tokens = orderDetailUtil.getDinerTokenAndUpdate({
        orderId: record.orderId,
        dinerId: record.dinerId
      })
    }

    if (tokens.length > 0) {
      var message = JSON.parse(record.notification)

      var payload = {
        notification: {
          title: message.title,
          body: message.body
        }
      }

      // Set the message as high priority and have it expire after 24 hours.
      var options = {
        priority: message.priority || '',
        timeToLive: 60 * 60 * 24
      }

      fcmAdmin.messaging().sendToDevice(tokens, payload, options)
        .then(function (response) {
          // console.log('Message sent')
          return resolve(response)
        })
        .catch(function (error) {
          // console.log("Error sending message:", error);
          return reject(error)
        })
    }
  })
}

function sendMessageToOrder (record) {
  return new Promise(function (resolve, reject) {
    orderDetailUtil.getOrderDinerTokens(record.orderId)
      .then(registrationTokens => {
        // Send a message to the device corresponding to the provided
        // registration token with the provided options.

        console.log('Fetched Tokens For Order ' + JSON.stringify(registrationTokens))

        if (registrationTokens.length > 0) {
          var message = record.notification

          var payload = {
            notification: {
              title: message.title,
              body: message.body
            }
          }

          // Set the message as high priority and have it expire after 24 hours.
          var options = {
            priority: message.priority || '',
            timeToLive: 60 * 60 * 24
          }

          fcmAdmin.messaging().sendToDevice(registrationTokens, payload, options)
            .then(function (response) {
              return resolve(response)
            })
            .catch(function (error) {
              return reject(error)
            })
        } else {
          return resolve({message: 'No Message Sent'})
        }
      })
  })
}

const api = {
  // TODO do something with this, other than getting all product ids with contributor info

  notifyOrderDiners: (event, context) => {
    // console.log(JSON.stringify(event))

    console.log('App Length -> ' + fcmAdmin.apps.length)

    if (fcmAdmin.apps.length == 0) {
      console.log('Reinitializing FCM App')
      fcmApp = fcmAdmin.initializeApp({
        credential: fcmAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FCM_DATABASE
      })
    }

    var filteredRecords = reduceEventData(event, 'ORDER')
    console.log('Filtered Records -> ' + JSON.stringify(filteredRecords))

    Promise.all(filteredRecords.map(sendMessageToOrder)).then(
      messageResults => {
        // console.log("Missing Tokens -> " + JSON.stringify(missingDinerTokens))
        console.log('Send Message Results -> ' + JSON.stringify(messageResults))
        fcmApp.delete()
      }
    )
  },
  notifyDiner: (event, context) => {
    // console.log(JSON.stringify(event))

    console.log('App Length -> ' + fcmAdmin.apps.length)

    if (fcmAdmin.apps.length == 0) {
      console.log('Reinitializing FCM App')
      fcmApp = fcmAdmin.initializeApp({
        credential: fcmAdmin.credential.cert(serviceAccount),
        databaseURL: process.env.FCM_DATABASE
      })
    }

    var filteredRecords = reduceEventData(event, 'DINER')
    console.log('Filtered Records -> ' + JSON.stringify(filteredRecords))

    Promise.all(filteredRecords.map(sendMessageViaFCM)).then(
      messageResults => {
        // console.log("Missing Tokens -> " + JSON.stringify(missingDinerTokens))
        console.log('Send Message Results -> ' + JSON.stringify(messageResults))
        fcmApp.delete()
      }
    )
    console.log('FCM App -> ' + fcmApp.name)
  }
}

module.exports = {
  notifyDiner: api.notifyDiner,
  notifyOrderDiners: api.notifyOrderDiners
}

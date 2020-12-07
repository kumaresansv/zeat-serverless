'use strict';

const aws = require('aws-sdk')
const dynamoDb = new aws.DynamoDB.DocumentClient()

const constants = {
  // methods
  METHOD_REGISTER_TOKEN: 'registerToken',
  METHOD_DELETE_TOKEN: 'deleteToken',
  DINER: 'DINER',
  TOKEN: 'TOKEN:',

  // resources
  TABLE_DINER: process.env.TABLE_DINER,

  //
  INVALID_REQUEST: 'Invalid Request',
  INTEGRATION_ERROR: 'Integration Error',
  HASHES: '##########################################################################################',
  SECURITY_RISK: '!!!SECURITY RISK!!!',
  DATA_CORRUPTION: 'DATA CORRUPTION',
}

const api = {
  // TODO do something with this, other than getting all product ids with contributor info
  registerDiner: (event, context, callback) => {

    console.log(JSON.stringify(event))
    console.log(JSON.stringify(context))
    const requestBody = JSON.parse(event.body);
    const dinerId = event.requestContext.authorizer.claims.sub
    const username = event.requestContext.authorizer.claims["cognito:username"]
    const nickname = requestBody.nickname
    const profileImage = requestBody.profileImage
    const phone = requestBody.phone
    const currTime = new Date()


    var dinerPutParams = {
      TableName: constants.TABLE_DINER,
      Item: {
        "dinerId": dinerId,
        "rangeKeyId": constants.DINER,
        "username": username,
        "nickname": nickname,
        "profileImage": profileImage,
        "phone": phone,
        "submittedAt": currTime.toISOString()
      }
    }

    dynamoDb.put(dinerPutParams).promise()
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: `SUCCESS`,
            diner: dinerPutParams.Item
          })
        });
      })
      .catch(err => {
        console.log(err);
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            status: `ERROR`,
            message: 'Unable to register diner.'
          })
        })
      });
  },
  registerToken: (event, context, callback) => {

    const requestBody = JSON.parse(event.body);
    const dinerId = event.requestContext.authorizer.claims.sub;
    const token = requestBody.token;
    const currTime = new Date();


    var tokenPutParams = {
      TableName: constants.TABLE_DINER,
      Item: {
        "dinerId": dinerId,
        "rangeKeyId": constants.TOKEN + token,
        "token": token,
        "device":
        "submittedAt": currTime.toISOString()
      }
    }

    dynamoDb.put(tokenPutParams).promise()
      .then(res => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: "SUCCESS",
            token: tokenPutParams.Item
          })
        });
      })
      .catch(err => {
        console.log(err);
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            status: `ERROR`,
            message: 'Unable to register token.'
          })
        })
      });

  },
  // TODO do something with this, other than getting all product ids with contributor info
  deleteToken: (event, context, callback) => {

    const token = event.pathParameters.token
    const dinerId = event.requestContext.authorizer.claims.sub

    var deleteTokenParams = {
      TableName: constants.TABLE_DINER,
      Key: {
        "dinerId": dinerId,
        "rangeKeyId": constants.TOKEN + token
      },
      ReturnConsumedCapacity: "TOTAL"
    };

    dynamoDb.delete(deleteTokenParams).promise()
      .then(res => {
        console.log(JSON.stringify(res))
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            status: `SUCCESS`
          })
        });
      })
      .catch(err => {
        console.log(err);
        callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            status: `ERROR`,
            message: 'Unable to delete token.'
          })
        })
      });
  },
}

module.exports = {
  registerToken: api.registerToken,
  registerDiner: api.registerDiner,
  deleteToken: api.deleteToken
}

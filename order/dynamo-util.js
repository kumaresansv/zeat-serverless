const aws = require('aws-sdk')
const {debugGeneric, debugCloudWatch, debugCloudWatchError} = require('./debug.js')
const {API_STATUS} = require('./zeat-constants.js')

const dynamoDb = new aws.DynamoDB.DocumentClient()

const base = 1000
const cap = 10000
let retryCount = 0
let sleep = 1000

function processBatchResponse(err, data) {

  if (err) {
    debugCloudWatchError(JSON.stringify(err))
    return err
  } else {
    const itemsLost = data.UnprocessedItems

    if (itemsLost.constructor === Object && Object.keys(itemsLost).length === 0) {
      debugGeneric('All records inserted')
      retryCount = 0
      sleep = 1000
      return {
        status: API_STATUS.SUCCESS
      }
    }
    else {
      debugCloudWatch('Resending missed items with Jitter')
      retryCount++

      if (retryCount < 5) {
        setTimeout(() => {
          const params = {}
          params.RequestItems = itemsLost
          dynamoDb.batchWrite(params, processBatchResponse)
        }, sleep)
      } else {
        debugCloudWatchError('Unable to write all records.Returning unprocessed items')
        retryCount = 0
        sleep = 1000
        return {
          status: API_STATUS.ERROR,
          message: 'Unable to order all itmes. Please retry.'
        }
      }
    }
  }
}

module.exports = {
  processBatchResponse
}
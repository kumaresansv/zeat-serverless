const debug = require('debug').debug
const debugCloudWatch = debug('CloudWatch')
const debugGeneric = debug('Generic')


function debugCloudWatchError (message) {
  debugCloudWatch(`[ERROR] -> ${message}`)
}

function debugCloudWatchWarning (message) {
  debugCloudWatch(`[WARNING] -> ${message}`)
}

module.exports = {
  debugCloudWatch,
  debugCloudWatchError,
  debugCloudWatchWarning,
  debugGeneric
}

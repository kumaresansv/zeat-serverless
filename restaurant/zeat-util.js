function toISOString (dateToConvert) {
  return `${dateToConvert.toISOString().split('.')[0]}Z`
}

module.exports = {
  toISOString
}

const convert = require('xml-js')
const notify = require('../lib/notify')
const store = require('../lib/store')

handleMessage = (xmlData) => {
  var result1 = convert.xml2json(xmlData, {compact: true, spaces: 4, ignoreComment: true})
  notify.broadcastLog(result1)
  store.storeMessage(result1)
}

module.exports = {
  handleMessage
}

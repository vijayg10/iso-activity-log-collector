const apiServer = require('./lib/api-server')

var NRP = require('node-redis-pubsub')
const isoHandler = require('./handlers/iso20022')

var config = {
  port: 6379,
  host: 'localhost',
  scope: 'mojaloop'
}

var nrp = new NRP(config)

nrp.on('iso:*', (data, channel) => {
  isoHandler.handleMessage(data.xmlData)
})

nrp.on("error", function(){
  console.log('ERROR')
})

apiServer.startServer(7070)

// nrp.quit()
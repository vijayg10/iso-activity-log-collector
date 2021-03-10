const apiServer = require('./lib/api-server')
const TTKSocketMessageCollector = require('./collectors/ttkSocketMessageCollector')

var NRP = require('node-redis-pubsub')
const isoHandler = require('./handlers/iso20022')

var config = {
  port: 6379,
  host: 'localhost',
  scope: 'mojaloop'
}

// var nrp = new NRP(config)

// nrp.on('iso:*', (data, channel) => {
//   isoHandler.handleMessage(data.xmlData)
// })

// nrp.on("error", function(){
//   console.log('ERROR')
// })

apiServer.startServer(7075)
this.ttkSocketMessageCollectorObj = new TTKSocketMessageCollector()

// nrp.quit()
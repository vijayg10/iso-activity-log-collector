// This is a sample program to push an ISO xml data to redis
// The new simulator components can use similar code to push the activity log

var NRP = require('node-redis-pubsub')
const fs = require('fs')
const { exit } = require('process')



var myArgs = process.argv.slice(2);

if (myArgs.length !== 1) {
    console.log('Usage: node sampleEmit.js <xml-file>\n')
    exit(1)
}
const xmlData = fs.readFileSync(myArgs[0], 'utf8')

var config = {
  port: 6379,
  host: 'localhost',
  scope: 'mojaloop'
}

var nrp = new NRP(config)

// This log is from sender simulator
const sampleRedisMessage1 = {
  fromComponent: 'Pink Bank',
  toComponent: 'Swift Network',
  xmlData: xmlData
}
nrp.emit('iso:sender', sampleRedisMessage1)


// This log is from iso-to-mojaloop adapter
const sampleRedisMessage2 = {
  fromComponent: 'Swift Network',
  toComponent: 'Mojaloop Switch',
  xmlData: xmlData
}
nrp.emit('iso:mojaloop', sampleRedisMessage2)

nrp.quit()

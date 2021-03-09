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

nrp.emit('iso:sender', { xmlData: xmlData })

nrp.quit()

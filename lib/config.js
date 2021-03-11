config = {
  ttkApiBaseUrl: 'http://localhost:5050',
  redisConfig: {
    port: 6379,
    host: 'localhost',
    scope: 'mojaloop'
  }
}

getConfig = () => {
  return config
}

module.exports = {
  getConfig
}
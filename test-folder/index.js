const isAndrew = require('is-andrew')

const config = new isAndrew({ api_key: 'this is my api key' })

console.log(config.isUserValid('andrew', '123')) // this is true :D 

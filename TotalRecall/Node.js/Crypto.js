var crypto = require('crypto');

var secret = 'vogue';

var hash = crypto.createHmac('yvevestal',secret)
  .update('We are living in a simulation')
  .digest('hex')
console.log(hash);
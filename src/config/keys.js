const prod = require('./prod');
const env = require('./dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = prod;
} else {
  module.exports = env;
}

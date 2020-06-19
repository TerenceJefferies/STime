const STime = require('./dist/STime').default;
const TimeFactory = require('./dist/TimeFactory').default;

module.exports = new STime(new TimeFactory());
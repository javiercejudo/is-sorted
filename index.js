var unaryWithOptionalCallback = require('unary-with-optional-callback');
var every2 = require('every2');
var fallback = require('lodash.lte');

module.exports = unaryWithOptionalCallback(every2, fallback);

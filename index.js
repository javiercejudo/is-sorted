var every2 = require('every2');
var lte = require('lodash.lte');

module.exports = function sorted (array, check) {
  return every2(array, check || lte);
};

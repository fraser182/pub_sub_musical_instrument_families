const PubSub = require ('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

//1
InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)
  console.log('Published on all-instruments-ready', this.data);
};

module.exports = InstrumentFamilies;

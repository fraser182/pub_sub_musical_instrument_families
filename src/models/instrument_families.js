const PubSub = require ('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

//1
InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)
  console.log('Published on all-instruments-ready', this.data);

  PubSub.subscribe('InstrumentMenuView:instrument-selected', (event) => {
    const index = event.detail;
    const selectedInstrumentFamily = this.findInstrumentFamily(index);

    PubSub.publish('InstrumentFamilies:instrument-family-found', selectedInstrumentFamily);
    console.log('Subscribed to instrument-family-found:', selectedInstrumentFamily);
  })
};

InstrumentFamilies.prototype.findInstrumentFamily = function(index){
  return this.data[index];
}

module.exports = InstrumentFamilies;

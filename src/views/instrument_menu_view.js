const PubSub = require ('../helpers/pub_sub.js')

const InstrumentMenuView = function(element){
  this.element = element;
};

InstrumentMenuView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    // logging here to make sure we are getting the array of instrument objects passed through successfully after the subscribe
    console.log('dropdown populated', event.detail);
    const allInstruments = event.detail;
    this.populate(allInstruments);
  })
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('InstrumentMenuView:instrument-selected', selectedIndex)
    console.log('published instrument selected', selectedIndex);
  })
};

InstrumentMenuView.prototype.populate = function (instrumentFamiliesData) {
  instrumentFamiliesData.forEach((family, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = family.name;
    this.element.appendChild(option);
  })
};
module.exports = InstrumentMenuView;

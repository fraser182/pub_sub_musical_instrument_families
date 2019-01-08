const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require ('./models/instrument_families.js')
const InstrumentMenuView = require ('./views/instrument_menu_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

//subscribe  to instrumentFamilies
const instrumentMenuView = new InstrumentMenuView();
instrumentMenuView.bindEvents();

  // publishing (drop down menu)
  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData); // pass in the data
  instrumentFamilies.bindEvents();
});

const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require ('./models/instrument_families.js')
const InstrumentMenuView = require ('./views/instrument_menu_view.js')
const InstrumentDetailsView = require ('./views/instrument_details_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  //subscribe  to instrumentFamilies
  const selectElement = document.querySelector('select#instrument-families')
  const instrumentMenuView = new InstrumentMenuView(selectElement);
  instrumentMenuView.bindEvents();

  // subscribe to instrument families
  const detailsContainer = document.querySelector('div#instrument-family-info')
  const instrumentDetailsView = new InstrumentDetailsView(detailsContainer);
  instrumentDetailsView.bindEvents();

  // publishing (drop down menu)
  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData); // pass in the data
  instrumentFamilies.bindEvents();

});

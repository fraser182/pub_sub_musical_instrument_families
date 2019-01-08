const PubSub = require ('../helpers/pub_sub.js')


const InstrumentMenuView = function(element){
  this.element = element;
};

InstrumentMenuView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    // logging here to make sure we are getting the array of instrument objects passed through successfully after the subscribe
    console.log('dropdown populated', event.detail);
    // const allInstruments = event.detail;
    // this.populate(allInstruments);
  });
};

// InstrumentMenuView.prototype.populate = function(instrumentFamilies){
//   instrumentFamilies.forEach((instrumentFamily) => {
//     const instrumentFamilyLink = document.createElement('a'); //create a hyperlink (a) tag
//     instrumentFamilyLink.id = instrumentFamily.name; // because using hypyerlink, use the id.
//     instrumentFamilyLink.classList.add('instrumentFamily-menu-item'); // add a class for styling
//     instrumentFamilyLink.innerText = instrumentFamily.name; // text displayed will be the species
//     this.element.appendChild(instrumentFamilyLink); // every 'a' tag is clickable, so we dont need an event tag on each a. just grab the entire menu (see above)
//   })
// }




module.exports = InstrumentMenuView;

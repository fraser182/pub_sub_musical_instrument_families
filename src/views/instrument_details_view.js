const PubSub = require('../helpers/pub_sub.js');

const InstrumentDetailsView = function(container){
  this.container = container;
};

InstrumentDetailsView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instrument-family-found', (event) => {
    const instrumentFamilyObject = event.detail;
    console.log('subscribe to instruments - instruments found', instrumentFamilyObject.instruments);
    this.render(instrumentFamilyObject);
  });
}

InstrumentDetailsView.prototype.render = function(instrumentObject){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Instrument: ${instrumentObject.name}` ;
  const infoParagraph2 = document.createElement('p');
  infoParagraph2.textContent = `Description: ${instrumentObject.description}`;
  const infoParagraph3 = document.createElement('p');
  infoParagraph3.textContent = `List Of Musical Instruments: ${instrumentObject.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  this.container.appendChild(infoParagraph2);
  this.container.appendChild(infoParagraph3);
};




module.exports = InstrumentDetailsView;

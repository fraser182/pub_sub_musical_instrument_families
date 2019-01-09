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
  infoParagraph.textContent = `Instrument: ${instrumentObject.name} Description: ${instrumentObject.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};




module.exports = InstrumentDetailsView;

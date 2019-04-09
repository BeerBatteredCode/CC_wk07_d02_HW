const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instrumentFamilyData) {
  this.data = instrumentFamilyData;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Instruments:all-ready', this.data);

  PubSub.subscribe('Instruments:id-selected', (evt) => {
    const selectedIndex = evt.detail;
    this.findObjectByIndex(selectedIndex);
  });
};

InstrumentFamilies.prototype.findObjectByIndex = function(selectedIndex){
  const selectedInstrument = this.data[selectedIndex];
  PubSub.publish('Instruments:object-ready', selectedInstrument);
};

module.exports = InstrumentFamilies;

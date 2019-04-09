const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Instruments:all-ready', (evt) => {
    const allInstrumentsData = evt.detail;
    this.populate(allInstrumentsData);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('Instruments:id-selected', selectedIndex);
  });

};

SelectView.prototype.populate = function(allInstrumentsData) {
  allInstrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.selectElement.appendChild(option);
  });
};

module.exports = SelectView;

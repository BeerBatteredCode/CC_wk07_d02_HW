const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:object-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrumentObject){
  this.container.innerHTML = '';

  infoParagraphName = document.createElement('h1');
  infoParagraphName.textContent = `${instrumentObject.name}`;

  infoParagraphDetail = document.createElement('p');
  infoParagraphDetail.textContent = `${instrumentObject.description}`;

  this.container.appendChild(infoParagraphName);
  this.container.appendChild(infoParagraphDetail);

  const unorderedList = document.querySelector('#instrument-info, #instrument-list');
  for (var i = 0; i < instrumentObject.instruments.length; i++) {
    instrumentLi = document.createElement('li');
    instrumentLi.textContent = instrumentObject.instruments[i];
    unorderedList.appendChild(instrumentLi);
  };
};

module.exports = InstrumentInfoView;

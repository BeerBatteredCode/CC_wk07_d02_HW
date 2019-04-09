const instrumentFamilyData = require('./data/instrument_family_data.js');
const SelectView = require('./views/select_view');
const InstrumentInfoView = require('./views/instrument_info_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const container = document.querySelector('section#instrument-info');
  const instrumentInfoDisplay = new InstrumentInfoView(container);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies(instrumentFamilyData);
  instrumentDataSource.bindEvents();
});

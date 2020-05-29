import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('search_address');
  if (addressInput) {
    places({ container: addressInput, accessibility: { clearButton: { 'tab-index': 13,} }, countries: ['FR'], });
  }
};

export { initAutocomplete };

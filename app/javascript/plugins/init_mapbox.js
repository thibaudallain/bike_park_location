import mapboxgl from 'mapbox-gl';

const mapElement = document.getElementById('map');

const buildMap = () => {
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  return new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/thibaudallain/cka0sb3cb4max1isarbhnr7hu',
    center: [2.294481, 48.858370], // starting position
    zoom: 9 // starting zoom
  });
};

const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

    const element = document.createElement('div');
    element.className = 'marker';
    element.style.backgroundSize = 'contain';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = 'center';
    element.style.height = '35px';
    element.style.zIndex = '1';
    element.classList.add('marker');

    new mapboxgl.Marker(element)
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup)
      .addTo(map);
  });
};

const addAddressToMap = (map, address) => {
  const element = document.createElement('div');
  element.className = 'address';
  element.style.backgroundSize = 'cover';
  element.style.width = '35px';
  element.style.height = '35px';
  element.style.zIndex = '1';
  new mapboxgl.Marker(element)
    .setLngLat([ address.lng, address.lat ])
    .addTo(map);
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const initMapbox = () => {
  if (mapElement) {
    const map = buildMap();
    const markers = JSON.parse(mapElement.dataset.markers);
    const address = JSON.parse(mapElement.dataset.address);
    if (markers && markers.length !== 0) {
      addMarkersToMap(map, markers);
      addAddressToMap(map, address);
      fitMapToMarkers(map, markers);
    }
    map.scrollZoom.enable();
    map.dragPan.enable();
    // map.addControl(new mapboxgl.NavigationControl());
  }
};

export { initMapbox };

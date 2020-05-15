const slide = () => {
  var popup = document.querySelector('.mapboxgl-popup-content');
  if (popup) {
    popup.classList.toggle('mapboxgl-popup-content-height');
  }
};

const hide = () => {
  var popup = document.querySelector('.mapboxgl-popup-content');
  if (popup) {
    popup.classList.remove('mapboxgl-popup-content-height');
  }
};

const slideCard = () => {
  const markers = document.querySelectorAll('.marker');
  if (markers.length > 0) {
    markers.forEach( marker => {
      marker.addEventListener('click', (event) => {
        hide();
        setTimeout(slide, 20);
      })
    })
  }
}

export { slideCard };

const input = document.querySelector('input');
const go = document.querySelector(".go");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    input.value = "Geolocation is not supported by this browser.";
  }
}

const showPosition = (position) => {
  input.value = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
  go.disabled = false;
}

const getPosition = () => {
  const autour = document.querySelector(".geoloc");
  autour.addEventListener('click', event => {
    go.disabled = true;
    getLocation();
  })
}



export { getPosition };

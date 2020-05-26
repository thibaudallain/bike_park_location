const input = document.querySelector('input');
const go = document.querySelector("#go");
const autour = document.querySelector(".geoloc");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    input.value = "Geolocation is not supported by this browser.";
  }
}

const showPosition = (position) => {
  input.value = "Lat:" + position.coords.latitude +
  ",Lng:" + position.coords.longitude;
  go.disabled = false;
  go.classList.remove("disabled");
  autour.disabled = false;
  autour.classList.remove("disabled");
}

const getPosition = () => {
  autour.addEventListener('click', event => {
    go.disabled = true;
    go.classList.add("disabled");
    autour.disabled = true;
    autour.classList.add("disabled");
    getLocation();
  })
}



export { getPosition };

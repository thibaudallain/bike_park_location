const input = document.querySelector('input');
const go = document.querySelector("#go");
const autour = document.querySelector(".geoloc");
const alert = document.querySelector(".alert-message");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert.innerHTML = "Ce navigateur ne peut vous géolocaliser.";
    alert.style.padding = "0.5em 1em";
    ableButtons();
  }
}

const showPosition = (position) => {
  input.value = "Latitude:" + position.coords.latitude +
  ",Longitude:" + position.coords.longitude;
  ableButtonsGo();
}

const getPosition = () => {
  autour.addEventListener('click', event => {
    disableButtons();
    getLocation();
  })
}

const showError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert.innerHTML = "Tu as refusé d'être localisé.e dans les préférences de ton navigateur.";
      break;
    case error.POSITION_UNAVAILABLE:
      alert.innerHTML = "Nous ne parvenons pas à te géolocaliser.";
      break;
    case error.TIMEOUT:
      alert.innerHTML = "Nous ne parvenons pas à te géolocaliser.";
      break;
    case error.UNKNOWN_ERROR:
      alert.innerHTML = "Nous ne parvenons pas à te géolocaliser.";
      break;
  }
  alert.style.padding = "0.5em 1em";
  ableButtonsNoGo();
}

const ableButtonsGo = () => {
  go.disabled = false;
  go.classList.remove("disabled");
  go.classList.add("green");
  input.classList.add("green");
  autour.disabled = false;
}

const ableButtonsNoGo = () => {
  go.disabled = false;
  go.classList.remove("disabled");
  autour.disabled = false;
}

const disableButtons = () => {
  go.disabled = true;
  go.classList.add("disabled");
  autour.disabled = true;
  autour.classList.add("disabled");
}




export { getPosition };

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
  input.value = "Lat:" + position.coords.latitude +
  ",Lng:" + position.coords.longitude;
  ableButtons();
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
      alert.innerHTML = "Vous avez refusé d'être localisé.e dans les préférences de votre navigateur.";
      break;
    case error.POSITION_UNAVAILABLE:
      alert.innerHTML = "Nous ne parvenons pas à vous géolocaliser.";
      break;
    case error.TIMEOUT:
      alert.innerHTML = "Nous ne parvenons pas à vous géolocaliser.";
      break;
    case error.UNKNOWN_ERROR:
      alert.innerHTML = "Nous ne parvenons pas à vous géolocaliser.";
      break;
  }
  alert.style.padding = "0.5em 1em";
  ableButtons();
}

const ableButtons = () => {
  go.disabled = false;
  go.classList.remove("disabled");
  autour.disabled = false;
  autour.classList.remove("disabled");
}

const disableButtons = () => {
  go.disabled = true;
  go.classList.add("disabled");
  autour.disabled = true;
  autour.classList.add("disabled");
}




export { getPosition };

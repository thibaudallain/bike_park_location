const removeAlert = () => {
  const alertMessage = document.querySelector(".alert-message");
  if (alertMessage) {
    alertMessage.addEventListener('click', (event) => {
      event.target.classList.add("none");
    })
  }
}

export { removeAlert };

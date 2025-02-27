// add click event on login form
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const account = document.getElementById("account-number").value;
  const pinNumber = getInputFieldById("pin-number");
  const formValidated = loginFormValidation(account, pinNumber);
  if (formValidated) {
    message("login-success");
    setInterval(() => {
      window.location.href = "home.html";
    }, 2000);
  }
});

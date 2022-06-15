const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const errFirstName = document.getElementById("errFirstName");
const errLastName = document.getElementById("errLastName");
const errEmail = document.getElementById("errEmail");
const errPassword = document.getElementById("errPassword");

btn.addEventListener("click", function () {
  if (
    firstName.value == null ||
    firstName.value == undefined ||
    firstName.value == "" ||
    firstName.value <= 0
  ) {
    errFirstName.style.display = "block";
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.style.background = "URL(images/icon-error.svg) right no-repeat";
  } else {
    errFirstName.style.display = "none";
    firstName.style.border = "2px solid rgb(246, 243, 243)";
    firstName.style.background = "none";
  }
});
btn.addEventListener("click", function () {
  if (
    lastName.value == null ||
    lastName.value == undefined ||
    lastName.value == "" ||
    lastName.value <= 0
  ) {
    errLastName.style.display = "block";
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastName.style.background = "URL(images/icon-error.svg) right no-repeat";
  } else {
    errLastName.style.display = "none";
    lastName.style.border = "2px solid rgb(246, 243, 243)";
    lastName.style.background = "none";
  }
});
btn.addEventListener("click", function () {
  if (
    email.value == null ||
    email.value == undefined ||
    email.value == "" ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".com") == -1 ||
    email.value <= 0
  ) {
    errEmail.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.style.background = "URL(images/icon-error.svg) right no-repeat";
  } else {
    errEmail.style.display = "none";
    email.style.border = "2px solid rgb(246, 243, 243)";
    email.style.background = "none";
  }
});
btn.addEventListener("click", function () {
  if (
    password.value == null ||
    password.value == undefined ||
    password.value == "" ||
    password.length < 6
  ) {
    errPassword.style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    password.style.background = "URL(images/icon-error.svg) right no-repeat";
  } else {
    errPassword.style.display = "none";
    password.style.border = "2px solid rgb(246, 243, 243)";
    password.style.background = "none";
  }
});

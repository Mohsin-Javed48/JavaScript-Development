const name_field = document.querySelector("#name");
const email_field = document.querySelector("#email");
const message_field = document.querySelector("#message");
const send_btn = document.querySelector(".send_btn");
const invalid_name = document.querySelector(".invalid_name_msg");
const invalid_email = document.querySelector(".invalid_email_msg");

const students = [
  "mohsin javed",
  "fakra rabbani",
  "ali asghar",
  "afeef wadood",
  "umair yousef",
  "haroon ajmal",
];
//first the invalid msg for name and email is hidden
invalid_email.classList.add("hidden");
invalid_name.classList.add("hidden");

const pass = [
  "mohsin@gmail.com",
  "fakhra@gmail.com",
  "ali@gmail.com",
  "afeef@gmail.com",
  "umair@gmail.com",
  "haroon@gmail.com",
];

send_btn.addEventListener("click", onclick);

function onclick() {
  let check_name = students.includes(name_field.value.toLowerCase());

  if (check_name == false && name_field.value) {
    invalid_name.classList.remove("hidden");
  } else {
    invalid_name.classList.add("hidden");
  }

  let check_email = students.includes(email_field.value.toLowerCase());

  if (check_name == false && email_field.value) {
    invalid_email.classList.remove("hidden");
  } else {
    invalid_email.classList.add("hidden");
  }
}

const form = document.querySelector("form");
const email = document.querySelector(".email");
const submitPress = document.querySelector(".submit");

submitPress.addEventListener("click", submit);

function submit() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {
    alert("Subscribed!");

    return true;
  } else {
    alert("Invalid email address!");

    return false;
  }
}

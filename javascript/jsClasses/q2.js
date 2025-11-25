// Q2 - Student Form Validator (JS + RegExp)

function validateStudentForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  const nameRe = /^[A-Za-z ]+$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^\d{10}$/;
  const passwordRe = /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/;

  function mark(el, ok, msg) {
    const err = document.getElementById("err-" + el.id);
    err.textContent = ok ? "" : msg;
    el.style.border = ok ? "2px solid green" : "2px solid red";
  }

  let valid = true;

  if (!nameRe.test(name.value)) { mark(name, false, "Only alphabets allowed"); valid = false; }
  else mark(name, true, "");

  if (!emailRe.test(email.value)) { mark(email, false, "Invalid email format"); valid = false; }
  else mark(email, true, "");

  if (!phoneRe.test(phone.value)) { mark(phone, false, "Must be 10 digits"); valid = false; }
  else mark(phone, true, "");

  if (!passwordRe.test(password.value)) { mark(password, false, "Must contain uppercase, number, special char"); valid = false; }
  else mark(password, true, "");

  return valid;
}

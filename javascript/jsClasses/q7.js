// Q7 - Login Form Validation using RegExp

function validateLogin() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const userRe = /^.{5,}$/; // at least 5 chars
  const passRe = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  let ok = true;
  let msg = "";

  if (!userRe.test(username.value)) {
    ok = false;
    msg += "Username must be at least 5 characters.\n";
  }

  if (!passRe.test(password.value)) {
    ok = false;
    msg += "Password must be 8+ chars, include upper, lower, number, special.\n";
  }

  if (!ok) alert(msg);
  else alert("Login Successful!");

  return ok;
}

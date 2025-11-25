// Q8 - Dynamic Object Updater

let user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

function updateUser() {
  const name = document.getElementById("u-name").value;
  const email = document.getElementById("u-email").value;
  const age = document.getElementById("u-age").value;

  user.name = name;
  user.email = email;
  user.age = Number(age);

  renderUser();
}

function renderUser() {
  document.getElementById("userDisplay").textContent = JSON.stringify(user, null, 2);
}

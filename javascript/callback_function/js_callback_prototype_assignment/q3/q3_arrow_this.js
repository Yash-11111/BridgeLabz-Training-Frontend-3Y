// Q3 - this issue in arrow function

const user = {
  name: "Aman",
  showName: () => {
    console.log(this.name); // undefined
  }
};

user.showName();

// Fix with normal function
const user2 = {
  name: "Aman",
  showName() {
    console.log(this.name);
  }
};

user2.showName();

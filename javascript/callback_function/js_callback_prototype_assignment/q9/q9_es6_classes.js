// Q9 rewrite using ES6 classes

class Person {
  constructor(name){ this.name = name; }
  showName(){ console.log("Name:", this.name); }
}

class Student extends Person {
  constructor(name, branch){
    super(name);
    this.branch = branch;
  }
  showBranch(){ console.log("Branch:", this.branch); }
}

const st = new Student("Aman","ECE");
st.showName();
st.showBranch();

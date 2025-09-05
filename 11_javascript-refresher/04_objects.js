let aboutMe = {
  name: "Mark",
  age: 20,
  course: "AppDev",
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.hobby = "Reading";
aboutMe.introduce(aboutMe);
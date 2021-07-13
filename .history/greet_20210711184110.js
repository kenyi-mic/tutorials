const names = ["Khamis", "Jokudu", "Anna", "Loburi"];
console.log(names[1]);

const sayHi = (name) => {
  if (name == "Khamis") {
    console.log(`Hello big bro ${name}!`);
  } else {
    console.log(`Welcome ${name} thanks for coming!`);
  }
};

sayHi(names[0]);

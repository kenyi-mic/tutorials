const names = ["Khamis", "Jokudu", "Anna", "Loburi"];

const sayHi = (name) => {
  if (name == "Khamis") {
    console.log(`Hello big bro ${name}!`);
  } else {
    console.log(`Welcome ${name} thanks for coming!`);
  }
};

names.forEach(sayHi);

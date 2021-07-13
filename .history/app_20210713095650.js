const os = require("os");

//info about current user

const user = os.userInfo();
console.log(user);

//Method return the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalMem(),
  freeMem: os.freeMem(),
};

console.log(currentos);

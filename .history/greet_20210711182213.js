const names = ["Khamis", "Jokudu", "Anna", "Loburi"];
let count = 0;
const friends = names.map((name) => {
  count += 1;
  console.log(count, name);
});

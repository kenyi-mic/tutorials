const _ = require("lo");
const items = [1, [3, [4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
const arr = [1, [2, [3, [4]]], 5];

const test = arr.flat(Infinity);  // flatten to any depth
// const test = arr.flat(3);
console.log(test);

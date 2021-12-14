//TODO: How to pass arguments in sum function?

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//? Testing
console.log(sum(...numbers)); // prints 6

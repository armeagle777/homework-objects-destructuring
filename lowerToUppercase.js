//TODO: Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
//TODO:   versions of a letter, respectively.

function mapping(arr) {
  const resultObj = {};

  for (let el of arr) {
    resultObj[el] = el.toUpperCase();
  }
  return resultObj;
}

//? Testing for some pairs of letters
console.log(mapping(['p', 's'])); // { "p": "P", "s": "S" }
console.log(mapping(['a', 'b', 'c'])); // { "a": "A", "b": "B", "c": "C" }
console.log(mapping(['a', 'v', 'y', 'z'])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }

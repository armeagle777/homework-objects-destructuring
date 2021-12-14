function printSum(operator, ...elements) {
  if (typeof operator === 'number') {
    elements.unshift(operator);
    operator = '+';
  }
  switch (operator) {
    case '+':
      return addition(elements);
      break;
    case '-':
      return subtraction(elements);
      break;
    case '/':
      return division(elements);
      break;
    case '*':
      return multiplication(elements);
      break;
    case '**':
      return exponentiation(elements);
      break;
  }
}

function addition(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function subtraction(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  return result;
}

function multiplication(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

function division(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
  return result;
}

function exponentiation(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result **= arr[i];
  }
  return result;
}

//? Testing
console.log(printSum('*', 1, 2, 3)); // 9
console.log(printSum(1, 2, 3, 4, 5)); // 15
console.log(printSum('-', 1, 2, 3, 6, 7)); // -17
console.log(printSum('**', 2, 3, 2)); // 64

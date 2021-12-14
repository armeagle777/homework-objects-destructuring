//TODO: You receive an object with nested objects with strings as values. Convert their values to
//TODO:   number and return an object without the entries that evaluate to NaN.

const nastyObj = {
  bedroom: {
    slippers: '10000',
    piano: '550',
    call: 'vet',
    travel: 'world',
  },
};

function findAndRemove(obj) {
  const { bedroom } = obj;
  const objKeys = Object.keys(bedroom);
  const cleanObj = {};
  for (let key of objKeys) {
    if (parseInt(bedroom[key]) == bedroom[key]) {
      cleanObj[key] = parseInt(bedroom[key]);
    }
  }

  const resultObj = {
    bedroom: cleanObj,
  };
  return resultObj;
}

console.log(findAndRemove(nastyObj));

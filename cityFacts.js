function cityFacts(obj) {
  const { name, population, continent } = obj;

  return `"${name} has a population of ${population} and is situated in ${continent}"`;
}

//? Testing
console.log(
  cityFacts({
    name: 'Paris',
    population: '2,140,526',
    continent: 'Europe',
  })
);

console.log(
  cityFacts({
    name: 'Tokyo',
    population: '13,929,286',
    continent: 'Asia',
  })
);

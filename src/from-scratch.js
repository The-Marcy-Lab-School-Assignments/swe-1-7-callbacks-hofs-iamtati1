// Create callback functions for Higher-Order Functions:
function logEachValue(values) {
  values.forEach((value, index) => {
    console.log(`Value: ${value}, index: ${index}.`)
  })
}

const makePeopleHappy = (people) => {
  people.forEach((person) => person.isHappy = true)
}
people = [
  { name: "Alice", isHappy: false },
  { name: "Bob", isHappy: false }
];
// passThemOut(people, makePeopleHappy);
// console.log(people);
//Problem: 2
const getEvenNumbers = (numbers) => {
  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
};
//Problem: 3
const doubleEveryNumber = (numbers) => {
  const newArray = numbers.map((num) => num * 2);
  return newArray;
};
//Problem: 4
const convertToBooleans = (numbers) => {
  const newArray = numbers.map(num => Boolean(num));
  return newArray;
};

const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

const myMap = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};
//Problem: 2
const myFilter = (array = [], callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};


//Problem: 3
const myFind = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
};
//Problem: 4
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};

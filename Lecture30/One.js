const coding = ["java", "js", "py", "cpp", "reby"];

// 1. ForEach loop :
// coding.forEach((item) => console.log(item)); //print the output

const code = coding.forEach((item) => console.log(item));
// console.log(code); //returns undefined becau3se as forEach loop does not returns anything

// 2.Filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNums = nums.filter((num) => {
  return num > 4;
});
console.log(filteredNums); //returns the value

//3. Map
const mappedNums = nums.map((num) => {
  return num * 2;
});
console.log(mappedNums);

// Chaining of functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers
  .map((num) => num * 2)
  .map((nums) => nums + 10)
  .filter((nums) => nums >= 15);
console.log(doubleNumbers);

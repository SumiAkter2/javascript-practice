// Task 1

// Array থেকে সব odd number বের করো।

const numbers = [11, 22, 33, 44, 55, 66];
const oddNum = [];

for (let num of numbers) {
  if (num % 2 !== 0) {
    oddNum.push(num);
  }
}
console.log(oddNum);

// Task 2

// Array-এর সব element-এর যোগফল বের করো।

const fewNumbers = [10, 20, 30, 40];
var sum = 0;

for (let num of fewNumbers) {
  sum = sum + num;
}
console.log(sum);

// Task 3

// Array-এর সবচেয়ে বড় number খুঁজে বের করো।

const bigNumbers = [15, 42, 7, 89, 23];
var max = bigNumbers[0];
console.log(max);
for (let num of bigNumbers) {
  if (num > max) {
    max = num;
  }
}
console.log(max);
// const maxNumber = Math.max(...bigNumbers);
// console.log(maxNumber);

// Task 4

// নতুন array-তে সব number-এর square রাখো।

const sqrtNumbers = [2, 3, 4, 5];

const newSqrtNum = [];
for (let num of sqrtNumbers) {
  num = num ** 2;
  newSqrtNum.push(num);
}
console.log(newSqrtNum);

// String + Loop Practice=======================================================

// Task/র character সংখ্যা বের করো (space-সহ)।

const text = "Hello World";

console.log(text.length);

// Task 6

// String-এর সব vowel count করো।
const textName = "Programming";
var sum = 0;
for (let letter of textName) {
  //   console.log(letter);
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    sum++;
    // console.log(letter)
  }
}
console.log(sum);

// Task 7============================================

// একটি string উল্টো করে print করো।

const texts = "JavaScript";
// const splitTexts = texts.split(" ");
// console.log(splitTexts)
let newText = "";

for (let i = texts.length - 1; i >= 0; i--) {
  console.log(texts[i]);
  newText += texts[i];
}
// newText.join();
console.log(newText);

// Object + Array Practice
// Task 8

// সব student-এর নাম print করো।
// Task 9

// ৮০-এর বেশি marks পাওয়া student-দের নাম print করো।

const students = [
  { name: "Rafi", marks: 80 },
  { name: "Sumi", marks: 90 },
  { name: "Nila", marks: 70 },
];

for (let std of students) {
  console.log("student name:", std.name);
  if (std.marks > 80) {
    console.log("80 er besi paise", std.name);
  }
}

// 2D Array Practice
// Task 10

// 2D array-এর সব number-এর যোগফল বের করো।

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var arraySum = 0;

for (let array of arr) {
  // console.log(array)
  for (let newArr of array) {
    // console.log(newArr);
    arraySum = arraySum + newArr;
  }
}
console.log(arraySum);

// একটু Hard 🔥
// Task 11

// Array-এর duplicate value remove করো।

const numbers2 = [1, 2, 2, 3, 4, 4, 5];
const result = [];

// const removeDuplicateValue = [...new Set(numbers2)];
// console.log(removeDuplicateValue);

for (let num of numbers2) {
  if (!result.includes(num)) {
    result.push(num);
  }
}
console.log(result)
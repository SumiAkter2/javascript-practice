// find()=>condition puron kore shudhu 1st element tai dey
// =>as a element
// => as an object ]
// => as a value
const users = [
  { name: "Sumi", active: true },
  { name: "Rumi", active: false },
  { name: "Juhi", active: true },
];

const resultForFind = users.find((user) => user.active);
console.log(resultForFind);

const resultForFilter = users.filter((user) => user.active); //filter
// console.log(resultForFilter); //finter

// ১. 10-এর চেয়ে বড় প্রথম সংখ্যা বের করো
const nums = [5, 8, 12, 20, 30];
const BigThen10 = nums.find((num) => num > 10);
// console.log(BigThen10);

// ২. প্রথম even number বের করো
const evenNums = [1, 3, 5, 8, 10];
const findEvenNum = evenNums.find((num) => num % 2 === 0);
// console.log(findEvenNum);

// ৩. 5-এর বেশি length-এর প্রথম word বের করো
const words = ["cat", "dog", "elephant", "tiger"];
const findWordLength = words.find((word) => word.length > 5);
// console.log(findWordLength)

// ৪. Object Array

// প্রথম student যার marks 50-এর কম।

const students = [
  { name: "Sumi", marks: 80 },
  { name: "Rumi", marks: 45 },
  { name: "Juhi", marks: 70 },
  { name: "Rahim", marks: 30 },
];

const findStudentMark = students.find((std) => std.marks < 50);
// console.log(findStudentMark)

// ৫. Boss Level 😈

// প্রথম সংখ্যা খুঁজো যা:

// 10-এর বড়
// এবং odd
const Nums = [2, 4, 12, 18, 21, 25];
const findNum = Nums.find((num) => num > 10 && num % 2 === 1);
//  console.log(findNum)

// 1. findIndex()

// যদি element না, তার index লাগে।

const rolls = [10, 20, 30, 40];
const rollFind = rolls.findIndex((roll) => roll > 35);
console.log(rollFind);

// 2. indexOf()
// যদি exact value-এর index খুঁজতে চাও।
console.log(rolls.indexOf(40));

// 3. includes()
// "এই value array-তে আছে নাকি?"
console.log(rolls.includes(30));

// 4. some()
// "কমপক্ষে একটা element কি condition pass করছে?"

const nums22 = [1, 3, 5, 8, 12];

const result = nums22.some((num) => num % 2 === 0);

console.log(result);

// findLast(): give 1st matching element from the last of the array:

const weather = [101, 2, 222];
const weathers = weather.findLast((wth) => wth > 2);
console.log(weathers);

const indexWth = weather.findLastIndex((wth) => wth > 2);
console.log(indexWth);
// flat(): sub array gulo ekta array kore dey:

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());

console.log(arr2.flat(2));

console.log(arr2.flat(Infinity));

// forEach(): //=> array er protity upadan er upor function execute kore.

const weatherForEach = weather.forEach((wth, ind) => {
  console.log(wth, ind);
});

// console.log(weatherForEach);

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before

for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
  // console.log(i,items[i])
  // console.log(copyItems)
}
console.log(copyItems);
// after

items.forEach((item) => {
  copyItems.push(item);
});
console.log(copyItems);
// items.forEach((item) => {
//   copyItems.push(item);
// });
//indexOf(searchElement,fromIndex)
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison", 2)); // index 2 theke khuja suru korse 4 a "bison " paise
//join()=> return a string  and separator diye sob gulo ek jaigai join kore

const elements = ["Fire", "Air", "Water"];

console.log(elements.join("|"))
console.log(elements.join("_"))
console.log(elements.join("000"))
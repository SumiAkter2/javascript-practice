//map(): => return a new array with provided function on every element.
const numbers = [1, 4, 9];
const sqrtNum = numbers.map((num) => Math.sqrt(num));
console.log(sqrtNum);
// / qs solving by map================================================

// Q1

// সংখ্যাগুলোকে 2 দিয়ে গুণ করে নতুন array বানাও।

const nums = [1, 2, 3, 4];
const doubleNums = nums.map((num) => num * 2);
console.log(doubleNums);

// সব নাম uppercase করো।

const names = ["rahim", "karim", "sumi"];
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames);

// Q3

// প্রতিটি সংখ্যার square বের করো।

const nums1 = [2, 3, 4, 5];
const SqrtNum = nums1.map((num) => num ** 2);
console.log(SqrtNum);

// Q4

// প্রতিটি element-এর সাথে তার index যোগ করো।

const fruits = ["apple", "banana", "mango"];
const fruitArray = fruits.map((fruit, ind) => fruit + ind);
console.log(fruitArray);

// Q5

// Object array থেকে শুধু names-এর array বানাও।

const users = [
  { name: "Rumi", age: 20 },
  { name: "Sumi", age: 22 },
  { name: "Juhi", age: 25 },
];
const userName = users.map((user) => user.name);
console.log(userName);

// Q6 🔥

// প্রতিটি সংখ্যাকে object-এ convert করো।

const nums2 = [10, 20, 30];
const numObj = nums2.map((num) => ({ score: num }));
console.log(numObj);

// Q7 🔥🔥

// নিচের array থেকে এমন array বানাও:
// Expected:

// [
//   [1, 2],
//   [2, 4],
//   [3, 6]
// ]

const nums3 = [1, 2, 3];
const newArray = nums3.map((num) => [num, num * 2]);
console.log(newArray);

//reverse()=> ulte dey:
const array = ["one", "two", "three"];
// console.log(array.reverse());
// const reversed = array.reverse();
// console.log("reversed:", reversed);

// sift(): just remove 1st element:

console.log(array.shift());
console.log(array);

// toString() and toLocaleString()===> num theke string banay

const mySalery = 500000;
console.log(typeof mySalery.toString());
console.log(mySalery.toLocaleString());

//with(idex,newValue)=> index onujayi value change kore dey

const arr = [1, 2, 3];

const a = arr.with(-2, 50);

console.log(arr);
console.log(a);
// console.log(arr.valueOf())

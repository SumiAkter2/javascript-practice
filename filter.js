// filter()=> jegulo conditon mene chole segulo diye notun array banaye dey

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word === "spray");
// console.log(result);
// ১. শুধু Even Number রাখো:

const nums = [1, 2, 3, 4, 5, 6];
const everNum = nums.filter((num) => num % 2 === 0);
console.log(everNum);
// 10-এর চেয়ে বড় সংখ্যা রাখো
const nums1 = [5, 10, 15, 20, 25];
const bigFrom10 = nums1.filter((num) => num > 10);
console.log(bigFrom10);
// 4-এর বেশি length-এর word রাখো
const words = ["cat", "elephant", "dog", "tiger", "rat"];
const wordLength = words.filter((word) => word.length > 4);
console.log(wordLength);
// ৪. "s" দিয়ে শুরু হওয়া নাম রাখো
const names = ["sumi", "rumi", "sara", "juhi"];
const findName = names.filter((name) => name.startsWith("s"));
console.log(findName);
// ৫. Odd Number রাখো
const nums2 = [1, 2, 3, 4, 5, 6, 7];
const oddNum = nums2.filter((num) => num % 2 !== 0);
console.log(oddNum);

// ১. 10-এর গুণিতকগুলো রাখো
const nums3 = [5, 10, 15, 20, 25, 30, 35];
const find10 = nums3.filter((num) => num % 10 === 0);
console.log(find10);
// ২. শুধু ৫ অক্ষরের word রাখো
const words1 = ["apple", "cat", "tiger", "dog", "grape"];
const findWord = words1.filter((word) => word.length === 5);
console.log(findWord);
// ৩. যেসব নামের শেষে "a" আছে সেগুলো রাখো
const names2 = ["sumi", "sara", "juhi", "rina", "rahim"];
const findNames = names2.filter((name) => name.endsWith("a"));
console.log(findNames);

// ৪. শুধু even index-এর element রাখো
const arry = ["a", "b", "c", "d", "e", "f"];
const findEvenIndex = arry.filter((arr,index) => index%2===0);
console.log(findEvenIndex);
// ৫. Object Array 🔥
const students1 = [
  { name: "Sumi", marks: 80 },
  { name: "Rumi", marks: 45 },
  { name: "Juhi", marks: 70 },
  { name: "Rahim", marks: 30 },
];


// শুধু যাদের marks ≥ 50 তাদের রাখো।
const findStudent= students1.filter(student=>student.marks>=50)
console.log(findStudent)

// ৬. Boss Level 😈
const number = [12, 5, 18, 7, 20, 9, 30];

// শুধু যেসব সংখ্যা:

// 10-এর বড়
// এবং even

// সেগুলো রাখো।

const numbers= number.filter(num=>num>10 && num%2===0)
console.log(numbers)

// f
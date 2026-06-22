const carName = ["BNJ", "TMD", "Xys", 5, true];
console.log(carName);

const car = new Array("ss", "gg", "dd");
console.log(car);

console.log(carName[2]);
// console.log(Object.keys(carName));
console.log(Object.values(carName));

console.log(carName.length);

carName[4] = "Toyota";
carName.push("Honda");
console.log(carName);

console.log(carName.toReversed());
// create a new array:
// const brandName = new Array("Hatil", "Rfl", "Segun");
const brandName2 = Array("Hatil", "Rfl", "Segun");
// console.log(brandName2.length);
// create array

const emptyArray = new Array(2);
// console.log(emptyArray);
console.log(emptyArray[0]); //undefined cause elements are empty; যখন তুমি index 0 access করো, JavaScript দেখে ঐ position-এ কোনো value নেই, তাই undefined return করে।

console.log(0 in emptyArray); //false :   "emptyArray-এর মধ্যে '0' নামে কোনো property আছে কি?" new Array(2) index 0 এবং 1 এর জন্য property তৈরি করে না, শুধু length = 2 সেট করে। তাই.

console.log(carName.hasOwnProperty(10)); // false : 10 index a kno property nai

// Array.from():

console.log(Array.from("sumi")); // sumi k venge alada kore ekta array banay
console.log(Array.from([1, 4, 6], (x) => x + x));

// isArray(): determines kore eta array kina.
const rollNum = 30;
const student = ["Rashed", "30"];
console.log(Array.isArray(rollNum));
console.log(Array.isArray(student));

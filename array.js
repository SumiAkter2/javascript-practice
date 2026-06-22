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
// console.log(Array.isArray(rollNum));
console.log(Array.isArray(student));
console.log(Array.isArray({}));

console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
// Array.of() //=> vitorer items gulo niye array banaye dey

console.log(Array.of("gan", 20, "machine", 30, true));
console.log(Array.of());
console.log(Array("suu"));

// at(index): etar kaj index onusare item deya(positive index hole). ar negative index hole pison theke item ferot dey

const dressName = ["anakoli", "borka", "maxi", "pakisthani"];
// console.log(dressName.at(3));
// console.log(dressName.at(-3));

//length and slice na kore direct at() diye ekoi result pawa jay:
const lengthWay = dressName[dressName.length - 3];
console.log(lengthWay);
//borka paite :
console.log(dressName.at(1));

//abar slice diye"
const sliceWay = dressName.slice(1, 2);
console.log(sliceWay[0]);

// concat()=>used to add more arrays:

const arr1 = [1, 2, 3, 4];
const arr2 = ["sumi", "rumi", "juhi", "rashed"];
const arr3 = [true, false];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));

// copyWithin()=> er kaj kno array er vitore element copy kore onno positon a paste kora:
// arr1.copyWithin(EventTarget,start,end);

console.log(arr2.copyWithin(1, 2));

// entries()=>
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (let x of arrayEntries) {
  console.log(x);
}

// fill()=>fill the element with a value in a array;)
// fill(value,start,end)
console.log(array.fill(2));
console.log([1, 2, 3].fill(4, 1, 2)); //[1,4,3]

const arrw = new Array(5);
console.log(arrw);

// arr.fill("JS");

// array-looping-tasks
// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversedColor = [];
for (let color of colors) {
  reversedColor.unshift(color);
}

console.log(reversedColor);
//or;
// for (let i = colors.length - 1; i >= 0; i--) {
//   console.log(i);
//   reversedColor.push(colors[i]);
// }
// console.log(reversedColor);

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input:
const numbers1 = [12, 98, 5, 41, 23, 78, 46];
const evenNum = [];
for (let num of numbers1) {
  if (num % 2 === 0) {
    evenNum.push(num);
  }
}
console.log(evenNum);

// [12, 98, 76, 46]

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input:
// Output:
var names = ["Tom", "Tim", "Tin", "Tik"];
var newNumbers = "";
for (let name of names) {
//   console.log(name);
  newNumbers = newNumbers + name;
}
console.log(newNumbers);

// Output:

// 'TomTimTinTik'

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input:
const statement = "I am a hard working person";

const words = statement.split(" ");
const reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

console.log(reversedWords.join(" "));
// [
// Output:

// 'person working hard a am I'

// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input:
//   (1, 2, 3)
// ][
const arr1 = [1, 2, 3];
// const arr2 = [];
// const arr3 = arr1.concat(arr2);
// arr3.shift();
// arr3.unshift(99);
// console.log(arr1);
// console.log(arr3);
// Expected Output:
const arr4 = [...arr1];
arr4[0] = 99;
console.log(arr1);
console.log(arr4);

// Original: [1, 2, 3] Copy: [99, 2, 3]

// Task 6
// Given an array of student objects, print each student’s name and marks.

//   ({ name: "John", marks: 85 }, { name: "Alice", marks: 90 })
// ][
const studentDetails = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (let student of studentDetails) {
  console.log(student.name + " scored " + student.marks);
}
// Expected ooutput:
// John scored 85
// Alice scored 90

// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

//   ([1, 2], [3, 4], [5, 6])
// ][
// Expected Array:
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
arr[1][0] = 99;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   arr[1][0]=99

// }
console.log(arr);

//   ([1, 2], [99, 4], [5, 6])
// ];

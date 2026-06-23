// 1. Declare an array
// Declare an array with 5 elements containing fruits
const fruitsName = ["Pineapple", "Sofeda", "Coconut", "Mango", "Bery"];
console.log(fruitsName);

// console log the 3rd index element
console.log(fruitsName[3]);
// change the value of the 2nd index element to jambura
fruitsName[2] = "jambura";

// console log the final array
console.log(fruitsName);
// 2. Add or remove elements
fruitsName.push("RedCherry");
console.log(fruitsName);
fruitsName.pop();
console.log(fruitsName);
// Declare an array of 3 tourist destinations
const touristDestination = ["Mokka", "Qatar", "Turkey"];
// Add a new tourist destination to your tourist array
touristDestination.push("Chaina");
// Add two more to your array
touristDestination.push("kashmir", "Maldivs");
console.log(touristDestination);
// Remove the last tourist destination you have added
touristDestination.pop();
// display the final array as output
console.log(touristDestination);
// 3. Checking Array Membership with ‘includes’;
console.log(touristDestination.includes("Chaina"));
// Instructions:

// Create an array of books containing different book.
const books = ["mathmatics", "english", "nobel"];
// Use the includes method to check if the array contains a javascript book.
books.includes("javascript");

// Print a message to the console indicating whether the element is present in the array or not.
if (books.includes("javascript")) {
  console.log("javascript is included");
} else {
  console.log("sorry there is no javascript");
}

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.
const gamesName = ["football", "cricket", "hockey", "batminton"];
const playerName = "messy";

// Now use isArray to check if each variable is an array.
console.log(Array.isArray(gamesName));
console.log(Array.isArray(playerName));

// Print a message to the console indicating whether each variable is an array or not.
if (Array.isArray(gamesName)) {
  console.log("gamesName is an array");
}
if (Array.isArray(playerName)) {
  console.log("playerName is an array");
} else {
  console.log("playerName is not an array");
}
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
const studentRoll = [1, 2, 3, 4];
const studentName = ["Sinu", "nuri", "piku"];

// Use the concat method to combine the two arrays into a new array.
const Student = studentRoll.concat(studentName);
// Print both the original arrays and the combined array using console.log().
// Print both the original arrays and the combined array using console.log().
console.log(studentRoll);
console.log(studentName);
console.log(Student);

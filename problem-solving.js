/*** problem solving using while loop:

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// Ans:

let num = 1;
while (num <= 60) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!",
    num,
  );
  num++;
}

// Subtask-1:

// Find all the odd numbers from 61 to 100.
// //Ans:
let oddNum = 61;
while (oddNum <= 100) {
  console.log(oddNum);

  oddNum += 2;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

//  Ans:

**/
let evenNum = 78;
while (evenNum <= 98) {
  if (evenNum % 2 === 0) {
    console.log("Even number is", evenNum);
  }
  evenNum = evenNum + 1;
}

// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

// // ans:

let startOddNum = 81;
let sum1 = 0;
while (startOddNum <= 131) {
  if (startOddNum % 2 !== 0) {
    sum1 = sum1 + startOddNum;
    console.log(startOddNum, sum1);
  }

  startOddNum++;
}

// Subtask-2:

// Display sum of all the even numbers from 206 to 311.
// ans:
let startEvenNum = 206;
let sum2 = 0;
while (startEvenNum <= 311) {
  console.log(startEvenNum);
  if (startEvenNum % 2 === 0) {
    sum2 = sum2 + startEvenNum;
    console.log(startEvenNum, "total sum", sum2);
  }
  startEvenNum++;
}

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */
// ans:

let tableNum = 1;
while (tableNum < 11) {
  console.log(`5*${tableNum}=` + tableNum * 5);

  tableNum++;
}
/***

Implement a countdown timer that counts down from 21 to 15.

 */
// ans:
let timeStart = 21;
while (timeStart >= 15) {
  console.log(timeStart);
  timeStart--;
}
// ================================for loop==================================
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i < 61; i++) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!",
    i,
  );
}

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
for (let y = 61; y <= 100; y += 2) {
  console.log("Odd num:", y);
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
for (let x = 78; x <= 98; x += 2) {
  console.log("Even num", x);
}
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
var sum3 = 0;
for (let n = 91; n <= 129; n += 2) {
  sum3 = sum3 + n;
  //   console.log(sum3);
}
console.log("sum of all the odd numbers from 91 to 129", sum3);
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
var sum4 = 0;
for (let m = 52; m <= 85; m += 2) {
  sum4 = sum4 + m;
}
console.log("sum of all the even numbers from 51 to 85", sum4);
/***

Generate a multiplication table for number 9

 */
for (let z = 1; z < 11; z++) {
  console.log(`9*${z}=` + z * 9);
}
/***

Implement a countdown timer that counts down from 81 to 65.

 */
for (let a = 81; a >= 65; a--) {
  console.log(a);
}
console.log("Break and continue");

/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
let b = 1;
while (b <= 200) {
  console.log(b);
  if (b === 100) {
    break;
  }

  b++;
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/ let c = 1;
let sum5 = 0;
while (c < 100) {
  console.log(c);
  sum5 += c;
  console.log("sum", sum5);
  if (sum5 >= 100) {
    break;
  }
  c++;
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let n = 1;

while (n <= 100) {
  if (Number.isInteger(Math.sqrt(n))) {
    console.log("First square number found:", n);
    break;
  }

  console.log(n);
  n++;
}

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let d = 1; d <= 40; d++) {
  if (d % 2 !== 0) {
    continue;
  }
  console.log(d);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (let e = 55; e <= 85; e+=2) {
  if (e % 5 === 0) {
    continue;
  }
  console.log(e);
}

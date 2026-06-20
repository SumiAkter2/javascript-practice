// for loop-----------------------------------------:

const roll = [1, 2, 3, 4, 5];

for (const rollNum of roll) {
  console.log(rollNum);
}

//  kono array theke prottek item alada kore pawar jnno  for loop kora hoy.=> exicute for each item

const fruits = ["apple", "banana", "mango", "pineapple", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// while loop---------------------------------------

let num = 5;

while (num < 15) {
  console.log(num);
  // num=num+1;
  // num+=1;
  num++;
}

// exicute a block of code repeatedly as long as specific conditon evaluate;

let salary = 10000;

while (salary <= 10010) {
  console.log("My salary is" + salary);
  salary = salary + 1;
}

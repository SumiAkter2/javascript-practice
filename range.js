// range ber kora
var num = 20;

while (num < 40) {
  console.log(num + 1);
  num += 1;
}

// sum ber kora:

var number = 5;
var sum = 0;

while (number <= 20) {
  console.log(number);
  sum = sum + number;
  console.log("sum:", sum);
  number++;
}

// ever number ber kora:

var rollNumber = 1;

while (rollNumber <= 20) {
  console.log(rollNumber);
  if (rollNumber % 2 !== 0) {
    console.log("odd number is:", rollNumber);
  }
  rollNumber++;
}

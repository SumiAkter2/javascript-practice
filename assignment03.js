// Problem - 01  Divide the Asset
// রহিম করিম ২ ভাই।  তাদের বাবার একটা জমি আছে  যার ক্ষেত্রফল  area নামে একটা ভ্যারিয়েবলে সেভ করা আছে।  তাদের বাবা তাদের কে সমান  ২  ভাগে সম্পত্তি ভাগ করে দিতে চান। এখন ২ জন ঠিক কতটুকু জমি পাবে সেটা প্রোগ্রাম করে বের করো এবং নিচের মতো করে আউটপুট হিসেবে দেখাও।

// Value of area  ( 0 < number  <=109 )
// Output (number)
// 100
// 50
// 15
// 7.5
// 2060
// 1030

// নিচের কোড স্নিপেট টি কপি করো ,  প্রোগ্রাম টি কে  কমপ্লিট করো  এবং console.log করে আউটপুট দেখাও

/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var eachPerson = area / 2;

console.log(eachPerson);

// // Problem - 02  Cycle or  Laptop
// মন্টূ  SSC পরীক্ষায় GPA 5 পেয়েছে ।  সে তার বাবার কাছে বায়না ধরেছে যে তাকে Cycle কিনে দিতে হবে কিংবা Laptop কিনে দিতে হবে।  মন্টুর বাবার  কাছে  যত টাকা আছে সেটা money নামে একটা ভ্যারিয়েবলে সেইভ করা আছে।  মন্টুর বাবা কিছু শর্তের ভিত্তি তে সিদ্ধান্ত নিবেন যে মন্টু কে কি কিনে দিবেন।
// মন্টুর বাবার টাকা 25000 কিংবা তার থেকে বেশি  থাকলে Laptop কিনে দিবেন।
// মন্টুর বাবার টাকা 10000 কিংবা তার থেকে বেশি  থাকলে Cycle কিনে দিবেন।
// এরথেকে কম থাকলে মন্টু কে স্বান্তনা পুরষ্কার হিসেবে Chocolate কিনে দিবেন।

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;

//write your code here

if (money >= 25000) {
  console.log("give him laptop");
} else if (money >= 10000) {
  console.log("give him cycle");
} else {
  console.log("give him chocolate");
}

// Problem 03 - Medicine Planner
// মাসের ১ তারিখে রহিমা বেগম কে ডাক্তার কিছু ঔষধ দিয়েছেন  যেটা ঠিক ৩  দিন পর পর খেতে হবে। রহিমা বেগম কে যতদিন ঔষধ খেতে হবে সেটা lastDay নামে একটা ভ্যারিয়েবলে সেইভ করা আছে।
// রহিমা বেগম কোন কোন দিন ঔষধ খাবে এবং কোন কোন দিন ঔষধ খাবেনা  তার একটা লিস্ট তোমাকে প্রোগ্রামিং করে বানিয়ে দিতে হবে। এবং নিচের মতো করে আউটপুট দিতে হবে।

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

for (let i = 1; i <= lastDay; i++) {
  // if ((i - 1) % 3 === 0) {
  if (i % 3 === 1) {
    console.log(i + " " + "take a medicine");
  } else {
    console.log(i + " " + "rest");
  }
}

// Problem 04 - Delete / Store
// সুমনার পিসি তে অনেক অনেক ফাইল জমে গেছে। সুমনা pdf , docx ফাইল গুলো এবং যেসব ফাইলের নামের প্রথমে # আছে সেগুলো ছাড়া বাকী ফাইল  গুলো কে ডিলিট করে  দিতে চায়।  ফাইল এর  নাম fileName নামক ভ্যারিয়েবলে স্টোর করা আছে।   সুমনার জন্য একটা প্রোগ্রাম লিখে দাও  যেটা সুমনা কে নির্দেশনা দিবে ফাইল টি সে রাখবে না ডিলিট করবে।
// ফাইলের নামের প্রথমে # থাকলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
// ফাইল টা pdf হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
// ফাইল টা docx হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
// এর বাইরে অন্য সব কিছুর জন্য output দেখাবে  "Delete"

/** Problem 04 - (Delete / Store) */
var fileName = "#exp.mp4";
//write your code here

if (
  fileName.startsWith("#") ||
  fileName.endsWith("pdf") ||
  fileName.endsWith("docx")
) {
  console.log("store");
} else {
  console.log("delete");
}

// Problem 05 - PH Email Generator
// { name: string , roll: number ,department: string  }

// উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে
// name
// roll
// .
// department
// @ph.ac.bd

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "monu", roll: 1014, department: "eee" };
//write your code here

if (
  (typeof student.name === "string") &
  (typeof student.department === "string") &
  (typeof student.roll === "number")
) {
  console.log(
    student.name + student.roll + "." + student.department + "@ph.ac.bd",
  );
}

// Problem 06 :  Current Salary ( Challenge Problem )
// হাসান সাহেব সরকারী চাকুরী করেন ।  তিনি কত বছর ধরে  চাকুরী করেন  সেটা  experience নামে একটা ভ্যারিয়েবলে Save করা আছে । হাসান সাহেবে যে salary দিয়ে জয়েন করেছেন সেটা startingSalary নামে একটা ভ্যারিয়েবলে save করা আছে।
// প্রতি বছর হাসান সাহেবের স্যালারি ৫% করে বৃদ্ধি হয় । হাসান সাহেবের বর্তমান স্যালারি  কত সেটা বের করার জন্য প্রোগ্রাম লেখো। দশমিকের পর সর্বোচ্চ ২ ডিজিট সংখ্যা থাকবে।  এবং নিচের মতো করে আউটপুট দেখাবে।

// for current salery: /** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;

let currentSalary = startingSalary;

for (let i = 1; i <= experience; i++) {
  currentSalary *= 1.05;
}

console.log(currentSalary.toFixed(2));

"use strict";
/*
let hasDriverslicense = false;
const passTest = true;

if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log("I can drive :D");

//const interface = "Audio";
//const private = 534;


//Function hold one or two lines of code.

function logger() {
  console.log("My name is Thomas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const order2 = fruitProcessor(7, 9);
console.log(order2);


//FUNCTION DECRALATION

function calcAge1(birthYear) {
  return 2026 - birthYear;
}

const age1 = calcAge1(1996);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};
const age2 = calcAge2(1996);

console.log(age1, age2);


///ARROW FUNCTIONS
const calcAge3 = (birthYear) => 2026 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age4 = 2026 - birthYear;
  const retirement = 60 - age4;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1996, "Thomas"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 7));

const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age4 = calcAge(birthYear);
  const retirement = 60 - age4;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  return retirement;
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1996, "Thomas"));
console.log(yearUntilRetirement(1950, "Thomas"));


///CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(570, 110);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//INTRODUCTION TO ARRAYS

const friend1 = "Thomas";
const friend2 = "Billions";
const friend3 = "Legacy";
console.log(friend1);

const friends = ["Thomas", "Billions", "Legacy"];
console.log(friends);

const y = new Array(1996, 1997, 1998, 1999);

console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Lengendary";
console.log(friends);
//friends =['Bob', 'Alice'];

const firstName = "Thomas";
const Thomas = [firstName, "Gakumu", 2026 - 1996, "Enterpreneur", "Father"];
console.log(Thomas);

//Exercise
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};
const years = [1996, 1997, 1998, 1999];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);



//ADD ELEMENTS
const friends = ["Thomas", "Billions", "Legacy"];
const newLength = friends.push("Hov"); //Add last element
//console.log(friends);
console.log(newLength);

friends.unshift("Maina"); //Add first element
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First element
console.log(friends);

console.log(friends.indexOf("Thomas"));
console.log(friends.indexOf("Bob")); // -1 cause Bob is not available

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Thomas"));

if (friends.includes("Thomas")) {
  console.log("You have a friend called Thomas");
}


//CHALLENGE #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip(bills[2])];
const totals = [
  bills[0] + calcTip2(bills[0]),
  bills[1] + calcTip2(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(tip);
console.log(totals);
*/

const Thomas = {
  firstName: "Thomas",
  lastName: "Maina",
  age: 2026 - 1996,
  job: "Enterpreneur",
  friends: ["Thomas", "Gakumu", "Maina"],
};
console.log(Thomas);

console.log(Thomas.lastName);
console.log(Thomas["lastName"]);

const nameKey = "Name";
console.log(Thomas["first" + nameKey]);
console.log(Thomas["last" + nameKey]);

const intrestedIn = prompt(
  "What do you want to know about Thomas?Choose between firstName,lastName,age,job, and friends",
);

if (Thomas[intrestedIn]) {
  console.log(Thomas[intrestedIn]);
} else {
  console.log(
    "Wrong request!Choose between firstName,lastName,age,job, and friends",
  );
}

Thomas.location = "Mwihoko";
Thomas["twitter"] = "@tacticalyunbten";

//console.log(Thomas);

//Challenge
//"Thomas has 3 friends, and his best friend is called Thomas"

console.log(
  `${Thomas.firstName} has ${Thomas.friends.length} friends, and his best friend is called ${Thomas.friends[0]}`,
);

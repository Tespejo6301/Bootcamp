// FUNCTION EXERCISES - SOLUTIONS

// Functions are an extremely important part of understanding how to program
// and they also allow for an ideal way of testing out your general JavaScript
// knowledge.

// These problem statements are sourced from codingbat.com,
// a great website to practice your code!

// The problems will gradually get harder and harder.

//
// PROBLEM 1: SLEEPING IN
//
// Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
//
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {

    if (weekday === true){
      if (vacation === false){
        return false
      }
      return true
    }
    return true
}
console.log("PROBLEM 1: SLEEPING IN");
var answer = sleepIn(false, false)
console.log(answer);
answer = sleepIn(true, false)
console.log(answer);
answer = sleepIn(false, true)
console.log(answer);
console.log("\n");


//
// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
    if(aSmile === true && bSmile === true){
      return true
    }
    else if (aSmile === false && bSmile === false){
      return true
    }
    return false
}
console.log("PROBLEM 2: MONKEY TROUBLE")
var result = monkeyTrouble(true, true)
console.log(result);
result = monkeyTrouble(false, false)
console.log(result);
result = monkeyTrouble(true, false)
console.log(result);
console.log("\n");

//
// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
  var result = ""
    if (n === 0)
      return result
    for (var i = 0; i < n; i++){
      result = result + str
    }
    return result
}

console.log("PROBLEM 3: STRING TIMES");

var answer = stringTimes("Hi", 2)
console.log(answer);
answer = stringTimes("Hi", 3)
console.log(answer);
answer = stringTimes("Hi", 1)
console.log(answer);
answer = stringTimes("Hi", 0)
console.log(answer);
console.log("\n");


// PROBLEM 4: LUCKY SUM

// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){
  if (a === 13)
    a = 0
  if (b === 13 ){
    b = 0
    c = 0
  }
  if (c === 13)
    c = 0

  var result = a + b + c
  return result

  //Code Goes Here
}
console.log("PROBLEM 4: LUCKY SUM");
var answer = luckySum(1, 2, 3)
console.log(answer);
var answer = luckySum(1, 2, 13)
console.log(answer);
var answer = luckySum(1, 13, 3)
console.log(answer);
console.log("\n");

// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday){
  var isBday = false
  var ticket = 0
  if (is_birthday === true)
    isBday = true
  if (speed > 60 && isBday === false){
    if (speed < 86)
      ticket = 1
    else
      ticket = 2
  }
  else if (speed > 65){
    if (speed < 81)
      ticket = 1
    else
      ticket = 2

  }
  return ticket
}

console.log("Problem 5");
var answer = caught_speeding(60, false)
console.log(answer);
answer = caught_speeding(65, false)
console.log(answer);
answer = caught_speeding(65, true)
console.log(answer);
console.log("\n");


// BONUS: MAKE BRICKS
//
// We want to make a row of bricks that is goal inches long. We have a number of
// small bricks (1 inch each) and big bricks (5 inches each). Return true if it
// is possible to make the goal by choosing from the given bricks. This is a
// little harder than it looks and can be done without any loops in a single line!
//
// If you can't figue this one out, don't worry, that's why its a bonus!
//
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
  var total = small + (big * 5)
  if(total < goal)
    return false
  return true
}
console.log("BONUS: MAKE BRICKS");
var answer = makeBricks(3, 1, 8)
console.log(answer);
answer = makeBricks(3, 1, 9)
console.log(answer);
answer = makeBricks(3, 2, 10)
console.log(answer);
console.log("\n");

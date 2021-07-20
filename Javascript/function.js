function hello(){
  console.log("hello world!")
}

function helloYou(name){
  console.log("Hello " + name)
}

function addNum(num1, num2){
  console.log(num1 + num2)
}

function helloSomeone( name = "Frankie" ){
  console.log("Hello " + name);
}

function formal( name= "Sam", title= "Sir"){
  return title + " " + name;
}

function timesFive(numInput){
  var result = numInput * 5
  return result
}

  function fun(stuff){
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
  }
  
hello()
helloYou( "Trisha")
addNum(5 , 6)
helloSomeone("Coco")
helloSomeone()
var x = formal()
console.log("Welcome " + x)
var answer = timesFive(10)
console.log(answer);

var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"
fun()
console.log(stuff)

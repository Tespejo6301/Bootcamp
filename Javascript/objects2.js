var carInfo = {
  make: "Toyota",
  year: 1900,
  model: "Camry",
  carAlert: function(){
    alert("We've got a car here!")
  }
}

var myObj = {
  prop: 37,
  reportProp: function(){
    return this.prop;
  }
}
console.log(myObj.reportProp());

var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The myMethod was called");
  }
}
console.log(simple);
console.dir(simple);
console.log(simple.myMethod());

var myObj = {
  name: "Jose",
  greet: function(){
    console.log("Hello " + this.name);
  }
}
console.log(myObj);
console.log(myObj["name"]);
console.log(myObj.greet);
console.log(myObj.greet());

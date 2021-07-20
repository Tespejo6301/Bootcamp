var country1 = "USA"
var country2 = "Germany"
var country3 = "China"

var countries = ["USA", "Germany", "China"]
console.log(countries)
console.log(countries[0]);
countries[2] = "France"
console.log(countries[2]);

countries = ["USA", "Germany", "Spain"]
console.log(countries)

console.log(country1[2]);

var mixed = [true, 20, "string"]
console.log(mixed.length);

var myArr = ['one', 'two', 'three']
var lastItem = myArr.pop()
console.log(lastItem)
console.log(myArr);
myArr.push("new item")
console.log(myArr);
console.log(myArr[myArr.length - 1]);
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix);
console.log(matrix.length);

var arr = ["A", "B", "C"]
console.log(arr);
for(var i = 0; i < arr.length; i++)
  console.log(arr[i]);
console.log("\n");
for(var letter of arr)
  console.log(letter);
console.log("\n");

for(var letter of arr)
  console.log("hello");
console.log("\n");

  for(var letter of arr)
    alert(letter);
arr.forEach(alert);

function addAwesome(name){
  console.log(name + " is awesome!");
}
console.log(addAwesome("django"));

var topics = ["python", "django", "science"]
topics.forEach(addAwesome)

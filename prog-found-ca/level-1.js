// Question 1
var someVar = "Hello.";

// Question 2
var person = {
  firstName: "John",
  lastName: "Snow"
};

// Question 3
var outOfStock = true;
if(outOfStock) {
  console.log("Out of Stock")
} else {
  console.log("In stock")
}

// Question 4
var someArray = [1, 2, 3, 4, 5]
for(var i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

// Question 5
for(var count = 15; count <= 25; count++) {
  console.log(count)
}

// Question 6
for (var count = 15; count <= 25; count++) {
  if (count === 20) {
    console.log(count)
  }
}

// Question 7
var arrOfObj = [
  {
    string: "Hello.",
    number: 12345,
    bully: true
  },
  {
    string: "Bye",
    number: 54321,
    bully: false
  }
];

for(var i = 0; i < arrOfObj.length; i++) {
  console.log(arrOfObj[i].number);
  console.log(arrOfObj[i].bully);
}

// Question 8
function whatIDontLike(funcArg) {
  console.log("I don't like " + funcArg);
}

whatIDontLike("hard cookies");

// Question 9
function math(firstArg, secondArg) {
  console.log(secondArg - firstArg);
}

math(8, 5);

// Question 10
var q10Array = [];

function addToArray(pushArg) {
  q10Array.push(pushArg);
}
addToArray(5)
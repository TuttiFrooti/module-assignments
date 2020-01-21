// Question 1
for (var count = 15; count <= 25; count++) {
  if ((count % 2) === 0) {
    console.log(count)
  }
}

// Question 2
const innerFunction = () => {
  console.log("I am a function");
};

function outerFunction(arg) {
  arg()
}

outerFunction(innerFunction)
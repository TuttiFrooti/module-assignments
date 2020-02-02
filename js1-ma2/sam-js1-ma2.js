// Question 1
const myFunctionExpression = function() {
  console.log("Sam");
}

// Question 2
document.querySelector('.btn').addEventListener('click', function() {
  console.log("I was clicked.");
})

// Question 3
document.querySelector('#firstName').addEventListener('keydown', function(e) {
  console.log(e.key);
})

// Question 4
document.querySelector('button').addEventListener('mouseover', function() {
  this.classList.add('hover');
})

// Question 5
document.querySelector("[data-animal='dog']").addEventListener("mouseout", function() {
  this.classList.remove('hover');
})

// Question 6
const li = document.querySelectorAll("li");
for(let i = 0; i < li.length; i++) {
  li[i].addEventListener('mouseover', function(e) {
    console.log(e.target.dataset.animal);
  })
}

// Question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow")
    break;
  case "cow":
    console.log("Moo")
    break;
  case "bird":
    console.log("Tweet")
    break;

  default:
    console.log("Harrumph")
    break;
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function (e) {
  console.log(e)
})

// Question 9
const timer = function() {
  console.log("Hello");

  if (counter === 6) {
    clearInterval(interval);
  }

  counter ++;
}
let counter = 1;
let interval = setInterval(timer, 500);

// Question 10

(function() {
  const container_div = document.querySelector(".container");
  setTimeout(() => {
    container_div.innerHTML = "Text updated";
  }, 2000);
})();


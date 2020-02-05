// Question 1
(a, b) => {
  return a - b
}

// Question 2
fetch('https://api.rawg.io/api/games?genres=sports')
.then(res => res.json())
.then(response => {
  response.results.forEach(element => {
    console.log(element.name)
  });
})
.catch(() => {
  document.location.href = "/error.html";
})

// Question 3
let sentence = "These cats are outrageous.";
sentence = sentence.replace(/cats/g, "giraffes");
console.log(sentence)

// Question 4
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
if (!params.has("userId")) {
  document.location.href = "/third.html";
} else if (params.get("userId") > 10) {
  document.location.href = "/first.html";
} else {
  document.location.href = "/second.html";
}

// Question 5
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

container.removeChild(btn);

// Question 6
const animals = document.querySelector(".animals");
const elephants = document.querySelector(".elephants");
const new_li = document.createElement("li");
new_li.className = "parrots";
new_li.innerHTML = "Parrots";

animals.appendChild(new_li);
elephants.before(new_li);

// Question 7
fetch('https://api.rawg.io/api/games/3801')
.then(res => res.json())
.then(response => {
  const rating_div = document.querySelector('.rating');
  rating_div.innerHTML = response.rating;
})
.catch(error => {
  console.log(error);
})
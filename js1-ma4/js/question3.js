const loadHTML = () => {
  fetch('https://api.rawg.io/api/games/4200')
    .then(res => res.json())
    .then(response => createGameDetails(response))
}

window.addEventListener('load', loadHTML); // Just makes sure the page is loaded before running the JS

const createGameDetails = json => {
  console.log(json)
  const h1 = document.querySelector('.container h1');
  h1.innerHTML = json.name;

  const image = document.querySelector('.image');
  image.style.backgroundImage = `url('${json.background_image}')`;

  const description = document.querySelector('.description');
  description.innerHTML = json.description
}
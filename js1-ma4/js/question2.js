const loadHTML = () => {
  fetch('https://api.rawg.io/api/games')
  .then(res => res.json())
  .then(response => createGames(response))
}

window.addEventListener('load', loadHTML); // Just makes sure the page is loaded before running the JS


const createGames = json => {
  const results = document.querySelector('.results');
  let constructGames = "";
  json.results.forEach(element => {
    console.log(element)
    constructGames += `<div class="game">
                          <h2>${element.name}</h2>
                          <img src="${element.background_image}" alt="${element.name}">
                      </div>`
  });
  results.innerHTML += constructGames;
}
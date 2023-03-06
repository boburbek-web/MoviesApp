const searchInput = document.querySelector('.search-input'),
      searchBtn = document.querySelector('.search-btn'),
      mainContent = document.querySelector('.main-content');


const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=77d01f6c&s=${searchInput.value}`);
    const result = await response.json();
    const movies = result.Search;
    movies.map(item => {

        let card = createElement('div', 'card', `
          <img src=${item.Poster}/>
          <h4>${item.Title}</h4>
          <span>${item.Year}-${item.Type}</span>
            `)

        mainContent.appendChild(card);

    })
}

searchInput.addEventListener("change", (e) => {
    mainContent.innerHTML = "";
    getMovies(e.target.value)
})



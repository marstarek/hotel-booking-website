
function getMoviesData() {
  let MoviesData = fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US&page=1')
    .then(res => res.json())
    .then(movies => {
            return movies
        })
    return MoviesData
}
function getData() {
  var MoviesData = fetch(
    'http://localhost:3001/hotels/')
    .then(res => res.json())
    .then(movies => {
            return movies
        })
    return MoviesData
}

export {getMoviesData,getData}
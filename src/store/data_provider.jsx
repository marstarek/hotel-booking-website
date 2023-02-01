
function getMoviesData() {
  let MoviesData = fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US&page=1')
    .then(res => res.json())
    .then(movies => {
            return movies
        })
    return MoviesData
}
function getList() {
  let List = fetch(
    'https://rickandmortyapi.com/api/character')
    .then(d => d.json())
    .then(char => {
            return char
        })
    return List
}
function getTopRatedMoviesData() {
  let TopRatedMoviesData = fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=6a9ddc3df7630d56986815607058bfec&language=en-US&page=1')
    .then(res => res.json())
    .then(movies => {
            return movies
        })
    return TopRatedMoviesData
}
function getData() {
  let MoviesData = fetch(
    'http://localhost:3001/hotels/')
    .then(res => res.json())
    .then(movies => {
            return movies
        })
    return MoviesData
}
export {getMoviesData,getTopRatedMoviesData,getList,getData}
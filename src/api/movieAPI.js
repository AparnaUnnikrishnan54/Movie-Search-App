const API_KEY="af55e318"
const BASE_URL = "https://www.omdbapi.com/"

// Search movies:
// https://www.omdbapi.com/?s=[movieTitle]&apikey=af55e318

// Get movie details:
// https://www.omdbapi.com/?i=[imdbID]&apikey=af55e318


export async function searchMovies(movieTitle) {
    const response=await fetch(`${BASE_URL}?s=${movieTitle}&apikey=${API_KEY}`)
    const data= await response.json()
    return data
}

export async function getMovieDetails(id) {
    const response=await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
    const data=await response.json()
    return data
}
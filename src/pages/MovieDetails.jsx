import React, { use } from 'react'
import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

import {getMovieDetails} from '../api/movieAPI'

function MovieDetails() {

  const [movie,setMovie]=useState(null)  // This will eventually hold the movie details we receive from OMDb
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

 // get the movie ID from the URL
  const {id}=useParams()

  useEffect(() => {
    const fetchMovieDetails=async()=>{
      setLoading(true)
      setError("")
      try {
        const data=await getMovieDetails(id)
        setMovie(data)
      } catch (error) {
        setError("Something went wrong. Please try again.")
      }
      finally{
        setLoading(false)
      }
    }
    fetchMovieDetails()
  }, [id])
  
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }
  if(!movie){
    return null //If movie data hasn't arrived yet, don't try to access movie.Title, movie.Poster, etc.
  }

  //show movie details
 //-----------------------
  // Search movie -  https://www.omdbapi.com/?s=avatar&apikey=af55e318

//  {
//   "Search": [
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//       "Poster": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg"
//     },

//  other movies......

// }

  //Get movie details - https://www.omdbapi.com/?i=tt0499549&apikey=af55e318

// {
//   "Title": "Avatar",
//   "Year": "2009",
//   "Rated": "PG-13",
//   "Released": "18 Dec 2009",
//   "Runtime": "162 min",
//   "Genre": "Action, Adventure, Fantasy",
//   "Director": "James Cameron",
//   "Writer": "James Cameron",
//   "Actors": "Sam Worthington, Zoe Saldaña, Sigourney Weaver",
//   "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//   "Language": "English, Spanish",
//   "Country": "United States, United Kingdom",
//   "Awards": "Won 3 Oscars. 91 wins & 131 nominations total",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
//   "Ratings": [
//     {
//       "Source": "Internet Movie Database",
//       "Value": "7.9/10"
//     },
//     {
//       "Source": "Rotten Tomatoes",
//       "Value": "81%"
//     },
//     {
//       "Source": "Metacritic",
//       "Value": "83/100"
//     }
//   ],
//   "Metascore": "83",
//   "imdbRating": "7.9",
//   "imdbVotes": "1,486,308",
//   "imdbID": "tt0499549",
//   "Type": "movie",
//   "DVD": "N/A",
//   "BoxOffice": "$785,221,649",
//   "Production": "N/A",
//   "Website": "N/A",
//   "Response": "True"
// }
  return (
    <div className='container py-4'>
      <div className='row g-3' style={{background:"rgb(221, 217, 206)"}}>
         <div className='col-md-5 p-4'>
           <img src={movie.Poster!="N/A"?movie.Poster:"/no-poster.jpg"} alt={movie.Title} 
           className='img-fluid rounded shadow' style={{width:"450px", height:"700px",objectFit:"cover"}}/>
        </div>
        <div className='col-md-7' style={{fontFamily:"Lora"}}>
          <h1 className='fw-bold py-4'>{movie.Title}</h1>
          <p>Year : {movie.Year}</p>
          <p>IMDB Rating : <span className='text-warning'><i className="fa-solid fa-star"></i> {movie.imdbRating}</span></p>
          <p>Genre : {movie.Genre}</p>
          <p>Director : {movie.Director}</p>
          <p>Actors : {movie.Actors}</p>
          <p>Runtime : {movie.Runtime}</p>
          <p>Language : {movie.Language}</p>
          <p>Awards : {movie.Awards}</p>
          <p><span className='fw-4'>Plot :</span><br />{movie.Plot}</p>
          <Link to="/">Back to Search</Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
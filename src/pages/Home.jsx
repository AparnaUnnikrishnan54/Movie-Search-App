import React from 'react'

import SearchBar from '../components/SearchBar'

import { useState } from 'react'

import MovieList from '../components/MovieList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

import { searchMovies,getMovieDetails } from '../api/movieAPI'

// {
//   "Search": [
//     {
//       "Title": "Dasa Avathar",
//       "Year": "1929",
//       "imdbID": "tt21610684",
//       "Type": "movie",
//       "Poster": "N/A"
//     }
//   ],
//   "totalResults": "1",
//   "Response": "True"
// }

function Home() {

  const [movies,setMovies]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

  const handleSearch=async(searchText)=>{
    setLoading(true)
    setError("")

    try {
      const data=await searchMovies(searchText)
      if(data.Response==="True"){

        //The search API only provides basic information such as Title, Year, IMDb ID and Poster. It does not provide the IMDb Rating or Plot.
        // So, we use each movie's IMDb ID to fetch its complete details.
        // map() creates a request for each movie, and Promise.all() waits
        // for all the detail requests to complete before continuing.
        // The resulting detailed movie data is then stored in the movies state.

        const movieWithDetails=await Promise.all(data.Search.map((movie)=>getMovieDetails(movie.imdbID)))
      
        setMovies(movieWithDetails)
      }
      else{
        setMovies([])
        setError("Movie not found. Try searching for another movie!")
      }

    } catch (error) {
      setMovies([])
      setError("Something went wrong. Please try again.")
    }

    finally{
      setLoading(false)
    }
  }

  return (
    <div className='home-page' style={{background:"rgb(221, 219, 213)",minHeight:"100vh"}}>
      <div className='container py-4 text-center'>
        <h1 className='text-danger' style={{marginTop:"30px",fontFamily:"Titan One"}}>Find Your Next Favorite Movie</h1>
        <h5 className='mb-5' style={{fontFamily:"Lora"}}>Search, explore, and discover movies you'll love.</h5>

        <SearchBar onSearch={handleSearch}/>
        {loading && <Loader/>}
        {error && <ErrorMessage message={error}/>}
        {!loading && !error && movies.length>0 && (<MovieList movies={movies}/>)} 
        {/* passes our movie array to MovieList */}
      </div>
    </div>

  )
}

export default Home
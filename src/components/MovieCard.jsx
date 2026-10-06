import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <div className='card h-100 shadow-sm'>
      <div>
        <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster!== "N/A" ? movie.Poster : "/no-poster.jpg"} alt={movie.Title} 
        className='card-img-top' style={{height:"350px" , objectFit:"cover"}}/>
      </Link>
      </div>
      <div className='card-body'style={{fontFamily:"Lora"}}>
        <h4 className='card-title fw-bold'>{movie.Title}</h4>
        <p className='card-text'>Year: {movie.Year}</p>
        <p className='card-text'>IMDb Rating : <span className='text-warning'><i className="fa-solid fa-star"></i> {movie.imdbRating}</span></p>
        <p className='card-text'>Plot : {movie.Plot}</p>
      </div>
    </div>
  )
}

export default MovieCard
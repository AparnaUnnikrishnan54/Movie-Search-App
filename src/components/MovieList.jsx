import React from 'react'

import MovieCard from './MovieCard'

function MovieList({movies}) {
  return (
    <div className='row g-4'>
      {movies.map((movie)=>(
        <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={movie.imdbID}>
          <MovieCard  movie={movie}/>
        </div>
      ))}
    </div>
  )
}

export default MovieList
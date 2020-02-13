import React from "react";


const Movie = props => {
  const movies = props.movies;
  const row = movies.map((movie, i) => {
    return (
      <div key={movie.id}>
        <img
        key={movie.id}
        src={movie.medium_cover_image}
        alt={movie.title}
        />
        <div>
        <p>Title: {movie.title}</p>
        <p>Year:{movie.year} Rating:{movie.rating}</p>
        <p>Summary: {movie.summary.slice(0, 140)}....</p>
        </div>
      </div>
    )
  })

  return (
  <div>
    {row}
  </div>
  )
}


export default Movie;

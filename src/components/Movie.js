import React from "react";


const Movie = props => {
  const movies = props.movies;
  const row = movies.map((movie, i) => {
    return (
      <div key={movie.id} className="1 row w-50">
        <img className="h-75"
        key={movie.id}
        src={movie.medium_cover_image}
        alt={movie.title}
        />
        <div className="2 col-6">
        <p>Title: {movie.title}</p>
        <p>Year:{movie.year} Rating:{movie.rating}</p>
        <p>Summary: {movie.summary.slice(0, 140)}....</p>
        </div>
      </div>
    )
  })

  return (
  <div className="3 container d-flex flex-wrap">
    {row}
  </div>
  )
}


export default Movie;

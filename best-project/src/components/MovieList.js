import React from 'react';
import '../style.css';

const MovieList = ({ movies, onShowMore }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <div className="moviesDetails">
            <div className="leftDetails">
              <h5>{movie.original_title}</h5>
              <p>{movie.release_date}</p>
            </div>
            <div className="rightDetails rating">
              <p>{movie.vote_average}</p>
            </div>
          </div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
      <div className='button-container'>
        <button className="show-more-button" onClick={onShowMore}>Show More</button>
      </div>
    </div>
  );
};

export default MovieList;
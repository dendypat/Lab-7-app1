import React from "react";
import "./Movie.css"

const Movie = ({title, poster_path, vote_average, overview}) => {
    const posterURL = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://image.tmdb.org/t/p/w500/'; // Replace with the path to your generic image

  const getVoteClass = (vote) => {
    if (vote > 7) {
      return 'green';
    } else if (vote >= 5) {
      return 'yellow';
    } else {
      return 'red';
    }
  };
  
    return (
        <div className="movie">
            <img src={posterURL} alt={title}></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${getVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
}

export default Movie;
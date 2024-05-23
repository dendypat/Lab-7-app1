import React, { useState, useEffect } from 'react';
import './App.css';
import APIKey from './config';
import Movie from './Components/Movie';
import Search from './Components/Search';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';

function App() {
  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    fetchMovies(`${APIURL}${APIKey}`);
  }, []);

  
  const fetchMovies = (url) => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok ' + resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        setMovieResults(data.results || []);
      });
  };

  const handleOnSubmit = (searchTerm) => {
    if (searchTerm) {
      fetchMovies(`${SearchURL}${APIKey}&query=${searchTerm}`);
    }
  };

  return (
    <>
      <header>
        <Search onSubmit={handleOnSubmit} />
      </header>
      <div className="movie-container">
        {movieResults.map((element) => (
          <Movie key={element.id} {...element} />
        ))}
      </div>
    </>
  );
}

export default App;
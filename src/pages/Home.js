import React from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { getPopularMovies } from '../services/getMoviesInformation';

const popular = await getPopularMovies();

const Home = () => {
  return <MoviesList trendFilms={popular.results}></MoviesList>;
};

export default Home;

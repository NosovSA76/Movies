import React from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { getPopularMovies } from "../servises/getMoviesInformation";

const popular = await getPopularMovies();
console.log(popular.results);

const Home = () => {
  return <MoviesList trendFilms={popular.results}></MoviesList>;
};

export default Home;

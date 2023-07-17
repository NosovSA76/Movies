import React, { useEffect, useState } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { Searchbar } from '../components/Search/search';
import { getMoviesByQuery } from '../services/getMoviesInformation';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieForSearch, setMovieForSearch] = useState({});
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    setLoading(true);
    if (!movieForSearch.length) {
      setLoading(false);
    }
  }, [movieForSearch]);

  useEffect(() => {
    if (!query) {
      return;
    }
    (async () => {
      try {
        const data = await getMoviesByQuery(query);
        setMovieForSearch(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <>
      <Searchbar
        onSubmit={handleSubmit}
        text={'Find movies by name'}
      ></Searchbar>
      {loading && <MoviesList trendFilms={movieForSearch}></MoviesList>}
      <ToastContainer transition={Slide} draggablePercent={60} />
    </>
  );
};

export default Movies;

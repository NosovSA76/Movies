import React, { useEffect, useState } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { Searchbar } from '../components/Search/search';
import { getMoviesByQuery } from '../services/getMoviesInformation';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [textSearch, setTextSearch] = useState('');
  const [movieForSearch, setMovieForSearch] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const query = searchParams.get('query');

  const handleSubmit = text => {
    setTextSearch(text);
    setSearchParams({ query: text });
  };

  useEffect(() => {
    setLoading(true);
    if (!movieForSearch.length) {
      setLoading(false);
    }
  }, [movieForSearch]);

  useEffect(() => {
    const storedMovieForSearch = localStorage.getItem(
      `movieForSearch-${query}`
    );
    if (query && storedMovieForSearch) {
      setMovieForSearch(JSON.parse(storedMovieForSearch));
    }
  }, [query]);

  useEffect(() => {
    if (!textSearch) {
      return;
    }
    (async () => {
      try {
        const data = await getMoviesByQuery(textSearch);
        setMovieForSearch(data.results);
        localStorage.setItem(
          `movieForSearch-${textSearch}`,
          JSON.stringify(data.results)
        );
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [textSearch]);

  useEffect(() => {
    if (!query && location.pathname === '/movies') {
      Object.keys(localStorage).forEach(key => {
        if (key.includes('movieForSearch-')) {
          localStorage.removeItem(key);
        }
      });
    } else {
      Object.keys(localStorage).forEach(key => {
        if (key.includes('movieForSearch-') && key.split('-')[1] !== query) {
          localStorage.removeItem(key);
        }
      });
    }
  }, [query, location]);

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

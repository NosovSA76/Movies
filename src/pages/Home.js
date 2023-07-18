import React, { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import { getPopularMovies } from '../services/getMoviesInformation';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies();
        setPopular(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(true);
      }
    })();
  }, []);

  return (
    <div>{loading ? <MoviesList trendFilms={popular} /> : <div></div>}</div>
  );
};

export default Home;

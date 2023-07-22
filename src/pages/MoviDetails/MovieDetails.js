import React, { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { getMoviesDetailsById } from '../../services/getMoviesInformation';
import NoPoster from '../../assets/no-poster.jpg';
import {
  MoviesCard,
  MoviesPoster,
  MoviesInformation,
  MoviesName,
  MoviesInfoText,
  MoviesInfoTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [moviesInfo, setMoviesInfo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { moviesID } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesDetailsById(moviesID);
        setMoviesInfo(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [moviesID]);

  console.log(location);

  const date = new Date(moviesInfo.release_date);
  const year = date.getFullYear();
  const score = Math.round(moviesInfo.vote_average * 10);
  const overview = moviesInfo.overview;
  const genres = moviesInfo.genres;
  console.log('location From MovieDetal: ', location);

  const navigate = useNavigate();

  const handleMoveBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    loaded && (
      <>
        <button onClick={() => handleMoveBack()}>
          <BsArrowLeft />
          Go back
        </button>

        <MoviesCard>
          <MoviesPoster
            width={170}
            src={
              moviesInfo.poster_path
                ? `https://image.tmdb.org/t/p/original/${moviesInfo.poster_path}`
                : NoPoster
            }
            alt=""
          />
          <MoviesInformation>
            <MoviesName>
              {moviesInfo.title} {year}
            </MoviesName>
            <MoviesInfoText>User score {score} %</MoviesInfoText>
            <MoviesInfoTitle>Overview</MoviesInfoTitle>
            <MoviesInfoText>{overview}</MoviesInfoText>
            <MoviesInfoTitle>Genres</MoviesInfoTitle>
            {genres &&
              genres.map(genre => <span key={genre.id}>{genre.name}, </span>)}
          </MoviesInformation>
        </MoviesCard>
        <ul>
          <li>
            <Link
              to="cast"
              state={{
                from: location.state.from,
              }}
            >
              Casts
            </Link>
          </li>
          <li>
            <Link
              to="review"
              state={{
                from: location.state.from,
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    )
  );
};

export default MovieDetails;

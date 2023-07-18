import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
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
  const { moviesID } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesDetailsById(moviesID);
        setMoviesInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [moviesID]);

  const date = new Date(moviesInfo.release_date);
  const year = date.getFullYear();
  const score = Math.round(moviesInfo.vote_average * 10);
  const overview = moviesInfo.overview;
  const genres = moviesInfo.genres;

  return (
    <>
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
          <Link to="cast">Casts</Link>
        </li>
        <li>
          <Link to="review">Reviews</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </>
  );
};

export default MovieDetails;

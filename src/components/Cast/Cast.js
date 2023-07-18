import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../services/getMoviesInformation';
import NoPhoto from '../../assets/no-photo.png';
import { CastList, CastCard, CastPhoto } from './Cast.styled';

const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { moviesID } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesCast(moviesID);
        setMoviesCast(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [moviesID]);

  return (
    <CastList>
      {moviesCast.map(moviesCast => (
        <CastCard key={moviesCast.id}>
          <CastPhoto
            width={170}
            src={
              moviesCast.profile_path
                ? `https://image.tmdb.org/t/p/original/${moviesCast.profile_path}`
                : NoPhoto
            }
            alt=""
          />
          <p>Name:{moviesCast.original_name}</p>
          <p>Character: {moviesCast.character}</p>
        </CastCard>
      ))}
    </CastList>
  );
};

export default Cast;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "../../servises/getMoviesInformation";
import NoPhoto from "../../assets/no-photo.png";
import { CastList, CastCard, CastPhoto } from "./Cast.styled";

const Cast = () => {
  const [MoviesCast, setMoviesCast] = useState([]);
  const { MoviesID } = useParams();

  console.log(MoviesID);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesCast(MoviesID);
        setMoviesCast(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [MoviesID]);

  return (
    <CastList>
      {MoviesCast.map((MoviesCast) => (
        <CastCard key={MoviesCast.id}>
          <CastPhoto
            width={170}
            src={
              MoviesCast.profile_path
                ? `https://image.tmdb.org/t/p/original/${MoviesCast.profile_path}`
                : NoPhoto
            }
            alt=""
          />
          <p>Name:{MoviesCast.original_name}</p>
          <p>Character: {MoviesCast.character}</p>
        </CastCard>
      ))}
    </CastList>
  );
};

export default Cast;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NoPoster from "../../assets/no-poster.jpg";
import { FilmName, MovePreview, HomePageSection } from "./MoviesList.styled";

const MoviesList = ({ trendFilms }) => {
  const [arrayList, setArrayList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setArrayList(trendFilms);
  }, [trendFilms]);

  return (
    <HomePageSection>
      {arrayList.map((item) => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={
            location.pathname.includes("Movies")
              ? `${location.pathname}/${item.id}`
              : `Movies/${item.id}`
          }
          key={item.id}
        >
          <MovePreview>
            <img
              width={70}
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                  : NoPoster
              }
              alt=""
            />
            <FilmName>{item.title}</FilmName>
          </MovePreview>
        </Link>
      ))}
    </HomePageSection>
  );
};

export default MoviesList;

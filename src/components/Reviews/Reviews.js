import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../services/getMoviesInformation';
import { ReviewsList, ReviewTitle, ReviewText } from './Reviews.styled';

const Reviews = () => {
  const [reviesInfo, setReviesInfo] = useState([]);
  const { MoviesID } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesReviews(MoviesID);
        setReviesInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [MoviesID]);

  return (
    <ReviewsList>
      {reviesInfo.length === 0 ? (
        <p>There are no reviews.</p>
      ) : (
        reviesInfo.map(reviesInfo => (
          <li key={reviesInfo.id}>
            <ReviewTitle>Author: {reviesInfo.author}</ReviewTitle>
            <ReviewText>{reviesInfo.content}</ReviewText>
          </li>
        ))
      )}
    </ReviewsList>
  );
};

export default Reviews;

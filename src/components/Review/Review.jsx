import React from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { movieDetails } = useParams();
  console.log(movieDetails);
  return <div>Review</div>;
};

export default Review;

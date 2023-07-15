import React from 'react';
import RatingStars from 'react-rating-stars-component';

const Rating = ({ rating }) => {
  return (
    <RatingStars
      count={5}
      value={rating / 2}
      size={24}
      isHalf={true}
      activeColor="#F87719"
      edit={false}
    />
  );
};

export default Rating;

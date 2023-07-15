import React from 'react';

import { Heading, Description } from './HeroDescription.styled';
import Rating from 'components/Rating/Rating';

const HeroDescription = ({ movie: { title, vote_average, overview } }) => {
  const description =
    overview.length > 145 ? `${overview.slice(0, 145)}...` : overview;

  return (
    <>
      <Heading>{title}</Heading>
      <Rating rating={vote_average} />
      <Description>{description}</Description>
    </>
  );
};

export default HeroDescription;

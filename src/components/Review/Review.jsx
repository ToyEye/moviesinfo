import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useGetOptionsForMovie } from 'hooks/useGetOptionsForMovie';
import Container from 'components/Container/Container.styled';
import Rating from 'components/Rating';
import {
  ReviewList,
  Section,
  ReviewItem,
  AuthorThumb,
  ContentThumb,
} from './Review.styled';

const Review = () => {
  const { movieDetails } = useParams();
  const { reviews } = useGetOptionsForMovie('reviews', movieDetails);

  return (
    <Section>
      <Container>
        <ReviewList>
          {reviews.length > 0 &&
            reviews.map(
              ({
                id,
                content,
                created_at,
                url,
                author_details: { avatar_path, name, rating },
              }) => {
                return (
                  <ReviewItem key={id}>
                    <AuthorThumb>
                      <p>{name}</p>
                      <Rating rating={rating} />
                    </AuthorThumb>
                    <ContentThumb>
                      <p>{created_at}</p>
                      <p>{content}</p>
                    </ContentThumb>
                  </ReviewItem>
                );
              }
            )}
        </ReviewList>
      </Container>
    </Section>
  );
};

export default Review;

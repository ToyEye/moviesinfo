import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useParams } from 'react-router-dom';

import { useGetOptionsForMovie } from 'hooks/useGetOptionsForMovie';
import Container from 'components/Container/Container.styled';
import Rating from 'components/Rating';
import { formateDate } from 'helpers/formateDate';
import { Section, ReviewDate, ReviewContant } from './Review.styled';

const Review = () => {
  const { movieDetails } = useParams();
  const { reviews } = useGetOptionsForMovie('reviews', movieDetails);
  console.log(reviews);
  return (
    <Section>
      <Container>
        <Accordion>
          {reviews.length > 0 &&
            reviews.map(
              ({
                id,
                author,
                content,
                created_at,
                url,
                author_details: { rating },
              }) => {
                return (
                  <AccordionItem key={id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{author}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReviewDate>{formateDate(created_at)}</ReviewDate>
                      <ReviewContant>{content}</ReviewContant>
                      {rating && <Rating rating={rating} />}
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              }
            )}
        </Accordion>
      </Container>
    </Section>
  );
};

export default Review;

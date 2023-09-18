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
import Container from 'components/reusable/Container/Container.styled';
import { Section } from 'components/reusable/Section/Section.styled';
import { NoTextContent } from 'components/reusable/NoTextContent/NoTextContent';
import Rating from 'components/reusable/Rating';
import { formateDate } from 'helpers/formateDate';
import { ReviewDate, ReviewContent } from './Review.styled';

const Review = () => {
  const { movieDetails } = useParams();
  const { reviews } = useGetOptionsForMovie('reviews', movieDetails);

  return (
    <Section>
      <Container>
        {reviews.length === 0 && (
          <NoTextContent>Sorry, no reviews yet</NoTextContent>
        )}
        <Accordion>
          {reviews.length > 0 &&
            reviews.map(
              ({
                id,
                author,
                content,
                created_at,

                author_details: { rating },
              }) => {
                return (
                  <AccordionItem key={id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{author}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReviewDate>{formateDate(created_at)}</ReviewDate>
                      <ReviewContent>{content}</ReviewContent>
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

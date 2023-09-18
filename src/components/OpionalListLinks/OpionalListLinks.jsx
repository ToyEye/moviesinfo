import React from 'react';

import Container from 'components/Container/Container.styled';
import { LinkButton } from 'components/LinkStyled/LinkStyled';
import { LinkList, Section } from './OpionalListLinks.styled';

const OpionalListLinks = () => {
  return (
    <Section>
      <Container>
        <LinkList>
          <li>
            <LinkButton to="cast">Cast</LinkButton>
          </li>
          <li>
            <LinkButton to="review">Review</LinkButton>
          </li>
        </LinkList>
      </Container>
    </Section>
  );
};

export default OpionalListLinks;

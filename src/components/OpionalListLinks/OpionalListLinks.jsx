import React from 'react';

import Container from 'components/Container/Container.styled';
import { LinkButton } from 'components/LinkStyled/LinkStyled';
import { LinkList } from './OpionalListLinks.styled';

const OpionalListLinks = () => {
  return (
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
  );
};

export default OpionalListLinks;

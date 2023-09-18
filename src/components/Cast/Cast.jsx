import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

import {
  CastList,
  CardDesc,
  CardItem,
  NoPhotoActor,
  BtnUp,
} from './Cast.styled';
import { Section } from 'components/reusable/Section/Section.styled';
import Container from 'components/reusable/Container/Container.styled';
import { NoTextContent } from 'components/reusable/NoTextContent/NoTextContent';

import { useGetOptionsForMovie } from 'hooks/useGetOptionsForMovie';

const Cast = () => {
  const { movieDetails } = useParams();
  const { cast } = useGetOptionsForMovie('credits', movieDetails);

  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entrie]) => {
        if (entrie.isIntersecting) {
          setShowUpBtn(true);
        } else {
          setShowUpBtn(false);
        }
      },
      { rootMargin: '-300px' }
    );

    const optionList = document.querySelector('.optionList');
    if (optionList) {
      observer.observe(optionList);
    }
  }, []);

  return (
    <Section>
      <Container>
        <CastList className="optionList">
          {cast.length === 0 && <NoTextContent>In list no casts</NoTextContent>}
          {cast.length > 0 &&
            cast.map(({ id, character, name, profile_path }) => (
              <CardItem key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt="name"
                  />
                ) : (
                  <NoPhotoActor>
                    <p>{name}</p>
                  </NoPhotoActor>
                )}

                <CardDesc>
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </CardDesc>
              </CardItem>
            ))}
        </CastList>
        {showUpBtn && (
          <BtnUp href="#header">
            <FaChevronUp size={30} />
          </BtnUp>
        )}
      </Container>
    </Section>
  );
};

export default Cast;

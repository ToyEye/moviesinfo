import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

import {
  Section,
  CastList,
  CardDesc,
  CardItem,
  NoPhotoActor,
  BtnUp,
} from './Cast.styled';

import { getOptionalInfo } from 'services/api';
import Container from 'components/Container/Container.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieDetails } = useParams();

  const [showUpBtn, setShowUpBtn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entrie], observer) => {
      if (entrie.isIntersecting) {
        setShowUpBtn(true);
      } else {
        setShowUpBtn(false);
      }
    }, {});

    const optionList = document.querySelector('.optionList');
    if (optionList) {
      observer.observe(optionList);
    }
  }, []);

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await getOptionalInfo(movieDetails, 'credits');
      setCast(cast);
    };
    getCast();
  }, [movieDetails]);

  return (
    <Section>
      <Container>
        <CastList className="optionList">
          {cast &&
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

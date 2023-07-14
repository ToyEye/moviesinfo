import Container from 'components/Container/Container.styled';
import React, { useEffect, useState } from 'react';
import { getTrandingMovie } from 'services/api';

const Hero = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { results } = await getTrandingMovie();
      setMovie(results);
    };

    fetchMovie();
  }, []);
  const random = Math.random() * 10;
  const movie = movies[random.toFixed()];
  console.log(movie);
  return (
    <section>
      {movies.length > 1 && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
      )}
      <Container></Container>
    </section>
  );
};

export default Hero;

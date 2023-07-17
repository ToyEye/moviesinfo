import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container.styled';
import { getTrandingMovie } from 'services/api';

const WeeklyTrends = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await getTrandingMovie('week');

      const randomIndexes = [];
      const result = [];

      while (randomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * results.length);

        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
          result.push(results[randomIndex]);
        }
      }

      setMovies(result);
    };

    getMovies();
  }, []);
  console.log(movies);
  return (
    <section>
      <Container>
        <div>
          <h2>WEEKLY TRENDS</h2>
          <a href="/">See all</a>
        </div>
        <ul>
          {movies.length > 0 &&
            movies.map(movie => (
              <li key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default WeeklyTrends;

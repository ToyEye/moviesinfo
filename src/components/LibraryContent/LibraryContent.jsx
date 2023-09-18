import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MovieList from 'components/MovieList';
import Container from 'components/reusable/Container/Container.styled';
import { Section, OutOfList, Title } from './LibraryContent.styled';

const LibraryContent = () => {
  const movies = useSelector(state => state.movies.movies);

  return (
    <Section>
      <Container>
        <Title>Greetings on your library page</Title>
        {movies.length === 0 ? (
          <OutOfList>
            You can choose your favorite movies from{' '}
            <Link to="/catalog">this page</Link>
          </OutOfList>
        ) : (
          <MovieList movies={movies} isLibrary />
        )}
      </Container>
    </Section>
  );
};

export default LibraryContent;

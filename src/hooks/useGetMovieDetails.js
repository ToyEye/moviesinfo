import { useState, useEffect } from 'react';
import { getInfoAboutMovie } from 'services/api';

export const useGetMovieDetailss = id => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getInfoAboutMovie(id);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [id]);

  return { movie, isLoading };
};

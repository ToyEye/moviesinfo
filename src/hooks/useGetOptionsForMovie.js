import { useEffect, useState } from 'react';

import { getOptionalInfo } from 'services/api';

export const useGetOptionsForMovie = (option, id) => {
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      switch (option) {
        case 'reviews':
          const { results } = await getOptionalInfo(id, option);

          setReviews(results);
          break;

        case 'credits':
          const { cast } = await getOptionalInfo(id, option);

          setCast(cast);
          break;
        default:
          break;
      }
    };
    getCast();
  }, [id, option]);

  return { cast, reviews };
};

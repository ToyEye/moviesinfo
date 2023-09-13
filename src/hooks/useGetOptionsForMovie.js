import { useEffect, useState } from 'react';

import { getOptionalInfo } from 'services/api';

export const useGetOptionsForMovie = (option, id) => {
  const [options, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      const { cast } = await getOptionalInfo(id, option);
      setCast(cast);
    };
    getCast();
  }, [id, option]);

  return options;
};

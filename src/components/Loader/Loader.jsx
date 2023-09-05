import { Blocks } from 'react-loader-spinner';

import { LoaderWrapper } from './Loader.styled';

import React from 'react';
const Loader = () => {
  return (
    <LoaderWrapper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
      />
    </LoaderWrapper>
  );
};

export default Loader;

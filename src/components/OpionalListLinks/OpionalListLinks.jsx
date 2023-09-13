import React from 'react';
import { Link } from 'react-router-dom';

const OpionalListLinks = () => {
  return (
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="review">Review</Link>
      </li>
    </ul>
  );
};

export default OpionalListLinks;

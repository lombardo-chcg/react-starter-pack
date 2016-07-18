import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <p className='center-align'>
      <Link to='/'>landing page </Link> | <Link to='/counter'> redux example</Link>
    </p>
  );
}

import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <p className='center-align'>
      <Link to='/'>landing page </Link> |
      <Link to='/api_example'> sample api call </Link> | 
      <Link to='/counter'> redux example</Link>
    </p>
  );
}

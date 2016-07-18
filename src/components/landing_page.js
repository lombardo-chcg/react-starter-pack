// example of a functional component.  not a React class.  simply returns some
// JSX to be rendered by parent

import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div>
      <Link to='/counter'>Redux Counter Example</Link>
    </div>
  )
}

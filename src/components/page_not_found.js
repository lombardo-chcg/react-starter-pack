import React from 'react';
import { Link } from 'react-router';

export default () => {
  return(
    <div>
      <p className='center-align'>page not found</p>
      <p className='center-align'><Link to='/'>Main</Link></p>
    </div>
  )
}

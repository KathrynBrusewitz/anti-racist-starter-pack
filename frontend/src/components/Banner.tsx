import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className='banner'>
      <div className={'banner-content'}>
        November 3rd is a crucial day in the United States. Register to vote at{' '}
        <a href='https://www.vote.org/' target='_blank' rel='noopener noreferrer'>
          Vote.org
        </a>
      </div>
    </div>
  );
}

export default Banner;

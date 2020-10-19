import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Banner.css';

interface Props {
  markdown?: string;
}

function Banner(props: Props) {
  return (
    <div className='banner'>
      <div className={'banner-content'}>
        <ReactMarkdown>{props.markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Banner;

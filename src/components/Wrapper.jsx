import React from 'react';

const Wrapper = ({ title, data }) => {
  return (
    <div className='comparison-wrapper'>
      <div className="comparison-wrapper__title">{title}</div>
      <div className="comparison-wrapper__data">{data}</div>
    </div>
  );

}

export default Wrapper;
import React from 'react';

const Model = ({ src, href, model }) => {
  return (
    <div className="comparison-model">
      <img src={src} alt="" className="comparison-model__img" />
      <a className="comparison-model__link"
        href={href}>{model}</a>
    </div>
  );

}

export default Model;
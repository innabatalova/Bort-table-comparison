import React from 'react';

const Item = ({ data, classHidden }) => {
  return (
    <div className={'comparison-data__item ' + classHidden}>{data}</div>
  );

}

export default Item;
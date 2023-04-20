import React from 'react';

const Wrapper = ({ classHead, classHeadTitle, title, classHeadData, data }) => {
  return (
    <div className={'comparison-wrapper ' + classHead}>
      <div className={'comparison-wrapper__title ' + classHeadTitle}>{title}</div>
      <div className={'comparison-wrapper__data ' + classHeadData}>{data}</div>
    </div>
  );

}

export default Wrapper;
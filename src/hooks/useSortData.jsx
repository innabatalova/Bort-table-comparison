import React from 'react'; 

import NoIcon from '../components/NoIcon';
import YesIcon from '../components/YesIcon';

export function useSortData(array){
  const newArray = array.map((item) => {
    if (item === 'yes') { return <YesIcon /> }
    if (item === 'no') { return <NoIcon /> }
    else { return item }
  }
  )
  return newArray
}
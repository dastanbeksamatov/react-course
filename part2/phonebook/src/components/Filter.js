import React from 'react';

const Filter = (props) => {
  return(
    <div>filter shown with: <input value={props.newPat} onChange={props.makeFilter}/></div>
  )
}

export default Filter;

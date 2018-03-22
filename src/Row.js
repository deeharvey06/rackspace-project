import React from 'react';

const Row = ({id, title, body}) => (
  <div className="row">
    <div>{title}</div>
    <div>{body}</div> 
  </div>
);

export default Row;


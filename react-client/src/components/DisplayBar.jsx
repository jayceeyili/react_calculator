import React from 'react';

const DisplayBar = (props) => (
  <div>
    <span>{ props.value }</span>
  </div>
)

export default DisplayBar;

// <h4> List Component </h4>
// There are { props.items.length } items.
// { props.items.map(item => <ListItem item={item}/>)}

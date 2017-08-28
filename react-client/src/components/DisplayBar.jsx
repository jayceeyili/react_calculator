import React from 'react';

const DisplayBar = (props) => {
  let result = '';
  if (props.state.result && !props.state.left) {
    result = props.state.result;
  } else if (!props.state.operater) {
    result = props.state.left;
  } else if (props.state.operater) {
    result = props.state.right;
  }

  return (
    <div className='display'>
      { result || 0 }
    </div>
  )
}

export default DisplayBar;

// <h4> List Component </h4>
// There are { props.items.length } items.
// { props.items.map(item => <ListItem item={item}/>)}

import React from 'react'
import DisplayBar from './DisplayBar.jsx'
import Keys from './Keys.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler(e) {
  //   console.log(e.target.text);
  // }

  render() {
    return (
      <div>
        Calculator
        <DisplayBar />
        <Keys />
      </div>
    )
  }
}

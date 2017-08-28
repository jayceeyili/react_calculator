import React from 'react'
import DisplayBar from './DisplayBar.jsx'
import Keys from './Keys.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        Calculator
        <DisplayBar value={ this.state.value }/>
        <Keys clickHandler={ this.clickHandler }/>
      </div>
    )
  }
}

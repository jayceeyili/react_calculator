import React from 'react'
import DisplayBar from './DisplayBar.jsx'
import Keys from './Keys.jsx'
import calculate from '../scripts/calculate.js'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
      left: '',
      right: '',
      operater: '',
    };

    this.handleoperaterClick = this.handleoperaterClick.bind(this);
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleACClick = this.handleACClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);
  }

  handleNumberClick(value) {
    if (!this.state.operater) {
      this.setState({
        left: this.state.left + value
      })
    } else {
      this.setState({
        right: this.state.right + value
      })
    }
  }

  handleACClick() {
    this.setState({
      result: '',
      left: '',
      right: '',
      operater: '',
    })
  }

  handleoperaterClick(operater) {
    this.setState({
      operater: operater
    })
  }

  handleEqualClick() {
    this.setState({
      result: calculate(this.state),
      left: '',
      right: '',
      operater: ''
    })
  }

  render() {
    return (
      <div className='calculator'>
        <DisplayBar
          state={ this.state }
        />
        <Keys
          handleNumberClick={ this.handleNumberClick }
          handleACClick={ this.handleACClick }
          handleoperaterClick={ this.handleoperaterClick }
          handleEqualClick={ this.handleEqualClick }
        />
      </div>
    )
  }
}

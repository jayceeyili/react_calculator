import React from 'react';

export default class Keys extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.getText = this.getText.bind(this);
  }

  getText(e) {
    let value = e.target.value;
    this.setState({
      text: value
    })
    console.log(value);
  }

  render() {
    return (
      <div>
        <div className='firstRow'>
          <button value='AC' onClick={ this.getText }>AC</button>
          <button value='/' onClick={ this.getText }>/</button>
          <button value='*' onClick={ this.getText }>*</button>
          <button value='-' onClick={ this.getText }>-</button>
        </div>
        <div className='secondRow'>
          <button value='7' onClick={ this.getText }>7</button>
          <button value='8' onClick={ this.getText }>8</button>
          <button value='9' onClick={ this.getText }>9</button>
          <button value='+' onClick={ this.getText }>+</button>
        </div>
        <div className='thirdRow'>
          <button value='4' onClick={ this.getText }>4</button>
          <button value='5' onClick={ this.getText }>5</button>
          <button value='6' onClick={ this.getText }>6</button>
        </div>
        <div className='fouthRow'>
          <button value='1' onClick={ this.getText }>1</button>
          <button value='2' onClick={ this.getText }>2</button>
          <button value='3' onClick={ this.getText }>3</button>
          <button value='=' onClick={ this.getText }>=</button>
        </div>
        <div className='fifthRow'>
          <button value='0' onClick={ this.getText }>0</button>
          <button value='.' onClick={ this.getText }>.</button>
        </div>
      </div>
    )
  }
};

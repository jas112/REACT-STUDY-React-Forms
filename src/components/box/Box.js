import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
        console.log(`box was clicked....`);
        this.props.removeBox(this.props.idxValue);
    }
  render() {
    return (
      <div className='Box-Console'>
        <div style={{width: `${this.props.boxDimension}px`, height: `${this.props.boxDimension}px`, backgroundColor: this.props.boxColor}} className='Box' onClick={this.handleClick}>
            <div>{this.props.boxColor}</div>
            <div>{this.props.idxValue}</div>
        </div>
      </div>
    )
  }
}

export default Box
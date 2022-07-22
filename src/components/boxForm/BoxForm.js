import React, { Component } from 'react';
import './BoxForm.css';

class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {boxColor: '', boxDimension: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
        
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({boxColor: '', boxDimension: ''});
    }

  render() {
    return (
      <div className='BoxForm-Console'>
        <div className='BoxForm-Panel'>
            <h3>Add A Box</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='boxColor'>Color: </label>
                <input id='boxColor' name='boxColor' value={this.state.boxColor} onChange={this.handleChange} className='BoxForm-input' />&nbsp;&nbsp;
                <label htmlFor='boxDimension'>Dimension: </label>
                <input id='boxDimension' name='boxDimension' value={this.state.boxDimension} onChange={this.handleChange} className='BoxForm-input' />
                <button type='submit' className='BoxForm-Button'>Add Box</button>
            </form>
        </div>
      </div>
    )
  }
}

export default BoxForm
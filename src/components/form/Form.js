import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {username: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({username: evt.target.value});
    }

    handleSubmit(evt){
        alert(`username: ${this.state.username}`);
        this.setState({username: ''});
    }

  render() {
    return (
      <div className='Form-Console'>
        <div className='Form-Panel'>
        <h1>Test Form</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                />
                <button type='submit' className='Form-Submit-Button'>Submit</button>
            </form>
        </div>
        <div className='Form-Panel'>
            {/* <p>&nbsp;{this.state.username}&nbsp;</p> */}
            <textarea value={this.state.username}></textarea>
        </div>
      </div>
    )
  }
}

export default Form
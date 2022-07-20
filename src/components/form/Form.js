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
      <div>
        <h1>Test Form</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
                type='text' 
                value={this.state.username} 
                onChange={this.handleChange} 
            />
            <button type='submit'>Submit</button>
        </form>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

export default Form
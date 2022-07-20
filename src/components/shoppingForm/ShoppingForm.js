import React, { Component } from 'react';
import './ShoppingForm.css';

class ShoppingForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', qty: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        console.log('adding item to list...');
        this.props.addToList(this.state);
        this.setState({name: '', qty: ''})
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' value={this.state.name} onChange={this.handleChange} />&nbsp;&nbsp;
        <label htmlFor='qty'>Qty: </label>
        <input id='qty' name='qty' value={this.state.qty} onChange={this.handleChange} />&nbsp;&nbsp;
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default ShoppingForm
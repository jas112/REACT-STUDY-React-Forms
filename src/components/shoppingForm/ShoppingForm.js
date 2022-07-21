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
        <div className='ShoppingForm-Console'>
            <h1>Add to List</h1>
            <form onSubmit={this.handleSubmit} className='ShoppingForm'>
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' value={this.state.name} onChange={this.handleChange} /><br/>
                <label htmlFor='qty'>Qty: </label>
                <input id='qty' name='qty' value={this.state.qty} onChange={this.handleChange} /><br/>
                <button type='submit' className='ShoppingForm-Submit-Button'>Submit</button>
            </form>
            <div className='ShoppingForm-Panel'>
                <p className='ShoppingForm-Panel-Text'>Use the form above to add new items to the shopping list.</p>
                
            </div>
        </div>
      
    )
  }
}

export default ShoppingForm
import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {contentString: ''};
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
        this.props.addItem(this.state);
        this.setState({contentString: ''});
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type='text' id='contentString' name='contentString' value={this.state.contentString} onChange={this.handleChange} placeholder='Add new todo item...' />
            <button type='submit'>Add Todo Item</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
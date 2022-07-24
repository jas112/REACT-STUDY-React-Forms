import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {todoTask: ''};
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
        if (this.state.todoTask === '') {
            alert('Please enter a value for your task...')
        } else {
            let newTodoItem = {todoTask: this.state.todoTask, id: uuidv4(), isCompleted: false}
            this.props.addItem(newTodoItem);
            this.setState({todoTask: ''});
        }
    }

  render() {
    return (
      <div className='TodoForm-Console'>
        <form onSubmit={this.handleSubmit}>
            <input type='text' id='todoTask' name='todoTask' value={this.state.todoTask} onChange={this.handleChange} placeholder='Add new todo item...' className='TodoForm-Input' />&nbsp;
            <button type='submit' className='TodoForm-Btn' >Add Todo Item</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
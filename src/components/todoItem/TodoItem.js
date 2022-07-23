import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoTask: this.props.todoTaskValue,
            isCompleted: this.props.isCompletedValue,
            editThisItem: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleClick(evt){
        this.setState({editThisItem: true});
    }

    handleToggleCompleted(evt){
        this.props.toggleCompleted(this.props.itemIdxValue);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleEdit(evt){
        evt.preventDefault();
        this.props.editItem(this.props.itemIdxValue, this.state.todoTask);
        if(this.props.isCompleted) {
            this.props.toggleCompleted(this.props.itemIdxValue)
        } 
        this.setState({todoTask: this.state.todoTask, isCompleted: false, editThisItem: false});
    }

    handleRemove(evt){
        this.props.removeItem(this.props.itemIdxValue);
    }

    generateItemForm(){
        return (
            <div className='TodoItemContent'>
                <form onSubmit={this.handleEdit}>
                    <input 
                        id='todoTask' 
                        name='todoTask' 
                        value={this.state.todoTask} 
                        onChange={this.handleChange} 
                        placeholder='Enter new item value...' 
                    />
                    <button type='submit'>Save</button>
                </form>
            </div>
        );
    }

    generateItem(){
        return (
            <div className='TodoItemContent'>
                <div 
                    className={this.props.isCompletedValue ? 'TodoItem-Content-Task TodoItem-Content-Task-isCompleted' :  'TodoItem-Content-Task TodoItem-Content-Task-isNotCompleted'}
                    onClick={this.handleToggleCompleted}
                >
                    {this.props.todoTaskValue}
                </div>
                <button onClick={this.handleClick}>E</button>
                <button onClick={this.handleRemove}>X</button>
            </div>
        );
    }

  render() {

    let thisItem = this.generateItem();

    let thisItemForm = this.generateItemForm();

    return (
      <div className='TodoItem'>
        {`state.props.todoTask: ${this.props.todoTaskValue} | this.state.todoTask: ${this.state.todoTask} | this.state.isCompleted: ${this.state.isCompleted.toString()}`}
        {this.state.editThisItem ? thisItemForm : thisItem}
      </div>
    )
  }
}

export default TodoItem;
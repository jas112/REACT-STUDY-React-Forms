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
        if (this.state.todoTask === '') {
            alert('Please enter a valid value for your task...')
        } else {
            this.props.editItem(this.props.itemIdxValue, this.state.todoTask);
            this.setState({editThisItem: false});
        }
    }

    handleRemove(evt){
        this.props.removeItem(this.props.itemIdxValue);
    }

    generateItemForm(){
        return (
            <div className='TodoItem-Content'>
                <form onSubmit={this.handleEdit} className='TodoItem-EditForm'>
                    <input 
                        id='todoTask' 
                        name='todoTask' 
                        value={this.state.todoTask} 
                        onChange={this.handleChange} 
                        placeholder='Enter new item value...' 
                        className='TodoItem-EditForm-Input'
                    />
                    <button type='submit' className='TodoItem-EditForm-Btn'>Save</button>
                </form>
            </div>
        );
    }

    generateItem(){
        return (
            <div className={this.props.isCompletedValue ? 'TodoItem-Content TodoItem-Completed' :  'TodoItem-Content TodoItem-Incomplete'}>
                <div 
                    className={this.props.isCompletedValue ? 'TodoItem-Content-Task TodoItem-Content-Task-isCompleted' :  'TodoItem-Content-Task TodoItem-Content-Task-isNotCompleted'}
                    onClick={this.handleToggleCompleted}
                >
                    {this.props.todoTaskValue}
                </div>
                <button className='TodoItem-Content-Btn TodoItem-Content-Btn-Edit' onClick={this.handleClick} title='Edit Task'>&#9998;</button>
                <button className='TodoItem-Content-Btn TodoItem-Content-Btn-Remove' onClick={this.handleRemove} title='Remove Task'>&#9760;</button>
            </div>
        );
    }

  render() {

    let thisItem = this.generateItem();

    let thisItemForm = this.generateItemForm();

    return (
      <div className={this.props.isCompletedValue ? 'TodoItem TodoItem-Completed' :  'TodoItem TodoItem-Incomplete'}>
        {/* {`state.props.todoTask: ${this.props.todoTaskValue} | this.state.todoTask: ${this.state.todoTask} | this.state.isCompleted: ${this.state.isCompleted.toString()}`} */}
        {this.state.editThisItem ? thisItemForm : thisItem}
      </div>
    )
  }
}

export default TodoItem;
import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoTask: this.props.contentString,
            itemFinished: false,
            editThisItem: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    generateItemForm(){
        return (
            <div className='TodoItemContent'>
                <form onSubmit={this.handleEdit}>
                    <input id='todoTask' name='todoTask' value={this.state.todoTask} onChange={this.handleChange} placeholder='Enter new item value...' />
                    <button onSubmit={this.handleEdit}>Save</button>
                </form>
            </div>
        );
    }

    generateItem(){
        return (
            <div className='TodoItemContent'>
                {this.state.todoTask}
                <button onClick={this.handleClick}>E</button>
                <button onClick={this.handleRemove}>X</button>
            </div>
        );
    }

    handleClick(evt){
        this.setState({editThisItem: true});
    }

    handleEdit(evt){
        evt.preventDefault();
        console.log(`TodoItem this.state.todoTask: ${this.state.todoTask}...`);
        this.props.editItem(this.props.itemIdx, this.state.todoTask);
        this.setState({todoTask: this.props.contentString, editThisItem: false});
    }

    handleRemove(evt){
        this.props.removeItem(this.props.itemIdx);
    }

  render() {

    let thisItem = this.generateItem();

    let thisItemForm = this.generateItemForm();

    return (
      <div className='TodoItem'>
        {this.state.editThisItem ? thisItemForm : thisItem}
      </div>
    )
  }
}

export default TodoItem;
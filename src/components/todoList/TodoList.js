import React, { Component } from 'react';
import TodoForm from '../todoForm/TodoForm';
import TodoItem from '../todoItem/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {thingsToDo: []};
        this.addTodoItem = this.addTodoItem.bind(this);
        this.editTodoItem = this.editTodoItem.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }

    generateTodoList(){

        let todoList = this.state.thingsToDo.map(item =>(
            <TodoItem key={uuidv4()} itemIdx={this.state.thingsToDo.indexOf(item)} contentString={item.contentString} editItem={this.editTodoItem} removeItem={this.removeTodoItem} />
        ));

        return todoList;
    }

    addTodoItem(newItem){
        this.setState(st => {
            let newThingsToDo = [...st.thingsToDo, newItem];
            return {thingsToDo: newThingsToDo}
        });
    }

    editTodoItem(idx, newContentStr){

        console.log(`idx: ${idx} | newContentStr: ${newContentStr}`)

        this.setState(st => {
            let newState = {...st};
            newState.thingsToDo[idx].contentString = newContentStr; 
            return newState;
        });
        
    }

    removeTodoItem(idx){
        this.setState(st => {
            let newThingsToDo = [...st.thingsToDo];
            newThingsToDo.splice(idx,1);
            return {thingsToDo: newThingsToDo};
        });
    }

  render() {

    let currentTodoList = this.generateTodoList();

    return (
      <div className='TodoList-Console'>
        <div className='TodoList-Title'>TodoList</div>
        <div className='TodoList-Item-Display'>
            {currentTodoList.length ? currentTodoList : 'there are not items on your list.'}
        </div>
        <div className='TodoList-Form-Panel'>
            <TodoForm addItem={this.addTodoItem} />
        </div>
      </div>
    )
  }
}

export default TodoList;
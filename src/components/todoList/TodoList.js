import React, { Component } from 'react';
import TodoForm from '../todoForm/TodoForm';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.css';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {thingsToDo: []};
        this.addTodoItem = this.addTodoItem.bind(this);
        this.editTodoItem = this.editTodoItem.bind(this);
        this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }

    generateTodoList(){

        let todoList = this.state.thingsToDo.map(item =>(
            <TodoItem 
                key={item.id} 
                itemIdxValue={this.state.thingsToDo.indexOf(item)} 
                todoTaskValue={item.todoTask} 
                isCompletedValue={item.isCompleted}
                editItem={this.editTodoItem}
                toggleCompleted={this.toggleIsCompleted}
                removeItem={this.removeTodoItem} />
        ));

        return todoList;
    }

    addTodoItem(newItem){
        this.setState(st => {
            let newThingsToDo = [...st.thingsToDo, newItem];
            return {thingsToDo: newThingsToDo}
        });
    }

    editTodoItem(idx, newTaskStr){

        console.log(`idx: ${idx} | newTaskStr: ${newTaskStr}`);

        this.setState(st => {
            let newState = {...st};
            newState.thingsToDo[idx].todoTask = newTaskStr; 
            return newState;
        });
    }

    toggleIsCompleted(idx){

        console.log(`toggling status of idx: ${idx}`);

        let newState = {...this.state};
        let targetTask = {...newState.thingsToDo[idx]}

        console.log(`targetTask.isCompleted before: ${JSON.stringify(targetTask.isCompleted)}`);

        targetTask.isCompleted = !targetTask.isCompleted;

        console.log(`targetTask.isCompleted after: ${JSON.stringify(targetTask.isCompleted)}`);

        newState.thingsToDo[idx] = targetTask;

        this.setState(newState);


        // this.setState(st => {

        //     let newThingsToDo = [...st.thingsToDo];
        //     console.log(`newThingsToDo before: ${JSON.stringify(newThingsToDo)}`);

        //     newThingsToDo[idx].isCompleted = !newThingsToDo[idx].isCompleted; 
        //     console.log(`newThingsToDo after: ${JSON.stringify(newThingsToDo)}`);

        //     return {thingsToDo: newThingsToDo}
        // });

        // this.setState(st => {

        //     let newState = {...st};
        //     console.log(`newThingsToDo before: ${JSON.stringify(newState.thingsToDo)}`);

        //     newState.thingsToDo[idx].isCompleted = !newState.thingsToDo[idx].isCompleted; 
        //     console.log(`newThingsToDo after: ${JSON.stringify(newState.thingsToDo)}`);

        //     return newState;
        // });

        // this.setState(st => {
        //     let newThingsToDo = [...st.thingsToDo];
        //     console.log(`newThingsToDo before: ${JSON.stringify(newThingsToDo)}`);
        //     console.log(`toggling status of idx: ${idx} | current status value: ${newThingsToDo[idx].itemStatus}`);
        //     newThingsToDo[idx].itemStatus = !newThingsToDo[idx].itemStatus; 
        //     console.log(`newThingsToDo after: ${JSON.stringify(newThingsToDo)}`);
        //     console.log(`toggling status of idx: ${idx} | new status value: ${newThingsToDo[idx].itemStatus}`);
        //     return {thingsToDo: newThingsToDo};
        // });
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
        {JSON.stringify(this.state.thingsToDo)}
      </div>
    )
  }
}

export default TodoList;
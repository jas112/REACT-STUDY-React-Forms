import React, { Component } from 'react';
import ShoppingForm from '../shoppingForm/ShoppingForm';
import { v4 as uuidv4 } from 'uuid';
import './ShoppingList.css'

class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {name: 'Milk', qty: '2 gallons', id: uuidv4()},
                {name: 'Bread', qty: '2 loaves', id: uuidv4()},
            ]
        };
        this.addToList = this.addToList.bind(this);
    }

    addToList(item){

        let newItem = {...item, id: uuidv4()};

        this.setState(currState => ({
            items: [...currState.items, newItem]
        }));
    }

    renderItems(){
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name} : {item.qty}
                    </li>
                ))}
            </ul>
        );
    }

  render() {
    return (
        <div>
            <h1>ShoppingList</h1>
            {this.renderItems()}
            <ShoppingForm addToList={this.addToList} />
        </div>
    )
  }
}

export default ShoppingList
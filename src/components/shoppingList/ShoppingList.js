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
            <div>
                {this.state.items.map(item => (
                    <div key={item.id} className='ShoppingList-Item'>
                        {item.name} : {item.qty}
                    </div>
                ))}
            </div>
        );
    }

  render() {
    return (
        <div className='ShoppingList-Console'>
            <div className='ShoppingList-Console-Panel'>
                <h1>ShoppingList</h1>
                {this.renderItems()}
            </div>
            <div className='ShoppingList-Console-Panel'>
                <ShoppingForm addToList={this.addToList} />
            </div>
        </div>
    )
  }
}

export default ShoppingList
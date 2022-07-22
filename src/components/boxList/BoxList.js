import React, { Component } from 'react';
import Box from '../box/Box';
import { v4 as uuidv4 } from 'uuid';
import BoxForm from '../boxForm/BoxForm';
import './BoxList.css';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: []};
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
        this.reset = this.reset.bind(this);
    }

    generateBoxes(){

        let displayedBoxes = this.state.boxes.map(box => (
            <Box key={uuidv4()} idxValue={this.state.boxes.indexOf(box)} boxDimension={box.boxDimension} boxColor={box.boxColor} removeBox={this.removeBox} />
        ));

        return displayedBoxes;
    }

    addBox(newBox){
        this.setState(st => {
            // newBox['id'] = uuidv4();
            let newBoxes = [...st.boxes]
            // newBox['idxValue'] = newBoxes.length;
            newBoxes = [...newBoxes, newBox];
            return {boxes: newBoxes};
        });
    }

    removeBox(idx){
        this.setState(st => {
            let newBoxes = [...st.boxes];
            newBoxes.splice(idx,1);
            return {boxes: newBoxes};
        });
    }

    reset(){
        this.setState(st => {
            let newBoxes = [];
            return {boxes: newBoxes};
        });
    }

  render() {
    return (
        <div className='BoxList-Console'>
            <h1>Box List</h1>
            <div className='BoxList-Form-Panel'>
                <BoxForm addBox={this.addBox} />
            </div>
            <div className='BoxList-Display-Panel'>
                {this.state.boxes.map(box => (
                    <Box key={uuidv4()} idxValue={this.state.boxes.indexOf(box)} boxDimension={box.boxDimension} boxColor={box.boxColor} removeBox={this.removeBox} />
                ))}
            </div>
        </div>

    )
  }
}

export default BoxList
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 1
    }
    onPlus = ()=>{
        this.setState(({number}) => ({number: number + 1}));
    }
    onMinus = ()=>{
        this.setState(({number}) => ({number: number - 1}));
    }
    render() {
        const {number} = this.state;
        const {onPlus, onMinus} = this;
        return (
            <div>
                <h1>Counter</h1>
                <h2>{number}</h2>
                <button id="plus" onClick={onPlus}> + </button>
                <button id="minus" onClick={onMinus}> - </button>
            </div>
        );
    }
}

export default Counter;
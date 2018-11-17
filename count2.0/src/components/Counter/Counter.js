import React, { Component } from 'react';
import store  from '../../store/store';
import { Actions } from './store/index'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: store.getState()[props.caption]
        }
        store.subscribe(() => {
            this.setState((state) => {
                return {
                    count: store.getState()[this.props.caption]
                }
            })
        })
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <span>count: {this.state.count}</span>
            </div>
        )
    }
    
    handleIncrement(){
        store.dispatch(Actions.counterIncrement(this.props.caption))
    }
    handleDecrement(){
        store.dispatch(Actions.counterDecrement(this.props.caption))
    }
}

export default Counter;
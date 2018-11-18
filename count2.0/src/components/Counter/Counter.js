import React, { Component } from 'react';
import store  from '../../store/store';
import { Actions } from './store/index'
import CounterUI from './CounterUI'

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
            <CounterUI handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} count={this.state.count}/>
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
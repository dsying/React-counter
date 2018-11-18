import React, { Component } from 'react';
import { Actions } from './store/index'
import CounterUI from './CounterUI'
import {PropTypes} from 'prop-types';

class Counter extends Component {
    constructor(props, context) {
        const { store } = context
        super(props, context)
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
        this.context.store.dispatch(Actions.counterIncrement(this.props.caption))
    }
    handleDecrement(){
        this.context.store.dispatch(Actions.counterDecrement(this.props.caption))
    }
}
Counter.contextTypes = {
    store: PropTypes.object
}
  
export default Counter;
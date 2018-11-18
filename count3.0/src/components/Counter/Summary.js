import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            count: this.getSummary()
        }
    }
    
    render() {
        return (
            <span>Total count: {this.state.count}</span>
        )
    }

    componentWillMount(){
        this.onSumChange()
    }


    getSummary(){
        const { store } = this.context
        const state = store.getState()
        let sum = 0;
        for(let k in state){
            if(state.hasOwnProperty(k)){
                sum += state[k]
            }
        }
        return sum
    }

    onSumChange() {
        const { store } = this.context
        store.subscribe(() => {
            this.setState((state) => {
                return {
                    count: this.getSummary()
                }
            })
        })
    }
}
Summary.contextTypes = {
    store: PropTypes.object
}
export default Summary;
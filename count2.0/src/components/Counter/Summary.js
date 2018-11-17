import React, { Component } from 'react';
import store from '../../store/store'

class Summary extends Component {
    constructor(props){
        super(props)
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

    com

    getSummary(){
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
        store.subscribe(() => {
            this.setState((state) => {
                return {
                    count: this.getSummary()
                }
            })
        })
    }
}

export default Summary;
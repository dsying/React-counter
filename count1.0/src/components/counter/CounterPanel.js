import React, { Component, Fragment } from 'react';
import Counter from './Counter'

class CounterPanel extends Component {
    constructor(...args){
        super(...args)
        this.initState = [0, 10, 20]
        this.state = {
            sum: this.getSummary()
        }
        this.countChange = this.countChange.bind(this)
    }
    render() {
        return (
            <Fragment>
                <Counter onUpdate={this.countChange} caption={'First'} initVal={this.initState[0]} />
                <Counter onUpdate={this.countChange} caption={'Second'} initVal={this.initState[1]}/>
                <Counter onUpdate={this.countChange} caption={'Third'} initVal={this.initState[2]}/>
                <span>Total count: { this.state.sum }</span>
            </Fragment>
        )
    }
    getSummary(){

        return this.initState.reduce((sum,n,i,arr) => {
            return sum += n
        },0)
    }
    countChange(newCount, preCount) {
        const val = newCount - preCount
        this.setState((state) => {
            return {
                sum : state.sum + val
            }
        })
    }
}

export default CounterPanel;
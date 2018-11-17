import React, { Component} from 'react'

class Counter extends Component {
    constructor(...args) {
        console.log(...args)
        super(...args)
        this.state={
            count:  args[0]['initVal'] || 0
        }
         
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this) 
    }

    render() {
        const { caption } = this.props
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <span>{ caption }, count: {this.state.count}</span>
            </div>
        )
    }

    handleIncrement() {
        this.updateCount(true)
    }
    handleDecrement() {
        this.updateCount(false)
    }

    updateCount(isIncrement){
        const { onUpdate } = this.props
        const count = isIncrement ? this.state.count + 1 : this.state.count - 1
        this.setState((state) => {
            return {
                count
            }
        })
        onUpdate(count, this.state.count)
    }
}

export default Counter;


import React, { Component, Fragment } from 'react';
import Counter from './Counter'
import Summary from './Summary'

class CounterPanel extends Component {
    render() {
        return (
            <Fragment>
                <Counter caption='First'/>
                <Counter caption='Second'/>
                <Counter caption='Third'/>
                <Summary />
            </Fragment>
        )
    }
}

export default CounterPanel;
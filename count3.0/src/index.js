import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterPanel from './components/Counter/CounterPanel'
import Provider from './components/Provider'
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
      <CounterPanel />
    </Provider>,
    document.getElementById('root')
  );



import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
  ));


export default store;
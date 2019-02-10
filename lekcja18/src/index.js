import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const actionInc = { type: 'INCREMENT' };
const actionDec = { type: 'DECREMENT' };

function reducer(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT3':
      return state + action.payload
    default:
      return state
  }
}

function reducer2(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT2':
      return state + 1
    case 'DECREMENT2':
      return state - 1
    default:
      return state
  }
}

function products(state = [], action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state.slice(),
        { ...action.payload }
      ];
    case 'CHECK':
      const index = state.findIndex(({ payload: name }) => {
        return name === action.payload.name;
      })
      return state.map((e) => {
        if (action.payload.name !== e.name) {
          return e
        }
        return {
          ...e,
          checked: !e.checked,
        }
      });
    default:
      return state;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers(
    { reducer, reducer2, products }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(actionInc);
// store.dispatch(actionInc);
// store.dispatch(actionInc);
// store.dispatch(actionInc);
// store.dispatch(actionDec);
// store.dispatch(actionDec);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

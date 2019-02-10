import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import cloneDeep from 'lodash/cloneDeep';

const mainReducer = (state = {}, action) => {
    const { results, next, previous } = action.payload || {};
    switch (action.type) {
        case 'SAVE_PEOPLE_LIST':
            return {
                peopleList: results,
                next,
                previous,
            }
        default:
            return state;
    }
}

const store = createStore(mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

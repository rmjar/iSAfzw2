import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { INCREMENT, SAVE_POSTS, SAVE_POSTS_PENDING, SAVE_POSTS_FAILED, SAVE_POSTS_COMPLETED, SAVE_COMMENTS, SAVE_COMMENTS_PENDING, SAVE_COMMENTS_COMPLETED, SAVE_COMMENTS_FAILED } from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const reducer1 = (state = { num: 0, posts: [], comments: [] }, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case SAVE_POSTS:
            return {
                ...state,
                posts: payload,
            }
        case SAVE_COMMENTS:
            return {
                ...state,
                comments: payload,
            }
        case INCREMENT:
            return {
                ...state,
                num: state.num + Number.parseInt(payload, 10)
            };
        default:
            return state;
    }
}

const actions = (state = {}, action) => {
    const { type } = action || {};
    switch (type) {
        case SAVE_POSTS_COMPLETED:
            return {
                ...state,
                pending: false,
                completed: true,
                failed: false,
            };
        case SAVE_POSTS_PENDING:
            return {
                ...state,
                pending: true,
                completed: false,
                failed: false,
            };
        case SAVE_POSTS_FAILED:
            return {
                ...state,
                pending: false,
                completed: false,
                failed: true,
            };
        case SAVE_COMMENTS_COMPLETED:
            return {
                ...state,
                commentsPending: false,
                commentsCompleted: true,
                commentsFailed: false,
            };
        case SAVE_COMMENTS_PENDING:
            return {
                ...state,
                commentsPending: true,
                commentsCompleted: false,
                commentsFailed: false,
            };
        case SAVE_COMMENTS_FAILED:
            return {
                ...state,
                commentsPending: false,
                commentsCompleted: false,
                commentsFailed: true,
            };
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    reducer1,
    actions,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose; //to dla trybu deweloperskiego. jak produkcja to wystarczy sam compose

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose; //to dla trybu deweloperskiego. jak produkcja to wystarczy sam compose

export default createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
import { combineReducers } from 'redux';
import { SAVE_POSTS, SAVE_USER, SAVE_COMMENTS } from '../Components/App';

const reducer = (state = { posts: [], users: [], comments: [] }, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case SAVE_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...payload],
            }
        case SAVE_USER:
            return {
                ...state,
                users: [...state.users, payload],
            }
        case SAVE_COMMENTS:
            return {
                ...state,
                comments: [...state.comments, ...payload]
            }
        default:
            return state;
    }
}

const actions = (state = {}, action) => {
    const { type, payload } = action || {};
    switch (type) {
        default:
            return state;
    }

}

export default combineReducers({
    reducer,
})
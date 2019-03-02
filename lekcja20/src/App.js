import React, { Component } from 'react';

import { connect } from 'react-redux';


export const INCREMENT = 'INCREMENT';
export const SAVE_POSTS = 'SAVE_POSTS';
export const SAVE_POSTS_COMPLETED = 'SAVE_POSTS_COMPLETED'
export const SAVE_POSTS_PENDING = 'SAVE_POSTS_PENDING';
export const SAVE_POSTS_FAILED = 'SAVE_POSTS_FAILED';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const SAVE_COMMENTS_PENDING = 'SAVE_COMMENTS_PENDING';
export const SAVE_COMMENTS_COMPLETED = 'SAVE_COMMENTS_COMPLETED';
export const SAVE_COMMENTS_FAILED = 'SAVE_COMMENTS_FAILED';

const START_ADDR_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const START_ADDR_COMMENTS = 'https://jsonplaceholder.typicode.com/comments';

const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000)
  });
}

const actionPending = {
  type: SAVE_POSTS_PENDING,
}

const actionCompleted = {
  type: SAVE_POSTS_COMPLETED,
}

const actionFailed = {
  type: SAVE_POSTS_FAILED,
}

const actionCommentsPending = {
  type: SAVE_COMMENTS_PENDING,
}

const actionCommentsCompleted = {
  type: SAVE_COMMENTS_COMPLETED,
}

const actionCommentsFailed = {
  type: SAVE_COMMENTS_FAILED,
}

const saveCommentsToStoreActn = (payload) => ({
  type: SAVE_COMMENTS,
  payload,
})

const savePostsToStoreActn = (payload) => ({
  type: SAVE_POSTS,
  payload,
})

const saveCommentsToStore = () => {
  return (dispatch) => {
    dispatch(actionCommentsPending);
    fetch(START_ADDR_COMMENTS)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(saveCommentsToStoreActn(resp));
        dispatch(actionCommentsCompleted);
      })
      .catch((error) => dispatch(actionCommentsFailed))
  };
}

const savePostsToStore = () => {
  return (dispatch) => {
    dispatch(actionPending);
    fetch(START_ADDR_POSTS)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(savePostsToStoreActn(resp));
        dispatch(actionCompleted);
      })
      .catch((error) => dispatch(actionFailed))
  };
}

const createActionIncrement = (payload) => ({
  type: INCREMENT,
  payload,
})

const createAsyncActionIncrement = (value) => {
  return (dispatch) => {
    asyncFunction().then(
      () => {
        dispatch(createActionIncrement(value));
      });
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    const { savePosts, saveComments } = this.props;
    savePosts();
    saveComments()
  }

  handleIncrement = (value) => {
    const { increment } = this.props;

    increment(5);
  }

  handleAsyncIncrement = (value) => {
    const { incrementAsync } = this.props;

    incrementAsync(5);
  }

  render() {
    const { posts = [], comments = [] } = this.props.testState;
    console.log(comments)
    return (
      <div className="App" >
        Counter:
        <div onClick={this.handleAsyncIncrement}>async: {this.props.testState.num}</div>
        <div onClick={this.handleIncrement}>sync: {this.props.testState.num}</div>
        <div>{
          posts.map(post => {
            return <div>
              <strong>{post.title}</strong>
              <div>{post.body}</div>
              <div>==============Comments:==============</div>
              {comments && comments
                .filter(comment => comment.postId === post.id)
                .map(comment => {
                  return (<div>
                    <div>{comment.name}</div>
                    <div>{comment.body}</div>
                    <div>{comment.email}</div>
                  </div>)
                }
                )}
              <div>=====================================</div>
              <br />
            </div>
          })
        }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  testState: state.reducer1,
})

const mapDispatchToProps = (dispatch) => ({
  increment: (value) => {
    dispatch(createActionIncrement(value));
  },
  incrementAsync: (value) => {
    dispatch(createAsyncActionIncrement(value));
  },
  savePosts: (value) => {
    dispatch(savePostsToStore(value));
  },
  saveComments: (value) => {
    dispatch(saveCommentsToStore(value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

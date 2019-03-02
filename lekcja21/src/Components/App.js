import React, { Component } from 'react';

import { connect } from 'react-redux';


export const SAVE_POSTS = 'SAVE_POSTS';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_COMMENTS = 'SAVE_COMMENTS'

const START_ADDR_USER = 'https://jsonplaceholder.typicode.com/users/';
const START_ADDR_POSTS = 'https://jsonplaceholder.typicode.com/posts?userId=';
const START_ADDR_COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId=';

const usersToFetch = [2, 3, 7];


const createActionSaveUser = (data) => ({
  type: SAVE_USER,
  payload: data,
});

const fetchUser = (userId) => {
  return fetch(START_ADDR_USER + userId)
      .then((resp) => resp.json())
}

const fetchUsersAction = ((users = []) => {
  return (dispatch) => {
    const promises = users.map((user) => {
      return fetchUser(user).then((resp) => {
        dispatch(createActionSaveUser(resp))
      });
    });

    //Promise.all(promises);
  }
})


const createActionSavePosts = (data) => ({
  type: SAVE_POSTS,
  payload: data,
});

const fetchPosts = (userId) => {
  return fetch(START_ADDR_POSTS + userId)
    .then(resp => resp.json());
}

const fetchPostsAndCommentsAction = ((users = []) => {
  return (dispatch) => {
    const promises = users.map((user) => {
      return fetchPosts(user).then((resp) => {
        dispatch(createActionSavePosts(resp))
      });
    });

    //Promise.all(promises);
  }
})



class App extends Component {

  componentDidMount() {
    const { saveUsersToStore } = this.props;
    const { savePostsAndCommentsToStore } = this.props;
    saveUsersToStore(usersToFetch);
    savePostsAndCommentsToStore(usersToFetch);
  }


  render() {

    return (
      <div className="App" >

      </div>
    );
  }
}


const selectUserById = (state, userId) => {
  const { users } = state.reducer;

  return users.find(({ id }) => id === userId);
}

const selectPostsWithUsers = (state) => {
  const { posts } = state.reducer;

  return posts.map((post) => {
    return {
      ...post,
      user: selectUserById(state, post.userId),
    }
  })
}

const mapStateToProps = state => {
  const { posts, users } = state.reducer;

  return {
    posts,
    users,
    postsWithUsers: selectPostsWithUsers(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  savePostsAndCommentsToStore: (usersIds) => {
    dispatch(fetchPostsAndCommentsAction(usersIds));
  },
  saveUsersToStore: (usersIds) => {
    dispatch(fetchUsersAction(usersIds));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';


const createActionSavePosts = (postsList) => ({
  type: 'SAVE_POSTS_LIST',
  payload: postsList,
})

const createActionSaveUsers = (usersList) => ({
  type: 'SAVE_USERS_LIST',
  payload: [...usersList],
})

const createActionSaveOneUser = (user) => ({
  type: 'SAVE_SINGLE_USER',
  payload: user,
})

const START_ADDR_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const START_ADDR_USERS = 'https://jsonplaceholder.typicode.com/users';
const START_ADDR_ONE_USER = 'https://jsonplaceholder.typicode.com/users?id=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  fetchPosts = (url = START_ADDR_POSTS) => {
    const { savePostsToStore } = this.props;
    return fetch(url)
      .then((resp) => resp.json())
      .then(resp => {
        savePostsToStore(resp);
        return resp;
      });
  }

  fetchUsers = (url = START_ADDR_USERS) => {
    const { saveUsersToStore } = this.props;
    return fetch(url)
      .then((resp) => resp.json())
      .then(resp => {
        saveUsersToStore(resp);
        return resp;
      });
  }

  fetchOneUser = (userId, url = START_ADDR_ONE_USER) => {
    const { saveOneUserToStore } = this.props;
    return fetch(url + userId)
      .then((resp) => resp.json())
      .then(resp => {
        saveOneUserToStore(resp);
        return resp
      });
  }

  fetchPostsWithUsers = () => {
    return this.fetchPosts()
      .then(resp => {
        const uniqueUserIds = resp.reduce((acc, post) => {
          const { userId } = post;
          if (!acc.includes(userId)) {
            acc.push(userId);
          }
          return acc;
        }, []);

        const promises = uniqueUserIds.map((userId) => {
          return this.fetchOneUser(userId);
        });

        return Promise.all(promises);
      });
  }

  componentDidMount = () => {
    this.fetchPostsWithUsers()
      .then(() => {
        this.setState({
          loading: false,
        })
      });
  }

  render() {
    const { loading } = this.state;
    const { postsWithUsers = [] } = this.props;

    return (
      <div>
        <h3>App</h3>
        <ul>
          {loading && <li>L O A D I N G . . .</li>}
          {!loading && postsWithUsers.map(post => {
            if (!post.user) return null;
            return <li style={{ 'listStyleType': 'none' }} key={post.id}>
              <div><span><strong>{post.id} {post.title} </strong>, by: {post.user.name}</span>
              </div>
              <div>{post.body}</div>
            </li>
          })}
        </ul>
      </div >
    );
  }
}

const selectUserById = (state, userId) => {
  const { usersList } = state;
  return usersList.find(({ id }) => id === userId);
}

const selectPostsWithUsers = (state) => {
  const { postsList } = state;

  return postsList.map((post) => {
    return {
      ...post,
      user: selectUserById(state, post.userId),
    }
  })
}

const mapStateToProps = (state) => ({
  postsList: state.postsList,
  usersList: state.usersList,
  postsWithUsers: selectPostsWithUsers(state),
})

const mapDispatchToProps = (dispatch) => ({
  savePostsToStore: (list) => dispatch(createActionSavePosts(list)),
  saveUsersToStore: (list) => dispatch(createActionSaveUsers(list)),
  saveOneUserToStore: (user) => dispatch(createActionSaveOneUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

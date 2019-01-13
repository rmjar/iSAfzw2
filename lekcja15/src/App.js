import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://infoshareacademy-742f2.firebaseio.com/user.json')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.users.map(user =>
              <li key={user.id}>
                {user.name}
              </li>
            )}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

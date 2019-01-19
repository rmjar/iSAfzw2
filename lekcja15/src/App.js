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
    fetch('https://pulp-fitness.firebaseio.com/config.json')
      .then(response => response.json())
      .then(data => this.setState({ config: data }));
  }

  render() {
    return (
      <div>
        <header>
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

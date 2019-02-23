import React, { Component } from 'react';

import ClientList from './ClientList';

export const MyContext = React.createContext(123);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      version: 'orange',
      changeVersion: this.clickHandler,
    }
  }

  clickHandler = () => {
      this.setState(({ version }) => ({
        version: (version === 'pink' )? 'orange' : 'pink',
      }))
    }

  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        <div className="App">
          App Context
        <ClientList />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;

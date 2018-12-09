import React, { Component, Fragment } from 'react';
import './App.css';

import NavBar from './../NavBar';
import Home from './../Home';
import Contact from './../Contact';
import Users from './../Users';
import Footer from './../Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render(){
    return <div>
      <Router>
        <Fragment>
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} /> 
          <Route path="/users/:userId?" component={Users} /> 
          <Route path="/" component={Footer} />
        </Fragment>
      </Router>
    </div>;
  }
}

export default App;

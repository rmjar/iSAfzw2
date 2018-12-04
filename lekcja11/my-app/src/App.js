import React, {Component} from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from './components/News';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

import './App.css';

  class App extends Component {
    render(){
      return <div> 
          {/* <Counter initValue={1}/> */}

          <Router>
              <div>
              <Route path="/" component={Navbar} />
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/news" component={News} />
              <Route path="/" component={Footer} />
          </div>
          </Router>
      </div>;
    }
  }
  

export default App;
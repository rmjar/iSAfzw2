import React, {Component} from 'react';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

/* const name = 'Michał';
const count = (a, b) => a + b;
const person1 = {
    name: "Jan",
    surname: "Kowalski"
}
const person2 = {
    name: "Paweł",
    surname: "Nowak"
}
function Button(props) {
    const {label: {
            age
        }, name} = props;
    return (
        <div>{age} {name}</div>
    );
}
function Person(props) {
    const {
        age,
        person: {
            name,
            surname
        }
    } = props;
    return (
        <div>{name} {surname}
            {age}</div>
    );
}
const numbers = [1, 2, 5, 7, 123];
function Number(props) {
    const {value} = props;
    return <div>{value}</div>
}
function NumberList() {
    return numbers.map((value, index) => {
        return <Number value={value} key={index}/>
    })
}

const people = [
    {
        name: "michał",
        age: 12,
        id: 1
    }, {
        name: "anna",
        age: 15,
        id: 5
    }, {
        name: "karol",
        age: 50,
        id: 10
    }
]

function PersonToList(props) {
    const {name, age} = props.data;
    return <div>{name} {age}</div>
}
function PersonList() {
    return
    people.map((person) => {
        const {
            id,
            ...data
        } = person;
        return <PersonToList data={data} key={id}/>
    })
}
const menuItems = [
    {
        label: "Item 1",
        expandable: true,
        id: 1
    }, {
        label: "Item 2",
        expandable: false,
        id: 2
    }, {
        label: "Item 3",
        expandable: true,
        id: 3
    }
]
const SingleItem = (props) => <span>{props.label} {props.expandable
        ? ' v'
        : '  '}
    |</span>
    const Items = () => menuItems.map(({ id, ...item }) => <SingleItem {...item} key={id}/>)

function App() {
    return (
        <div>
            App
            <Person
                person={{
                name: "Jan",
                surname: "Kowalski"
            }}
                age={40}/>
            <Person
                person={{
                name: "Paweł",
                surname: "Nowak"
            }}
                age={30}/>
            <PersonList/>
            <Items/>
        </div>
    );
}

class List extends Component {
    render() {
        return <div>List siemanko {this.props.data}</div>
    }
}

class PersonToList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    handleClick = (e) => {
        this.setState((state) => {
            return {
                counter: ++state.counter
            }
        })

    }

    render() {
        return <div onClick={this.handleClick}>{this.props.name} {this.props.age}
            {this.state.counter}</div>
    }
}

class PersonList extends Component {

    render() {
        const people = this.props.people;
        return people.map((person) => {
            const {
                id,
                ...data
            } = person;
            return <PersonToList {...data} key={id}/>
        })
    }
}

class App extends Component {

    render() {
        return <PersonList people={people}/>
    }
} */

class Element extends Component {
    constructor() {
        super();
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMmount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return null;
    }
}

class Counter extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        counter: this.props.initValue || 0,
      }
    }
  
    handleClickPlus = () => {
      this.setState((state) => ({
        counter: state.counter + 1
      }));
    }
  
    handleClickMinus = () => {
      this.setState((state) => ({
        counter: state.counter - 1
      }));
    }
    
    render(){
        const {counter} = this.state;
      return <div className={classNames("App1",{
          red: counter % 3 === 0,
          green: counter % 3 === 1,
          blue: counter % 3 === 2,
      })}>
        {/*<div>Count: {this.state.counter} {this.state.counter % 2 === 0 && <p>Some msg</p>}</div>*/}
        <div>Count: {this.state.counter} {this.state.counter % 2 !== 0 ? <p>odd</p> : <p>even</p> }</div>
        <div onClick={this.handleClickPlus}>Plus</div>
        <div onClick={this.handleClickMinus}>Minus</div>
        {/* !!(counter % 2) && <Element counter= {counter}/> */}
        <Element counter={counter} />
      </div>;
    }
  }
  
class Home extends Component {
    render() {
        return <h1>
            Home
        </h1>
    }
}

class Navbar extends Component {
    render() {
        return <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/news">News</Link>
        </div>
    }
}

class Footer extends Component {
    render() {
        return <div>
            Footer
        </div>
    }
}
class Contact extends Component {
    render() {
        return <h1>
            Contact
        </h1>
    }
}

class News extends Component {
    render() {
        return <div>
            <p>News</p>
            <p>News 2</p>
        </div>
    }
}
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
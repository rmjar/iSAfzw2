import React, { Component } from 'react';
import './App.css';

const name = 'Michał';
const count = (a, b) => a + b; 
const person1 = {
    name: "Jan", surname: "Kowalski"
} 

const person2 = {
    name: "Paweł",
    surname: "Nowak"
} 

function Button(props) {
    const { label: { age }, name }
        = props; return (<div>{age} {name}</div>);
} 

function
    Person(props) {
        const { age, person: { name,
            surname } } = props; return (<div>{name} {surname}
                {age}</div>);
} 

const numbers = [1, 2, 5, 7, 123]; 

function Number(props) { 
    const { value } = props; 
    return <div>{value}</div> 
}

    function NumberList() {
    return numbers.map((value, index) => {
        return <Number value={value} key={index} />
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
    const { name, age } = props.data; 
    return <div>{name} {age}</div>
} 

function PersonList() {
    return
    people.map((person) => {
        const { id, ...data
        } = person; return <PersonToList data={data} key={id} />
    })
}

const menuItems = [{
    label: "Item 1", expandable: true,
    id: 1
}, { 
    label: "Item 2", 
    expandable: false, 
    id: 2 }, { 
    label: "Item 3", 
    expandable: true, 
    id: 3 }] 

const SingleItem = (props) => <span>{props.label} {props.expandable ? ' v' : '  '} </span>;

const Items = () => menuItems.map(({ id, ...item }) => <SingleItem {...item} key={id} />);
            
            function App1() {
                return (<div> App <Person
                    person={{ name: "Jan", surname: "Kowalski" }} age={40} />
                    <Person person={{ name: "Paweł", surname: "Nowak" }} age={30} />
                    <PersonList /> <Items />         </div>);
            }

class List extends Component {
    render() {
        return <div>List siemanko {this.props.data}</div>
    }
}
class PersonToList2 extends Component {

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
        return <div onClick={this.handleClick}>{this.props.name} {this.props.age} {this.state.counter}</div>
    }
}

class PersonList2 extends Component {
    render() {
        const people = this.props.people;
        return people.map((person) => {
            const {
                id,
                ...data
            } = person;
            return <PersonToList2 {...data} key={id} />
        })
    }
}

class App extends Component {

    render() {
        return <PersonList2 people={people} />
    }
}

export default App;
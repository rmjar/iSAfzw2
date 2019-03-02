import React, { useState } from 'react';
import Input from './Input';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     }
//   }


//   handleCounter = () => {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1,
//     }));
//   }

//   render() {
//     const { counter } = this.state;
//     return (
//       <div onClick={this.handleCounter}>Counter: {counter}</div>
//     );
//   }
// }

// function App() {
//   const [counter, setCounter] = useState(0);

//   function add() {
//     setCounter(counter + 1);
//   }

//   function sub() {
//     setCounter(counter - 1);
//   }

//   return <div>
//     <div onClick={add}>+</div>
//     <div onClick={() => { setCounter(counter + 1) }}>counter: {counter}</div>
//     <div onClick={sub}>-</div>
//   </div>
// }

function App(props) {
  const [
    todos,
    setTodos
  ] = useState(['imreza']);

  function addTodo(text) {
    setTodos([...todos, text])
  }

  function handleSubmit(text) {
    text && addTodo(text);

  }

  return <div>
    <Input handleSubmit={handleSubmit} />
    <div>todos: {todos.map(todo => <div>{todo}</div>)}</div>
  </div>
}

export default App;

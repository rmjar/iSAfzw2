import React, { useState, useEffect } from 'react';

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

function Input(props) {
    const [
        text,
        setText
    ] = useState('');

    useEffect(() => {
        console.log('use effect', text);

        return () => {
            console.log('use effect in return', text);
        }
    });

    function handleTextAdding(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(text);
        reset();
    }

    function reset() {
        setText('');
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleTextAdding} value={text} placeholder='input text...' />
        </form>
    </div>
}

export default Input;

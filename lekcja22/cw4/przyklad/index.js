import React, { useState, useEffect } from 'react';

export function CountingMachine() {
    const [counter, setCounter] = useCounter(0);
    return (
        <>
            <p data-testid="counterMessage">Wow! {counter} times!</p>
            <button data-testid="dec" onClick={() => setCounter(counter - 5)}>
                --
            </button>
            <button data-testid="inc" onClick={() => setCounter(counter + 5)}>
                ++
            </button>
        </>
    );
}

function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue);
    useEffect(() => {
        document.title = `Clicked (${counter})!`;
    });
    return [counter, setCounter];
}

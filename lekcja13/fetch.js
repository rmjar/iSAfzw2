const processResponse = response => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Status <> 200');
    }
}


const processChucky = url => {
    fetch(url)
        .then(processResponse)
        .then(jokeObj => {
            //console.log(jokeObj)
            const { value: {joke} } = jokeObj;
            alert (joke)
        })
}


fetch('https://official-joke-api.herokuapp.com/random_joke')
    .then(processResponse)
    .then(jokeObj => {
        console.log(jokeObj);
        const { setup, punchline, type } = jokeObj;
        if (type !== 'programming') {
            throw new Error('Not a programming joke');
        }
        alert(setup);
        alert(punchline);
    })
    .catch(err => {
        console.warn(err);
        processChucky('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    });


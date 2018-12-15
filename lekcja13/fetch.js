fetch('https://safe-falls-22549.herokuapp.com/random_joke').then(response => {
    console.log(response);
    if (response.status === 200) {
        response.json().then(jokeObj => {
            console.log(jokeObj);
            const { setup, punchline, randomDude } = jokeObj;
            alert(setup);
            alert(punchline, randomDude);
        });
    }
});
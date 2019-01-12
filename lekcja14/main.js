const prom = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

prom().then((resp) => {
    console.log(resp);
    throw Error;
})
.catch((err) => {
    console.warn(err);
});
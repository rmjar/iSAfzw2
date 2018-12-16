const requestBody = new URLSearchParams({
    geoit: 'JSON',
    locate: '52.21667,21.03333'
});

const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
const url = 'https://geocode.xyz';

const processResponse = response => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Status <> 200');
    }
}

fetch(url, { 'method': 'POST', 'headers': headers, 'body': requestBody })
    .then(processResponse)
    .then(obj => console.log(obj))
    .catch(console.warn);
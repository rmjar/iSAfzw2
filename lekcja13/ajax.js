const httpRequest = new XMLHttpRequest();

// callback
httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest);
      const {setup, punchline } = JSON.parse(httpRequest.response);
      console.log (setup);
      console.log(punchline);
    }
  }
};

// start
httpRequest.open('GET', 'https://safe-falls-22549.herokuapp.com/random_joke');
httpRequest.send();
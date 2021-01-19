console.log('trying a new message');

function processResponse(response) {
    return response.json();
}

//show the joke on the page
// 1. make the request using fetch()

fetch('https://icanhazdadjoke.com', {
    headers: {
        Accept: 'application/json'
    }
})
.then(response => {
    const theData = response.json();
    return theData; // returns to the next .then()
}) //convert to JSON
.then(data => {
    console.log(data);
    return data.joke;
})
.then(theJoke => {
    console.log(theJoke);
})
.catch(err => console.log(err))

// 2. grab the .joke 
// 3. render it to the page





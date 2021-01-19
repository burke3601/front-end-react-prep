/*
how do you get an "as-you-type" feature in your front end app?

1. add event listener
2. fetch()
3. render
*/

async function main(){
    const button = document.querySelector('[data-new-joke]');
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const joke = await getJoke();
        renderJoke(joke);
    });
}
main();


async function getJoke() {
    // Show the joke on the page:
    // 1. make the Request using fetch()
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });
    // 2. grab the .joke
    const jokeData = await response.json();
    // console.log(jokeData);
    // console.log(jokeData.joke);
    return jokeData.joke;
    // 3. render it to the page
}

async function renderJoke(joke) {
    // async b/c we will await getJoke
    //const joke = await getJoke();

    //create the DOM element
    const p = document.createElement('p');
    // put the joke text into it
    p.textContent = joke;
    // attach it to an existing DOM element
    document.querySelector('[data-js-root]').appendChild(p);

    

}
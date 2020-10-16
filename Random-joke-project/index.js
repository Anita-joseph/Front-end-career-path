/* Create the getPunchline function. This function should:
	Insert the punchline into the punchlineDiv
	Add the class "bubble" to the punchlineDiv
	Toggle the "hidden" class on both buttons.
*/

// Create 4 variables and assign them to their respective elements: 
// setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

let setupDiv = document.getElementById('setup');
let punchlineDiv = document.getElementById('punchline');
let punchlineBtn = document.getElementById('punchlineBtn');
let newJokeBtn = document.getElementById('newJokeBtn');

let punchline;

punchlineBtn.addEventListener('click', getPunchline);
newJokeBtn.addEventListener('click', getJoke);

function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

async function getJoke() {
    let jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    let joke = await jokePromise.json();
    // console.log(joke);
    // Get the setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup;

    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.

    punchline = joke[0].punchline;

    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove('bubble');

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

}

getJoke();
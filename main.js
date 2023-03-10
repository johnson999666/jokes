// DBh9JSxPmP8nFyD3f7hTig==5WTQf89GYY0NrR6z

const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke");

const apiKey = "DBh9JSxPmP8nFyD3f7hTig==5WTQf89GYY0NrR6z"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";


async function getJoke() {
    
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText - "Loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText - "Tell a Joke";
    jokeEl.innerText = data[0].joke;

};

btnEl.addEventListener("click", getJoke)
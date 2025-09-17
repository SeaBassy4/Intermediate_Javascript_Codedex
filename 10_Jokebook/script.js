const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = `
        <p>${data.setup}</p>
        <p><strong>${data.punchline}</strong></p>
      `;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      jokeContainer.innerHTML = `Couldn't fetch the joke.</p>`;
    });
}

getJokeBtn.addEventListener("click", fetchJoke);
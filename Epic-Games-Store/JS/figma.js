
const search = document.getElementById("search-input");
const button = document.getElementById("search-button");

function searchGames() {
    const game = search.value.trim();

    if (game !== "") {
        window.location.href = "https://byxatab.com/search/" + encodeURIComponent(game) + "/";
    }
}

button.addEventListener("click", searchGames);

search.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchGames();
    }
});

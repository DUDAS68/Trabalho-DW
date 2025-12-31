const toggleButton = document.getElementById("toggleConcerts");
const concertsDiv = document.getElementById("concerts");

toggleButton.addEventListener("click", () => {
    if (concertsDiv.style.display === "none") {
        concertsDiv.style.display = "block";
    } else {
        concertsDiv.style.display = "none";
    }
});
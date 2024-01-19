function animateBannerText(texts) {
    const bannerText = document.getElementById('bannerText');
    let currentIndex = 0;

    setInterval(() => {
        bannerText.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 3000);
}
let selectedCharacter = "";
let playerName = "";

function startGame() {
    // Get the selected character
    selectedCharacter = document.querySelector(".character:hover");
    if (!selectedCharacter) {
        alert("Please choose a character!");
        return;
    }

    // Get the player's name
    playerName = document.getElementById("characterName").value.trim();
    if (!playerName) {
        alert("Please name your character!");
        return;
    }

    // Display confetti with the player's chosen name
    displayConfetti(`You've adopted ${playerName}!`);

    // Hide character selection section and show Tamagotchi-style game section
    document.querySelector(".game-section").style.display = "none";
    document.getElementById("tamagotchiSection").style.display = "block";
}

// const displayConfetti = (message) => {
//     const confetti = document.getElementById("confetti");
//     confetti.innerText = message;
//     confetti.style.display = "block";
//     setTimeout(() => {
//         confetti.style.display = "none";
//     }, 3000);
// }

function feedMe() {
    // Implement logic for feeding the Saibāpetto
    // Update the stats bars accordingly
}

function playWithMe() {
    // Implement logic for playing with the Saibāpetto
    // Update the stats bars accordingly
}

function cuddleMe() {
    // Implement logic for cuddling with the Saibāpetto
    // Update the stats bars accordingly
}

function sendMeToWar() {
    // Implement logic for sending the Saibāpetto to war
    // Update the stats bars accordingly
}

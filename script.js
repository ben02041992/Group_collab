
function startGame() {
    document.getElementById("playGameButton").style.display = "none";
    document.querySelector("#gameContent .stats").style.display = "flex";
    document.querySelector("#gameContent .actions").style.display = "flex";
}


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
    selectedCharacter = document.querySelector(".character:hover");
    if (!selectedCharacter) {
        alert("Please choose a character!");
        return;
    }

    playerName = document.getElementById("characterName").value.trim();
    if (!playerName) {
        alert("Please name your character!");
        return;
    }

    displayConfetti(`You've adopted ${playerName}!`);

    document.querySelector(".game-section").style.display = "none";
    document.getElementById("tamagotchiSection").style.display = "block";
}

function displayConfetti(message) {
    const confetti = document.getElementById("confetti");
    confetti.innerText = message;
    confetti.style.display = "block";
    setTimeout(() => {
        confetti.style.display = "none";
    }, 3000);
}

function feedMe() {

}

function playWithMe() {
   
}

function cuddleMe() {
  
}

function sendMeToWar() {

}


let health = 100;
let happiness = 100;
let strength = 100;
let stamina = 100;

const gameOverThreshold = 0;

function updateStats(action) {
    switch (action) {
        case 'feedMe':
            stamina += 10;
            happiness += 5;
            health -= 2;
            break;
        case 'playWithMe':
            stamina -= 5;
            happiness += 10;
            break;
        
        default:
            break;
    }

    updateStatBars();

    if (health <= gameOverThreshold || happiness <= gameOverThreshold || strength <= gameOverThreshold || stamina <= gameOverThreshold) {
        showGameOverScreen();
    }
}

function updateStatBars() {
    const healthBar = document.getElementById("healthBar");
    const happinessBar = document.getElementById("happinessBar");
    const strengthBar = document.getElementById("strengthBar");
    const staminaBar = document.getElementById("staminaBar");

    healthBar.style.height = health + "px";
    happinessBar.style.height = happiness + "px";
    strengthBar.style.height = strength + "px";
    staminaBar.style.height = stamina + "px";

}

function showGameOverScreen() {
    document.getElementById("gameContent").style.display = "none";
    document.getElementById("gameOverScreen").style.display = "block";
}

function restartGame() {
    health = 100;
    happiness = 100;
    strength = 100;
    stamina = 100;

    updateStatBars();

    document.getElementById("gameOverScreen").style.display = "none";
    document.getElementById("gameContent").style.display = "flex";
}

function selectCharacter(character) {
    alert(`You selected ${character}`);
    document.getElementById
}

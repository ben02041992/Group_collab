const startBtn = document.getElementById('startBtn')
const start = document.getElementById('start')
let name = document.getElementById('name')
let character = document.getElementById('character')
let hp = document.getElementById('hp')
let happiness = document.getElementById('happiness')
let feed= document.getElementById('feed')
let stamina = document.getElementById('stamina')
let hug = document.getElementById('hug')
const character1 = document.getElementById('character1')
const character2 = document.getElementById('character2')
const character3 = document.getElementById('character3')
const character4 = document.getElementById('character4') 

//listen for button click on start on startpage


start.addEventListener('click', (click) => {
    if (click) {
        name = prompt("Please enter your name:")}
        start.animation('2s ease 0s 1 normal forwards')
    })
    
    


    // 


    
// const animateBannerText = (texts) => {
//     const bannerText = document.getElementById('bannerText');
//     let currentIndex = 0;

//     setInterval(() => {
//         bannerText.textContent = texts[currentIndex];
//         currentIndex = (currentIndex + 1) % texts.length;
//     }, 3000);
// }
// let selectedCharacter = "";
// let playerName = "";

// const startGame = () => {

//     // Get the selected character
//     selectedCharacter = document.querySelector(".character:hover");
//     if (!selectedCharacter) {
//         alert("Please choose a character!");
//         return;
//     }

//     // Get the player's name
//     playerName = document.getElementById("characterName").value.trim();
//     if (!playerName) {
//         alert("Please name your character!");
//         return;
//     }

//     // Display confetti with the player's chosen name
//     displayConfetti(`You've adopted ${playerName}!`);

//     // Hide character selection section and show Tamagotchi-style game section
//     document.querySelector(".game-section").style.display = "none";
//     document.getElementById("tamagotchiSection").style.display = "block";
// }

// const displayConfetti = (message) => {
//     const confetti = document.getElementById("confetti");
//     confetti.innerText = message;
//     confetti.style.display = "block";
//     setTimeout(() => {
//         confetti.style.display = "none";
//     }, 3000);
// }

// const feedMe = () => {
//     // Implement logic for feeding the Saibāpetto
//     // Update the stats bars accordingly
// }

// const playWithMe = () => {
//     // Implement logic for playing with the Saibāpetto
//     // Update the stats bars accordingly
// }

// const cuddleMe = () => {
//     // Implement logic for cuddling with the Saibāpetto
//     // Update the stats bars accordingly
// }

// const sendMeToWar = () => {
//     // Implement logic for sending the Saibāpetto to war
//     // Update the stats bars accordingly
// }

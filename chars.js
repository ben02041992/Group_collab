// Cat
const catSheet = document.getElementById("catSheet");
const catChar = document.getElementById("catChar")
// Troll
const trollSheet = document.getElementById("trollSheet");
const trollChar = document.getElementById("trollChar")
// Sasq
const sasqSheet = document.getElementById("sasqSheet");
const sasqChar = document.getElementById("sasqChar")
// dino
const dinoSheet = document.getElementById("dinoSheet");
const dinoChar = document.getElementById("dinoChar")

let catPositionX = -50
let catDiff = 350
const speed = 100
// ************************* Cat *************************
const catStartAnimation = (catPositionX, catWidth, catHeight, catDiff) => {
  
  animationInterval = setInterval(() => {
    catSheet.style.backgroundPosition = `-${catPositionX}px -1680px`;
    catChar.style.width = `${catWidth}px`
    catChar.style.height = `${catHeight}px`
    if (catPositionX <  2503) {
      catPositionX = catPositionX + catDiff;
    } else {
      catPositionX = 0;
    }

  }, 100);
}

catStartAnimation(-50, 330, 380, 350)

const catDead = (catPositionX, catWidth, catHeight, catDiff) => {
  
  animationInterval = setInterval(() => {
    catSheet.style.backgroundPosition = `-${catPositionX}px -1680px`;
    catChar.style.width = `${catWidth}px`
    catChar.style.height = `${catHeight}px`
    if (catPositionX <  2503) {
      catPositionX = catPositionX + catDiff;
    } else {
      catPositionX = 0;
    }

  }, 100);
}




// ************************* Troll *************************

let trollPositionX = 0
let trollDiff = 0

const trollStartAnimation = (trollPositionX, trollWidth, trollHeight, trollDiff) => {

  animationInterval = setInterval(() => {
    trollSheet.style.backgroundPosition= `-${trollPositionX}px -3160px`;
    trollChar.style.width = `${trollWidth}px`
    trollChar.style.height = `${trollHeight}px`

    if (trollPositionX <  2500) {
      trollPositionX = trollPositionX + trollDiff;
    } else {
      trollPositionX = 0;
    }

  }, speed);
}

// trollStartAnimation(-600, 500, 410, 518)


// ************************* SASQ *************************

let sasqPositionX = -220
let sasqDiff = 468

const sasqStartAnimation = (sasqPositionX, sasqWidth, sasqHeight, sasqDiff) => {

  animationInterval = setInterval(() => {
    sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -1930px`;
    sasqChar.style.width = `${sasqWidth}px`
    sasqChar.style.height = `${sasqHeight}px`
    

    if (sasqPositionX <  4000) {
      sasqPositionX = sasqPositionX + sasqDiff;
    } else {
      sasqPositionX = -220;
    }

  }, speed);
}

sasqStartAnimation(-468, 400, 450, 435)

// ************************* SASQ *************************

let dinoPositionX = 220
let dinoDiff = 0

const dinoStartAnimation = (dinoPositionX, dinoWidth, dinoHeight, dinoDiff) => {

  animationInterval = setInterval(() => {
    dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -1870px`;
    dinoChar.style.width = `${dinoWidth}px`
    dinoChar.style.height = `${dinoHeight}px`
    

    if (dinoPositionX <  758) {
      dinoPositionX = dinoPositionX + dinoDiff;
    } else {
      dinoPositionX = -390;
    }

  }, speed);
}

// dinoStartAnimation(-105, 440, 380, 489)
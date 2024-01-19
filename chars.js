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


// test
const clickTitle = document.querySelector(".title")


const speed = 100


// ************************* Cat *************************
// 3 choices start, happy or dead. Example: catStartAnimation("start")

    let catStartAnimation = (choice) => {
      if (choice === "start") {
      clearInterval(animationInterval)
      let catPositionX = 0
      let catWidth = 330
      let catHeight = 380
      let catDiff = 350

      animationInterval = setInterval(() => {
        catSheet.style.backgroundPosition = `-${catPositionX}px -1680px`
        catChar.style.width = `${catWidth}px`
        catChar.style.height = `${catHeight}px`
        if (catPositionX <  2053) {
          catPositionX = catPositionX + catDiff;
        } else {
          catPositionX = 0;
        }
        
      }, 100);
    } else if(choice === "happy") {
      clearInterval(animationInterval)
      let catPositionX = 1100
      let catWidth = 270
      let catHeight = 380
      let catDiff = 680
      animationInterval = setInterval(() => {
        catSheet.style.backgroundPosition = `-${catPositionX}px -2090px`
        catChar.style.width = `${catWidth}px`
        catChar.style.height = `${catHeight}px`
        if (catPositionX < 4200) {
          catPositionX = catPositionX + catDiff;
        } else {
          catPositionX = 1050;
        }
    
      }, 100);
    } else if(choice === "dead") {
      clearInterval(animationInterval)
      let catPositionX = 40
      let catWidth = 380
      let catHeight = 380
      let catDiff = 388
      animationInterval = setInterval(() => {
        catSheet.style.backgroundPosition = `-${catPositionX}px -1220px`
        catChar.style.width = `${catWidth}px`
        catChar.style.height = `${catHeight}px`
        if (catPositionX <  1060) {
          catPositionX = catPositionX + catDiff;
        } else {
          catPositionX = 2100;
        }
    
      }, 100);
    }
}   

// ************************* Troll *************************

const trollStartAnimation = (choice) => {
  if (choice === "start") {
    clearInterval()
    let trollPositionX  = 70;
    let trollWidth = 490;
    let trollHeight = 410;
    let trollDiff = 518;

    animationInterval = setInterval(() => {
      trollSheet.style.backgroundPosition= `-${trollPositionX}px -3160px`
      trollChar.style.width = `${trollWidth}px`
      trollChar.style.height = `${trollHeight}px`

      if (trollPositionX <  2500) {
        trollPositionX = trollPositionX + trollDiff;
      } else {
        trollPositionX = 20
      }

    }, speed);}
    else if (choice === "happy") {
      clearInterval()
      let trollPositionX  = 1500;
      let trollWidth = 495;
      let trollHeight = 410;
      let trollDiff = 500;

      animationInterval = setInterval(() => {
        trollSheet.style.backgroundPosition= `-${trollPositionX}px -2470px`
        trollChar.style.width = `${trollWidth}px`
        trollChar.style.height = `${trollHeight}px`
    
        if (trollPositionX < 3000) {
          trollPositionX = trollPositionX + trollDiff;
        } else {
          trollPositionX = -500
        }
    
      }, speed);

    } else if (choice === "dead") {
      clearInterval()
      let trollPositionX  = 120;
      let trollWidth = 560;
      let trollHeight = 410;
      let trollDiff = 600;
      animationInterval = setInterval(() => {
        trollSheet.style.backgroundPosition= `-${trollPositionX}px -1210px`;
        trollChar.style.width = `${trollWidth}px`
        trollChar.style.height = `${trollHeight}px`
    
        if (trollPositionX <  -1500) {
          trollPositionX = trollPositionX + trollDiff;
        } else {
          trollPositionX = 2430
        }
    
      }, 400);
    }
}

trollStartAnimation("happy")


// ************************* SASQ *************************

const sasqStartAnimation = (choice) => {
    if (choice === "start") {
      clearInterval()
    let sasqPositionX = 220;
    let sasqWidth  = 400;
    let sasqHeight = 450;
    let sasqDiff = 435;

    animationInterval = setInterval(() => {
      sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -1930px`
      sasqChar.style.width = `${sasqWidth}px`
      sasqChar.style.height = `${sasqHeight}px`
      

      if (sasqPositionX <  4500) {
        sasqPositionX = sasqPositionX + sasqDiff;
      } else {
        sasqPositionX = -230;
      }

    }, speed);

  } else if (choice === "happy") {
    clearInterval()
    let sasqPositionX = 280;
    let sasqWidth  = 400;
    let sasqHeight = 450;
    let sasqDiff = 435;

    animationInterval = setInterval(() => {
      sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -1360px`
      sasqChar.style.width = `${sasqWidth}px`
      sasqChar.style.height = `${sasqHeight}px`
      
  
      if (sasqPositionX < 2220) {
        sasqPositionX = sasqPositionX + sasqDiff;
      } else {
        sasqPositionX = 260;
      }
  
    }, speed);

  } else if (choice === "dead") {
    clearInterval()
    let sasqPositionX = 220;
    let sasqWidth  = 400;
    let sasqHeight = 450;
    let sasqDiff = 435;
    animationInterval = setInterval(() => {
      sasqSheet.style.backgroundPosition= `-${sasqPositionX}px -790px`
      sasqChar.style.width = `${sasqWidth}px`
      sasqChar.style.height = `${sasqHeight}px`
      
  
      if (sasqPositionX < 940) {
        sasqPositionX = sasqPositionX + sasqDiff;
      } else if(sasqPositionX > 940 && sasqPositionX === 2600) 
      {sasqPositionX = sasqPositionX + 550
      }else {
        sasqPositionX = 2950;
      }
  
    }, speed);

  }
}

// ************************* Dino *************************

const dinoStartAnimation = (choice) => {
  if (choice === "start") {
    clearInterval()
    let dinoPositionX = 105;
    let dinoWidth = 440;
    let dinoHeight = 380;
    let dinoDiff = 489;
    animationInterval = setInterval(() => {
      dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -1870px`
      dinoChar.style.width = `${dinoWidth}px`
      dinoChar.style.height = `${dinoHeight}px`
      
  
      if (dinoPositionX <  758) {
        dinoPositionX = dinoPositionX + dinoDiff;
      } else {
        dinoPositionX = -390;
      }
  
    }, speed);
  } else if (choice === "happy") {
    clearInterval()
    let dinoPositionX = 100;
    let dinoWidth = 500;
    let dinoHeight = 380;
    let dinoDiff = 450;

    animationInterval = setInterval(() => {
      dinoSheet.style.backgroundPosition = `-${dinoPositionX}px -560px`
      dinoChar.style.width = `${dinoWidth}px`
      dinoChar.style.height = `${dinoHeight}px`
      dinoChar.style.transition = '5s'
      
  
      if (dinoPositionX <  1700) {
        dinoPositionX = dinoPositionX + dinoDiff;
      }  else {
        dinoPositionX = 100;
      }
  
    }, speed);

  } else if (choice === "dead") {
    clearInterval()
    let dinoPositionX = 100;
    let dinoWidth = 520;
    let dinoHeight = 380;
    let dinoDiff = 550;
    animationInterval = setInterval(() => {
      dinoSheet.style.backgroundPosition= `-${dinoPositionX}px -1400px`
      dinoChar.style.width = `${dinoWidth}px`
      dinoChar.style.height = `${dinoHeight}px`
      
  
      if (dinoPositionX <  2000) {
        dinoPositionX = dinoPositionX + dinoDiff;
      } else {
        dinoPositionX = 2300;
      }
  
    }, speed);

  }

  
}





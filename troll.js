const feedButton = document.getElementById("feed");
const catSheet = document.getElementById("trollSheet");

console.log(catSheet)

let l = 0;




const widthOfSpriteSheet = 2503;
 
  function startAnimation() {
    let position = -50 //start position for the image
    const speed = 100; //in millisecond(ms)
    const diff = 350
  
    animationInterval = setInterval(() => {
      catSheet.style.backgroundPosition= `-${position}px -1680px`;
  
      if (position <  widthOfSpriteSheet) {
        position = position + diff;
      } else {
        position = 0;
      }

    }, speed);
  }
  

// const widthOfSpriteSheet = 1400;
 
//   function startAnimation() {
//     let position = -50 //start position for the image
//     const speed = 100; //in millisecond(ms)
//     const diff = 340
  
//     animationInterval = setInterval(() => {
//       catSheet.style.backgroundPosition= `-${position}px -1680px`;
  
//       if (position < -438) {
//         position = position + 337;

//       }else if(position < -438 && position > -688) {
//         position = position + 349;
//       } else {
//         position = 0;
//       }

//     }, speed);
//   }

startAnimation()

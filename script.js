const gameContainer = document.getElementById("game");

let maxClicks = 2;
let clickCount = 0;
let firstValue = null;
let firstEvent = null;
let resetClicks = false;
let idNum = 0;
let totalNum = 0;
const restart = document.createElement('button');
let gameScore = document.createElement('h1');
let numScore = 0;
let title = document.querySelector('#title');
let lowScore = localStorage.getItem("low-score");




restart.id = 'restart';
restart.innerText = 'Play Again';

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];



// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more



function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    newDiv.setAttribute('id', idNum.toString())
    

    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    idNum++;
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (clickCount < maxClicks && firstEvent !== event.target) {
    event.target.style.backgroundColor = event.target.classList.value;
    if(firstValue === null) {
      firstValue = event.target.classList.value;
      firstEvent = event.target;
    }
    console.log(firstEvent)
    console.log(event.target.classList.value)
    if (clickCount === 1) {
      clickCount++;
      setTimeout(() => {
        if( firstValue !== event.target.classList.value){
          console.log(firstEvent)
          firstEvent.style.backgroundColor = null;
          event.target.style.backgroundColor = null;
          firstValue = null;
          firstEvent = null;
          clickCount = 0;
        }
        else {
          firstValue = null;
          firstEvent = null;
          clickCount = 0;
        }
      }, 1000);
    } 
    clickCount++;
  }
}

function handleGifClick(event) {
  if (clickCount < maxClicks && firstEvent !== event.target.parentNode) {
    numScore++;
    gameScore.innerText = numScore;
    event.target.innerHTML = `<img src="${event.target.classList.value}">`; 
    if(firstValue === null) {
      firstValue = event.target.classList.value;
      firstEvent = event.target;
      
    }
    console.log(event.target.parentNode)
    if (clickCount === 1) {
      clickCount++;
      setTimeout(() => {
        if( firstValue !== event.target.classList.value){
          firstEvent.innerHTML= null;
          event.target.innerHTML = null;
          firstValue = null;
          firstEvent = null;
          clickCount = 0;
        }
        else {
          firstValue = null;
          firstEvent = null;
          clickCount = 0;
          totalNum += 2;
          if(totalNum === idNum) {
            header.append(restart)
            let lowScore = +localStorage.getItem("low-score") || Infinity;
          if (numScore < lowScore) {
             gameScore.innerText += " - NEW BEST SCORE!!";
            localStorage.setItem("low-score", numScore);
          }
          }
        }
      }, 1000);
    } 
    clickCount++;
  }
}









let GIFS = [
  'https://media.giphy.com/media/26tP3M3i03hoIYL6M/giphy.gif',
  'https://media.giphy.com/media/gj0QdZ9FgqGhOBNlFS/giphy.gif',
  'https://media.giphy.com/media/jwKC0qlOoXmcLDB4vC/giphy.gif',
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif',
  'https://media.giphy.com/media/9Ji1s0nTBLlKQEhpLu/giphy.gif',
  'https://media.giphy.com/media/110F1JFzWKtiA8/giphy.gif',
  'https://media.giphy.com/media/S4H2ZREgH8c2EG6TmV/giphy.gif',
  'https://media.giphy.com/media/9SIDvb3XIICOqN4ydo/giphy.gif',

]

function randomImageArr(arr, num) {
  let newArr = arr.slice(0, num);
  newArr = newArr.concat(newArr);

  let counter = newArr.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = newArr[counter];
    newArr[counter] = newArr[index];
    newArr[index] = temp;
  }

  return newArr;
}


let shuffledGifs = randomImageArr(GIFS, (Math.floor(Math.random()*9))+1);

function createDivsForGIFS(gifArray) {
  for (let gif of gifArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(gif);


    newDiv.setAttribute('id', idNum.toString())

    newDiv.addEventListener("click", handleGifClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    idNum++;
    console.log(idNum);
  }
}

///////

function removeAndCreateGIFS() {
  
}


let start = document.querySelector('#start');
let header = start.parentNode;

start.addEventListener('click', function(e) {
  createDivsForGIFS(shuffledGifs);
  // createDivsForColors(shuffledColors);
  header.removeChild(start);
  header.removeChild(title);
  gameScore.innerText = numScore;
  header.append(gameScore);
})

restart.addEventListener('click', function(e) {
  gameContainer.innerHTML = '';
  shuffledGifs = randomImageArr(GIFS, (Math.floor(Math.random()*9))+1);
  createDivsForGIFS(shuffledGifs);
  document.querySelector('#restart').remove();
  numScore = 0;
  gameScore.innerText = numScore;
})




// when the DOM loads
// createDivsForColors(shuffledColors);












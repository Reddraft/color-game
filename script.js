var numSquares = 6;
var colors = [];
var pickedColor;


var h1 = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var difficultyButtons = document.querySelectorAll('.difficulty')
var squares = document.querySelectorAll('.square');


/***********************************************
SETUP DIFFICULTY BUTTON LISTENERS FUNCTION
***********************************************/

function setupDifficultyButtons() {
  for (var i = 0; i < difficultyButtons.length; i++) {
    //add click event to both hard and easy mode buttons
    difficultyButtons[i].addEventListener('click', function() {
      //remove selected class from both hard and easy mode buttons
      difficultyButtons[0].classList.remove('selected');
      difficultyButtons[1].classList.remove('selected');
      //add selected class to the clicked button
      this.classList.add('selected');
      //figure out how many squares to show
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}


/***********************************************
SETUP SQUARES LISTENERS FUNCTION
***********************************************/

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to al squares
    squares[i].addEventListener('click', function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Got It!';
        messageDisplay.style.color = clickedColor;
        resetButton.textContent = 'play Again';
        changeSquaresColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

/***********************************************
RESET GAME FUNCTION
***********************************************/

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickRandomColor();
  //display the pickedColor in the header
  colorDisplay.textContent = pickedColor;
  //reset header background back to its default color
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.style.color = 'steelblue';
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors"
  //change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //if there is a color then change the color of those 3 squares
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    } else {
      // if there is not color after the third index then hide the las 3 squares
      squares[i].style.display = 'none';
    }
  }
}

/***********************************************
ADD RANDOM COLORS TO THE COLORS ARRAY FUNCTION
***********************************************/

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get a random rgb color and push into the arr
    arr.push(oneRandomColor());
  }
  //return array
  return arr;
}

/***********************************************
GET A RANDOM RGB COLOR FUNCTION
***********************************************/

function oneRandomColor() {
    //pick a 'red' from 0 to 255
    var r = Math.floor(Math.random() * 256 );
    //pick a 'green' from 0 to 255
    var g = Math.floor(Math.random() * 256 );
    //pick a 'blue' from 0 to 255
    var b = Math.floor(Math.random() * 256 );
    //return and string in the format 'rgb(200, 40, 30)'
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

/***********************************************
PICK A RANDOM COLOR FROM THE COLORS ARRAY FUNCTION
***********************************************/

function pickRandomColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


/***********************************************
CHANGE ALL SQUARES TO MATCH THE PICKED COLOR FUNCTION
***********************************************/

function changeSquaresColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}


/***********************************************
INITIALIZE GAME FUNCTION
***********************************************/

function init() {

  //---- ADD CLICK EVENTS TO BOTH HARD AND EASY MODE BUTTONS --//
  setupDifficultyButtons();
  //---- ADD CLICK EVENTS TO PLAY NEW GAME BUTTON --//
  resetButton.addEventListener('click', function() {
    reset();
  });
  //---- ADD CLICK EVENTS TO ALL SQUARES --//
  setupSquares();
  //---- RESET THE GAME TO START FROM ZERO --//
  reset();

}

/***********************************************
INITIALIZE APP
***********************************************/
init();

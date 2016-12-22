var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll('.square');
var pickedColor = pickRandomColor();
var h1 = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');


colorDisplay.textContent = pickedColor;


easyButton.addEventListener('click', function() {
  //add selected class to the easyButton an remove it from hardButton
  this.classList.add('selected');
  hardButton.classList.remove('selected');
  numSquares = 3;
  //generate (3) new random colors
  colors = generateRandomColors(numSquares);
  //pick a new color
  pickedColor = pickRandomColor();
  //display the pickedColor in the header
  colorDisplay.textContent = pickedColor;
  //loop through all 6 squares
  for (var i = 0; i < squares.length; i++) {
    //check if there is a color in those 3 indexes
    if (colors[i]) {
      //if there is a color then change the color of those 3 squares
      squares[i].style.backgroundColor = colors[i];
    } else {
      // if there is not color after the third index then hide the las 3 squares
      squares[i].style.display = 'none';
    }
  }
});


hardButton.addEventListener('click', function() {
  //add selected class to the HardButton an remove it from easyButton
  this.classList.add('selected');
  easyButton.classList.remove('selected');
  numSquares = 6;
  //generate (6) new random colors
  colors = generateRandomColors(numSquares);
  //pick a new color
  pickedColor = pickRandomColor();
  //display the pickedColor in the header
  colorDisplay.textContent = pickedColor;
  //loop through all 6 squares
  for (var i = 0; i < squares.length; i++) {
      //if there is a color then change the color of those 3 squares
      squares[i].style.backgroundColor = colors[i];
      // if there is not color after the third index then hide the las 3 squares
      squares[i].style.display = 'block';
  }
});


resetButton.addEventListener('click', function() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickRandomColor();
  //display the pickedColor in the header
  colorDisplay.textContent = pickedColor;
  //reset header background back to its default color
  h1.style.backgroundColor = '#232323';
  //change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
  }
});


for (var i = 0; i < squares.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to al sqquares
  squares[i].addEventListener('click', function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      resetButton.textContent = 'play Again';
      changeSquaresColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}




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


function pickRandomColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeSquaresColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

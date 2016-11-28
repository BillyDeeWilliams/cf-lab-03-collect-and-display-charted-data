'use strict';
var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg'];
var imageObjects = [];
var offLimits = [];


for (var i = 0 ; i < imagePaths.length; i++ ){
  var newProductObject = new ImageObject (imagePaths[i]);
  imageObjects.push(newProductObject);
}
console.log(imageObjects);


var displayArea = document.getElementById('imageArea'); //select dom node, reffer to it with a var
displayArea.addEventListener('click', clickHandler); //add listener to  specific element dom node

function clickHandler(event){
  changePic();
}

function ImageObject (path){
  this.path = path;
//  this.name = path - extension
  this.clickCount = 0;
  this.displayCount = 0;
}

function changePic (){
  var imageOne = document.getElementById('imageOne');
  var randomIndex =  randomNumber();

  while ( displayIndex === randomIndex){
    randomIndex = randomNumber(); //if the new number is the same as the old index, try again
  }
  displayIndex = randomIndex; //once they are for sure different update index
  imageOne.src = 'assets/' + imagePaths[randomIndex];

  function randomNumber () {
    return( Math.floor(Math.random() * imagePaths.length));
  }
}

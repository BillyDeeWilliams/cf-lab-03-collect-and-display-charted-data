'use strict';
var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif','water-can.jpg', 'wine-glass.jpg'];
var imageObjects = [];
var offLimits = [];
var inUse = [0,0,0];

for (var i = 0 ; i < imagePaths.length; i++ ){ // populate objects array
  var newProductObject = new ImageObject (imagePaths[i]); //for every filepath in the paths array, create a product objects that has a propety path with a value equal to that path
  imageObjects.push(newProductObject); //add each new object into the object array
}
console.log(imageObjects); //log the objects array


var displayArea = document.getElementById('imageArea'); //select dom node, reffer to it with a var
displayArea.addEventListener('click', clickHandler); //add listener to  specific element dom node. now whenver the click even happens
 // on any element within the node that displayArea is poinint at, a click even should be fired from that element.

function ImageObject (path){
  this.path = path;
//  this.name = path - extension
  this.clickCount = 0;
  this.displayCount = 0;
}

//collect existing data
function collect(id) {
  var thisImage = document.getElementById(id); //point at first image
  var targetString = thisImage.src;
  var targetPath = targetString.split('assets')[1];

  for (var j = 0 ; j < imageObjects.length; j++){ // for ever object we have

    //console.log(targetPath, '/' + imageObjects[j].path);
    if ( targetPath === '/' + imageObjects[j].path){ //check if the src of firt image matches any of our objects' path values
      imageObjects[j].displayCount ++; //when coresponding object located, itterate its display counter
      if (offLimits.length === 6 ){ //if there are already 6 elements
        offLimits.shift(1); // drop the first, before...
      }
      offLimits.push(j); // we add the index to the off limits list (luckily both arrays have coresponding index)
    }
  }
}
function collectAll (){
  collect('imageOne');
  collect('imageTwo');
  collect('imageThree');
}
collectAll();
// three objects should now each have a display count of one and the off limits array should have three values
//each equivilent to the index of on of the images displayed
console.log('off limits: ' + offLimits);

function clickHandler(event){
  addClick();
  changePics();
  collectAll();
}

function addClick(){
  var img = event.target;
  var imgscr = img.src;
  var imgPath = imgscr.split('assets')[1];

  for (var c = 0 ; c < imageObjects.length; c++){ // for ever object we have

    if ( imgPath === '/' + imageObjects[c].path){ //check if the src of img matches any of our objects' path values
      imageObjects[c].clickCount ++; }//when coresponding object located, itterate its clickCount
// identify image elemetn firing event
// get tthat img src
// check object list sorces for a match
// itterate click count for identified object.
  }
}

function changePics (){
  var indeces = genrateRandIndeces();

  var pic = document.getElementById('imageOne');
  var randomIndex1 =  indeces[0]; //update random number to avoid off limit arrray values
  pic.src = 'assets/' + imagePaths[randomIndex1]; //change imageOne


  var pic2 = document.getElementById('imageTwo');
  var randomIndex2 = indeces[1];
  pic2.src = 'assets/' + imagePaths[randomIndex2]; //change imageOne


  var pic3 = document.getElementById('imageThree');
  var randomIndex3 = indeces[2];
  pic3.src = 'assets/' + imagePaths[randomIndex3]; //change imageOne

}

function randomNumber () {
  var rand;
  rand = Math.floor(Math.random() * imagePaths.length);
  if (rand === offLimits[0] || offLimits [1] || offLimits [2] || offLimits[3] || offLimits[4] || offLimits[5] ){
    rand = Math.floor(Math.random() * imagePaths.length);
  }
  return(rand);
}

function genrateRandIndeces () {
  var randomIndex1a;
  var randomIndex2a;
  var randomIndex3a;

  randomIndex1a = randomNumber();
  randomIndex2a = randomNumber();
  randomIndex3a = randomNumber();

  while (randomIndex2a === randomIndex1a){
    randomIndex2a = randomNumber();
  }
  while (randomIndex3a === randomIndex2a || randomIndex3a === randomIndex1a){
    randomIndex3a = randomNumber();
  }
  return ([randomIndex1a, randomIndex2a, randomIndex3a]);
}

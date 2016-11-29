'use strict';
var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg'];
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
  changePics();
  collectAll();
}

function changePics (){
  var pic = document.getElementById('imageOne');
  var randomIndex1 =  randomNumber(); //update random number to avoid off limit arrray values
  pic.src = 'assets/' + imagePaths[randomIndex1]; //change imageOne
  inUse[0] = randomIndex1;

  var pic2 = document.getElementById('imageTwo');
  var randomIndex2 = randomNumber();
  pic2.src = 'assets/' + imagePaths[randomIndex2]; //change imageOne
  inUse[1] = randomIndex2;

  var pic3 = document.getElementById('imageThree');
  var randomIndex3 = randomNumber();
  pic3.src = 'assets/' + imagePaths[randomIndex3]; //change imageOne
  inUse[2] = randomIndex3;
}

function randomNumber () {
  var rand;
  rand = Math.floor(Math.random() * imagePaths.length);
  if (rand === offLimits[0] || offLimits [1] || offLimits [2] || offLimits[3] || offLimits[4] || offLimits[5] || inuse[0] || inUse[1] || inUse[2]){
    rand = Math.floor(Math.random() * imagePaths.length);
  }
  return(rand);
}

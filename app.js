'use strict';
var imagePaths = ['bag.jpg', 'banana.jpg', 'bathroom.jpg'];
var imageObjects = [];
var displayIndex = 0;


for (var i = 0 ; i < imagePaths.length; i++ ){
  var newProductObject = new ImageObject (imagePaths[i]);
  imageObjects.push(newProductObject);
}
console.log(imageObjects);



function ImageObject (path){
  this.path = path;
  this.clickCount = 0;
  this.displayCount = 0;
}

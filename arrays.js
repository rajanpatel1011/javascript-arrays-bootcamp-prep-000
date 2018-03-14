var ingredient1 ="bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var gailledCheeseIngredients=[
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
  ]
  var tomatoSauceIngredients = [
    'tomato',
    'garlic',
    'olive oil',
    'basil',
    'oregano'
    ]
    var chocolateBars = [
      'snicker',
      'hundred grand',
      'kitkat',
      'skittles']
      
      function addElementToBeginningOfArray(array, element){
         array.unshift(element);
        return array;
      }
      function destructivelyAddElementToBeginningOfArray(array,element)
      {
        var newArray = [];
        newArray=array;
         newArray.unshift(element)
        return newArray;
        
      }
      function addElementToEndOfArray(array,element){
        
        array.push(element);
        return array;
      }
      function destructivelyAddElementToEndOfArray(array,element){
        var newArray = array;
        array.push(element);
        return newArray
      }
      function accessElementInArray(array,index){
        var element = array[index];
        return element;
      }
      function destructivelyRemoveElementFromBeginningOfArray(array){
         array.shift();
         return array;
      }
      function removeElementFromBeginningOfArray(array){
        array = array.slice(1);
        return array();
      }
      function destructivelyRemoveElementFromEndOfArray(array){
        array = array.slice(-1)
        return array;
      }
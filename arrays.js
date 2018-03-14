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
      
      function addElementToBeginningOfArray(array,element){
        return array.unshift(element)
      }
      function destructivelyAddElementToBeginningOfArray(array,element)
      {
        var newArray = [];
        newArray=array;
         newArray.unshift(element)
        return newArray;
        
      }
      function addElementToEndOfArray(array,element){
        
        return array.push(element);
      }
      function destructivelyAddElementToEndOfArray(array,element){
        var newArray = array;
        array.push(element);
        return newArray
      }
      function accessElemenetInArray(array,index){
        return array[index];
      }
      function destructivelyRemoveElementFromBeginningOfArray(array){
        return array.shift();
      }
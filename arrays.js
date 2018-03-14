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
        chocolateBars.unnshift(array);
        return chocolateBars;
      }
      function destructivelyAddElementToBeginningOfArray(array,element)
      {
        var newArray = [];
        newArray = chocolateBars;
        newArray[element-1] = array;
        return newArray;
        
      }
var test_array1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_array2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_array3 = [-6, 23, 10, 0, -22, 52, 86, 2];

//Exercise 1: Create a fuction which multiplies even numbers with 3 and odd with 4.

function multiplyEvenAndOdds(array) {
  var newArr = [];
  for(i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      newArr.push(array[i] * 3);
    }
    else {
      newArr.push(array[i] * 4);
    }
  }
  return newArr;
}

console.log(multiplyEvenAndOdds(test_array1));
console.log(multiplyEvenAndOdds(test_array2));
console.log(multiplyEvenAndOdds(test_array3));

//Exercise 2: How many elements of an array are greater than the limit number?
// Function returns a number.
function getNumberOfElementsGreaterThan(array, limit) {
  var greaterThan = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i] > limit) {
      greaterThan += 1;
    }
  }
  return greaterThan;
}

console.log(getNumberOfElementsGreaterThan(test_array1, 5));
console.log(getNumberOfElementsGreaterThan(test_array2, 47));
console.log(getNumberOfElementsGreaterThan(test_array3, 3));


// Exercise 3: If the third argument is true, make a new array from elements of the first array which are greater than or equal to the limit.
//If the third element is false, make a new array from the elements which are less than the limit. Function returns an array.

function filterOutElements(array, limit, direction) {
  var newArr = [];
  for(var i = 0; i < array.length; i++) {
    if(direction === true) {
      if(array[i] >= limit) {
        newArr.push(array[i]);
      }
    }
    else if(direction === false) {
      if (array[i] < limit) {
        newArr.push(array[i]);
      }
    }
  }
  return newArr;
}
console.log(filterOutElements(test_array1, 5, true));
console.log(filterOutElements(test_array1, 7, false));

console.log(filterOutElements(test_array2, 47, false));
console.log(filterOutElements(test_array2, 47, true));

console.log(filterOutElements(test_array3, 1, true));
console.log(filterOutElements(test_array3, 5, false));
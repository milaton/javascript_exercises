//Exercise 1: Count until 100
var until100 = [];
for (var i = 1; i<=100; i++) {
	until100.push(i);
}
console.log(until100);

 //Exercise 2: Find the biggest element of the array and write it in the console.
var array1 = [23, 43, -8, 77, 0, 23, 15];
var holder = 0;
for (var i = 0; i<array1.length; i++) {
   if (holder < array1[i]) {
      holder = array1[i];
     }
  
}
console.log("The biggest value in the array is " + holder);

//Exercise 3: Add each number to itself and write it in a new array.
var arrayForSum = [7, 15, 45, 78, 20, 9];
var newArray = [];
for (var i = 0; i < arrayForSum.length; i++) {
	newArray[i] = newArray[i] * 2;
}
console.log(newArray);

//Exercise 4: Put all even elements into one array and odd into another.          
var someArray = [16, 23, 3, 78, 9, 14, 17];
var evenArr = [];
var oddArr = [];
for (var i = 0; i <someArray.length; i++) {
	if (someArray[i] % 2 == 0) {
		evenArr.push(someArray[i]);
	}
	else {
		oddArr.push(someArray[i]);
	}
}
console.log(evenArr);
console.log(oddArr);

//Exercise 5: Prices of the products are in array "prices". 
//For prices less than 50 add tax 18 %, and for the rest 8%.
//Calculate the sum and their tax.

var prices = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var tax = [];
var total = 0;
for(i = 0; i<prices.length; i++) {
  if (prices[i] < 50) {
  tax.push(prices[i]*18/100+prices[i]);
    total += tax[i];
}
else {
  tax.push(prices[i]*8/100+prices[i]);
  total += tax[i];
}
}

console.log(tax);
console.log(total);

//Check if the word is a palindrome.
var checkPalindrome ="";
function isItPalindrome(word) {
  for(var i = word.length - 1; i>=0; i--) {
    checkPalindrome += word[i];
  }

  if (checkPalindrome == word) {
    console.log(checkPalindrome + " is a palindrome.");
  }
  else {
    console.log(word + " is not a palindrome.");
  }
}
isItPalindrome("kilo");

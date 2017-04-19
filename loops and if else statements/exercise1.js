//Exercise 1: For each number from 1 to 10 write if it is even or odd.

// for (var i = 1; i<=10; i++)
// {
// 	if(i % 2 == 0) {
// document.write(i + " is even." + "</br>");
// 	}
// 	else {
// 		document.write(i + " is odd." + "</br>");
// 	}
// }

//Exercise 2: Write the sum of adjacent numbers.
function sumAdjacentNumbersFixed(number) {
	if (typeof number == "number" && number > 0 && number % 1 ===0) {
		var count = 0;
		for (i = 0; i <=0; i++) {
			count+=i;
		}
		return count;
	}
	return "Enter a positive number, please.";
}
console.log("The sum is " + sumAdjacentNumbersFixed(4));


//Exercise 3: Write the sum of adjacent numbers, let the user choose a number to start.
function sumAdjacents() {
	var n = Number(prompt("I'll give you a sum of adjacent numbers (e.g. You give me 3, I'll give you: 3 + 2 + 1 = 6). Type in one number.").trim());
	var count = 0;
	for (var i = 0; i<=n; i++) {
		count += i;
	}
	alert("The sum of adjacent numbers is " + count + ".");
}
sumAdjacents();

//Exercise 4: Multiplication of adjacent numbers
function multiplyAdjacents() {
	var n = Number(prompt("I'll calculate factorial (e.g. You give me 5, I'll give you: 1*2*3*4*5 = 120). Type in one number.").trim());
	var count = 1;
	for (var i = 1; i<=n; i++) {
	count = count * i;

	}
	alert("Factorial is" + count + ".");
}
multiplyAdjacents();

//Exercise 4: Calculate how many pieces of something we can buy with the money we have.
function budgetCalc() 
{
	var x = Number(prompt("Say you want to spend some money (I have no idea why you want to do that), type in how much you want to spend."). trim());
	var y = Number(prompt("How much does the thing you want to buy cost?").trim());
	alert("You can buy the product " + x / y + " times.");
}
budgetCalc();
//budgetCalc sa casa
//function kolikoKomada(stanje, cena) {
// 	return Math.floor(stanje/cena);
// }
// var rezultat = kolikoKomada(325, 14);
// document.write(rezultat);

//Exercise 5: Calculate the sum, but let the user type in min and max number.
function sumMinMax() {
	var x = Number(prompt("Type in a smaller number."). trim());
	var y = Number(prompt("Type in a bigger number.").trim());
	var count = 0;
	if(x < y) {
		for(var i = x; i<=y; i++) {
			count+=i;
		}
		alert(count);
	}
	
	else {
			alert("The first number should be smaller than the second number.");
	}
}

sumMinMax();

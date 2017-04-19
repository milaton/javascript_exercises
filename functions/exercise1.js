//Exercise 1: In an array, substitute a value with another value.

  function substituteElement(startingArray, valueForSubstitute, newValue)
{
  for(i = 0; i < startingArray.length; i++) {
    if(valueForSubstitute == startingArray[i]) {
     startingArray[i] = newValue;
    }
  }
  return startingArray;
}

console.log(substituteElement([1, 2, 3, 4, 5], 1, 14));

//Exercise 2: Check if there are two same elements in an array.
function sameElement(array) 
{
  for(i = 0; i<array.length-1; i++)
    {
     
      for(j = i+1; j<array.length; j++)
      {
        if(array[j] == array[i])
          {
            return true;
          }
   
      }
       return false;  
     }
}
console.log(sameElement([1,2,3,5]));

//Exercise 3: We have two objects and we know their weights. We know what is the max weight we can carry.
//Check if you can carry any of the weights or both. 
function carryWeight(weight1, weight2, maxWeight)
{
  if(weight1 + weight2 <= maxWeight)
    {
      console.log("We can carry both objects. We are The Mountain.");
    }
  else if(weight1 > maxWeight && weight2 > maxWeight)
    {
      console.log("We cannot carry any of the objects, let's eat some cake.");
    }
  else if(weight1 <= maxWeight && weight2 > maxWeight)
    {
      console.log("We can carry object 1.");
    }
  else if(weight1 > maxWeight && weight2 <= maxWeight)
    {
      console.log("We can carry object 2.");
    }
  else if(weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight)
    {
      console.log("We can choose which object to carry, but we cannot carry both.");
    }
 
}
carryWeight(50, 51, 100);
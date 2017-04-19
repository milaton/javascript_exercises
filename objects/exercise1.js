var testObject = {
  title: "Startit kurs pravljenja sajtova",
  durationWeeks: 33,
  teacher: {
    name: "Petar",
    lastName: "Popovic"
  },
  marks: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
  organisation: "Startit",
  courseOn: true
};

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

//Exercise 1: Write a function that will write marks in an array in the following way "5/10".
function marksOutOfMax(testObject) {
  var newArr = [];
  for (var i = 0; i <= testObject.marks.length - 1; i++) {
    newArr.push(testObject.marks[i] + "/10");
  }
  console.log(newArr);
}

marksOutOfMax(testObject);


// Exercise 2: Write a function that will show how many times each grade was given. Write it in an array, each result should be one object.
function countMarks(testObject) 
{
  var newArr = [];
  var count;
  
  for(var i = 1; i <= 10; i++)
  {
    count = 0;
    for (var j = 0; j < testObject.marks.length; j++) {
      
      if (i == testObject.marks[j]) {
        count++;
      }
    }
    newArr.push({['rate_'+ i]: count});
  }
  console.log(newArr);
}
countMarks(testObject);

//Exercise 3: Calculate an average mark.
function averageMark(testObject){
  var average = 0;
  for(var i = 0; i < testObject.marks.length; i++){
    average += testObject.marks[i];
  }
  return average / testObject.marks.length;
}

averageMark(testObject);

//Exercise 4: How many years of experience do all people have in total?
function totalExperience(data){
    var count = 0;
    for(var i = 0; i < data.length; i++){
        count += data[i].yearsExperience;
    }
    return count;
}

totalExperience(people);

//Exercise 5: Calculate years of experience in each department, e.g. Engineering: 20, IT: 10 etc.
function departmentExperience(data){
  var expYears = {
      IT: 0,
      Engineering: 0,
      Management: 0
    };
  for(var i = 0; i < data.length; i++){
    if(data[i].department == 'IT'){
      expYears.IT += data[i].yearsExperience;
    }
    else if(data[i].department == 'Engineering'){
      expYears.Engineering += data[i].yearsExperience;
    }
    else{
      expYears.Management += data[i].yearsExperience;
    }
  }
  console.log(expYears);
}
departmentExperience(people);

//Exercise 6: Make a new object which contains a number of employees in each department.
function peopleInTotal(argument) {
  var numberDepartment = {
      IT: 0,
      Engineering: 0,
      Management: 0
    };
    for(var i = 0; i < argument.length; i++) {
      if(argument[i].department == "IT") {
        numberDepartment.IT += 1;
      }
      else if(argument[i].department == "Management"){
        numberDepartment.Management += 1;
      }
      else {
        numberDepartment.Engineering += 1;
      }
      
    }
  console.log(numberDepartment);
}
peopleInTotal(people);

//Exercise 7: Make a new object which contains employees classified according to their experience. 
function classExperience(argument) {
  var expLevel = {
    amateur: [],
    newbie: [],
    expert: [],
    pro: []
  };

  for(var i = 0; i < argument.length; i++) {
    if(argument[i].yearsExperience <= 2) {
      expLevel.newbie.push(argument[i].name);
    }
    else if(argument[i].yearsExperience <=5) {
      expLevel.amateur.push(argument[i].name);
    }
    else if(argument[i].yearsExperience <= 10) {
      expLevel.expert.push(argument[i].name);
    }
    else if(argument[i].yearsExperience >= 10) {
      expLevel.pro.push(argument[i].name);
    }
  }
  console.log(expLevel);
 }

 classExperience(people);

//Exercise 8: Classify employees according to their experience and return an object which contains a number of employees with same level experience.
 function employeesAccordingToExperience(argument) {
  var experienceLevel = {
    amateur: 0,
    newbie: 0,
    expert: 0,
    pro: 0
  };

  for(var i = 0; i < argument.length; i++) {
    if(argument[i].yearsExperience <= 2) {
      experienceLevel.newbie += 1;
    }
    else if(argument[i].yearsExperience <=5) {
      experienceLevel.amateur += 1;
    }
    else if(argument[i].yearsExperience <= 10) {
      experienceLevel.expert += 1;
    }
    else if(argument[i].yearsExperience >= 10) {
      experienceLevel.pro += 1;
    }
  }
  console.log(experienceLevel);
 }

 employeesAccordingToExperience(people);

//Exercise 9: Get the names of the employees.
function employeesNames(argument) {
  var employed = [];

  for(i = 0; i < argument.length; i++) {
    employed.push(argument[i].name);
  }
console.log(employed);
}
employeesNames(people);

//Exercise 10: How much is the grade greater than the limit number?
function getNumberOfGradesGreaterThan(person, limit) {
  var count = 0;
  for(i = 0; i < person.marks.length; i++) {
    if(person.marks[i] > limit) {
        count += 1;
    }
  }
  return count;
}

console.log("Grades greater than given number:");
console.log(getNumberOfGradesGreaterThan(testObject, 5));
console.log(getNumberOfGradesGreaterThan(testObject, 47));
console.log(getNumberOfGradesGreaterThan(testObject, 3));


//Exercise 11: New array is made of putting even nnumbers at the beginning of an array and odd at the end. Fuction returns an array. 

function reorderGrades(grades) {
  var evenNum = [];
  var oddNum = [];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] % 2 === 0) {
        evenNum.push(grades[i]);
    }
    else if(grades[i] % 2 == 1 ){
        oddNum.push(grades[i]);
    }
    }
    return evenNum.concat(oddNum);
}

console.log("Reordered array:");
console.log(reorderGrades(testObject.marks));

// Exercise 12: Min grade of the person.
function getMinGrade(person) {
    var count = person.marks[0];
    for(i = 0; i < person.marks.length; i++) {
    
            if(person.marks[i] < count) {
               count = person.marks[i];
            }
     
    }
    return count;
}

console.log("Get Min Grade:");
console.log(getMinGrade(testObject));


// Exercise 13: Max grade of the person.

function getMaxGrade(grades) {
  var count = grades[0];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] > count) {
      count = grades[i];
    }
  }
  return count;
}


console.log("Get Max Grade:");
console.log(getMaxGrade(testObject.marks));


// Exercise 14: New array is a group of even marks of a person.
function getArrayOfEvenGrades(person) {
  var newArr = [];
  for(i = 0; i < person.marks.length; i++) {
    if(person.marks[i] % 2 === 0) {
      if(person.marks[i] === 0) {
        continue;
      }
        newArr.push(person.marks[i]);
    }
  }
  return newArr;
}

console.log("Array of Even Grades:");
console.log(getArrayOfEvenGrades(testObject));

// Exercise 15: New array returns odd grades.
function getArrayOfOddGrades(grades) {
var newArr = [];
  for(i = 0; i < grades.length; i++) {
    if(grades[i] % 2 == 1) {
        newArr.push(grades[i]);
    }
  }
  return newArr;
}

console.log("Array of Odd Grades:");
console.log(getArrayOfOddGrades(testObject.marks));

// Exercise 16: Sum of all grades, function returns a number.
function getSumOfGrades(grades) {
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
      sum += grades[i];
  }
  return sum;
}

console.log("Sum of elements:");
console.log(getSumOfGrades(testObject.marks));

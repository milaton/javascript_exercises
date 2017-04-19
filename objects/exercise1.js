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
//Convert a Boolean to a String

function booleanToString(b){
    if(b===true){
      return "true"
    }
    else{
      return "false"
    }
  }
  
  //P A boolean
  //R the string version of that boolean
  //E true -> "true"
  //P if statement to return string

  //5 without numbers !!

  //Student's Final Grade

  function unusualFive() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    return arr.length;
  }
  
  function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10){
      return 100
    }
    else if(exam > 75 && projects >= 5){
      return 90   
    }
    else if(exam > 50 && projects >= 2){
      return 75   
    }
    else{
      return 0
    }
  }
  
  //P exam grade and projects
  //R final grade
  //E 100, 12 -> 100
  //P if statements to check two variables to see if they match the cases

  //Reverse List Order

  function reverseList(list) {
    let newArray = [];
    for (let i = list.length - 1; i >= 0; i--) {
      newArray.push(list[i]);
    }
    return newArray;
  }
  //P an array
  //R the same array but backwards
  //E [1,2,3] -> [3,2,1]
  //P create new variable with empty array and push starting from the end of the array


  //Square(n) Sum

  function squareSum(numbers){
    let temporaryValue = 0;
    let sum = 0;
    
    for(i in numbers){
      temporaryValue = numbers[i]**2;
      sum += temporaryValue;
    }
    
    return sum
  }
  //P an array of numbers
  //R sum of squares of each number in array
  //E 1, 2 -> 5
  //P loop through array numbers each time squaring and adding to a sum

  //Testing 1-2-3
  var number=function(array){
    let count = 1;
    
    for (let i in array){
      let countToString = String(count);
      array[i] = countToString.concat(": ", array[i]);
      count += 1;
    }
    
    return array
  }
  //P an array of strings
  //R numbered return for each string value in the array
  //E ["a", "b", "c"]) -> ["1: a", "2: b", "3: c"]
  //P 1. we need a variable to change the number for each string (1, 2, 3)
  //  2. inside for loop we then need to combine the strings (n: -> a, b, c)
  //  3. return new array

  //Training JS #1: create your first JS function and print "Hello World!"

  function helloWorld(){
    let str = "Hello World!";
    console.log(str);
  }
  
  //Sum Mixed Array

  function sumMix(x){
    let sum = 0;
    
    for(let i in x){
      let converted = Number(x[i]);
      sum += converted;
    }
    
    return sum
  }
  
  //P array with mix of integers and strings
  //R the sum of the all values no matter if string or array
  //E [9, 3, '7', '3'] -> 22
  //P loop through array, convert and add to sum

  //Convert a string to an array

  function stringToArray(string){

  let newArray = [];
  let index = 0
  let temporaryString = ""
  
  while(index < string.length){
    
    if(string[index] === " "){
      newArray.push(temporaryString);
      temporaryString = "";
    }
    else{
      temporaryString += string[index];
    }
    
    index += 1;
  }
  
  if (temporaryString) {
    newArray.push(temporaryString);
  }

  return newArray
}

//P string
//R Array with each word seperated
//E "Robin Singh" ==> ["Robin", "Singh"]
//P 1.create array,
//  2.loop to go through string inputted,
//  3.each time we reach space we end that

//String repeat

function repeatStr (n, s) {
  return s.repeat(n);
}

//P accepts an integer and a string
//R the string repeated n times
//E hi * 3 => hi, hi, hi
//P repeat it n times

//Even or Odd
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

//P number
//R even or odd
//E 4 is even and 5 is odd
//P if i divide by two and the remainder is not 0 then its odd

//Find the next perfect square!

function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 == 0){
    let sqrtAnswer = Math.sqrt(sq);
    return (sqrtAnswer + 1)**2;
  }
  else{
    return -1;
  }
}

//P a number (either perfect square or not)
//R next perfect square or -1 if its not a perfect squared entered
//E 121 -> 144
//P 1. if statement to check if its a perfect square
//  2. the way to find out the next, you take the square root answer
//  3. square that and return it

//Beginner Series #2 Clock

function past(h, m, s){
  return (h*3600000) + (m*60000) + (s*1000);
}
//P h for hours, m for minutes, and s for seconds
//R time since midnight in miliseconds
//E 1 second -> 1000 miliseconds, 1 minute is -> 60000 miliseconds, 1 hour is 3,600,000
//P multiply and add to a miliseconds variable and output that

//List Filtering

function filter_list(l) {
  let newArray = [];
  
  for(let i in l){
    if((typeof l[i]) === "number")
      newArray.push(l[i]);
  }
  
  return newArray
}
//P array
//R same string without strings
//E [1,2,'a','b']) -> [1,2]
//P 1. loop through array
//  2. check its data type
//  3. if integer add to a new array
//  4. return array at the end
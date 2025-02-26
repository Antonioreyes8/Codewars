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

//Returning Strings

function greet(name){
  return "Hello, " + name + " how are you doing today?"
}

//P name
//R Hello, <name> how are you doing today?
//E "Ryan", "Hello, Ryan how are you doing today?"
//P Return string with name variable between

//Regex validate PIN code

function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) return false;
  
  for (let i in pin) {
    if (pin[i] < '0' || pin[i] > '9') return false;
  }
  
  return true
  
}

//P a pin has to be 4 or 6 numbers
//R true or false
//E 1 --> false, 2222 --> true, abcd --> false
//P 1. check the length of the string
//  2. loop through string char checking each individual making sure its between 0 and 9 ASCII
//  3. return true if it passes both tests

//Basic Mathematical Operations

function basicOp(operation, value1, value2){
  switch(operation){
      case "+" :
        return value1 + value2;
      case "-" :
        return value1 - value2;
      case "*" :
        return value1 * value2;
      case "/" :
        return value1 / value2;
      
  }
}

//P operation and two integers
//R the math result
//E ('*', 5, 5) --> 25
//P 1. switch case for each operation
//  2. in each case you values and return result

function getSum(a, b) {
  let numbers = [];
  let sum = 0;
  
  if (a < b) {
    for (let i = a; i <= b; i++) {
      numbers.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      numbers.push(i);
    }
  }
  
  for (let num of numbers) {
    sum += num;
  }
  
  return sum;
}
//P two integers
//R sum of all integers between them
//E 1, 5 -> 1 + 2 + 3 + 4 + 5 = 15
//P 1. sort the two numbers
//  2. loop until larger is reached
//  3. add to array
//  4. loop & add all together
//  5. return sum


// Removing Elements

function removeEveryOther(arr) {
  
  const result = [];
  
  for(let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

//P array
//R removing every other element from array
//E 1,2,3,4 - > 1,3
//P for loop through arr
//  skipping by two
//  push
//  return

//Sort array by string length

function sortByLength(array) {
  let newArray = [];
  
  for (let str of array) {
    // Handle first element
    if (newArray.length === 0) {
      newArray.push(str);
      continue;
    }
    
    // Find correct insertion point
    for (let i = 0; i <= newArray.length; i++) {
      if (i === newArray.length || str.length < newArray[i].length) {
        newArray.splice(i, 0, str);
        break;
      }
    }
  }
  
  return newArray;
}

//P array of strings
//R new array sorted from shortest to longest strings
//E ["Beg", "Life", "I", "To"]) -> ["I", "To", "Beg", "Life"]
//P 1. create new array
//  2. loop old array
//  3. add first element
//  4. splice to add new element
//  5. return new array

//Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  if (n < 5){
    return n * 100
  }
  else if ((n >= 5) && (n < 10)){
    return n * 95
  }
  else if (n >= 10){
    return n * 90
  }
}
  //P n representing number of hotdogs
  //R sale of hotdogs
  //E 3 for 100 cents each will be 3 dollars
  //P if & if else blocks to cover different scenarios

  //Ones and Zeros

  const binaryArrayToNumber = arr => {
    let sum = 0;
    let n = arr.length;
  
    for (let i = 0; i < n; i++) {
      sum += arr[i] * (2 ** (n - i - 1));
    }
    return sum;
  };
  
  //P array with 1s and 0s
  //R binary representation of that array
  //E [0,0,0,1] -> 1
  //P 1. determine how many elements are in array
  //  2. create an equation to solve
  //  4. return sum

  //Return Negative

  function makeNegative(num) {
    return num < 0 ?num:-num;
  }
  
  //P number
  //R negative version
  //E -1 returns -1 still
  //P if statement to check value first
  
  //Number of People in the Bus
  var number = function(busStops) {
    let off = 0;
    let on = 0; 
    
    for(let i = 0; i < busStops.length; i++) {
      off += busStops[i][1];
      on += busStops[i][0];
    }
    
    return on - off;
  }
  
  //P array full of pairs
  //R number of people at the very end
  //E [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] -> 17
  //P we just need to know what the result is at the end. So we make two loops put them into seperate variables
  //  we create the equation and from that we get the return

  //Sum of the first nth term of Series
  
  function SeriesSum(n) {
    let sum = 0;
    
    for(let i = 0;i < n; i++){
        sum += 1 / (1 + (i * 3));
    }
  
    return sum.toFixed(2);
  }
  //P You are given a number n
  //R The sum of sequence on the nth term
  //E 2 -> 1.25
  //P 1. start with 1/1
  //  2. add (1/1) + (1/3*n)
  //  3. return result

  //String ends with?
  
  function solution(str, ending){
  
    if (ending === ""){
      return true
    }
  
    if (ending.length > str.length) return false;
  
    return str.slice(-ending.length) === ending;
  
    
  }
  //P two strings
  //R true or false
  //E ('abcde', 'cde'), true
  //P 1. check ending is smaller than str
  //  2. slice str only keeping length of ending characters starting from the back
  //  3. compare two strings
  //  4. return true or false


  //Two to One
  
  function longest(s1, s2) {
    let newString = s1 + s2;
    let newArray = [];
    
    //add to array
    for(let i = 0; i < newString.length; i++){
      newArray.push(newString[i]);
    }
    
    //distinct only
    newArray = newArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    //ascending order
    newArray.sort();
    
    //convert array to string
    let result = "";
    for(let j = 0; j < newArray.length; j++){
      result += newArray[j];
    }
    
    return result;
  }
  //P s1 and s2 (strings only letters)
  //R new sorted string (alphabetically ascending), distinct letters
  //E "aretheyhere", "yestheyarehere" -> "aehrsty"
  //P 1. filter as your adding to new string
  //  2. sort alphabetically
  //  3. return array


  //Is this a triangle?
  
  function isTriangle(a,b,c)
{
   if((a + b > c) && (b + c > a) && (a + c > b)){
     return true
   }
  else{
    return false
  }
}
//P a,b,c (integers)
//R true or false
//E 7,2,2 -> false
//P check that a + b > c and b + c > a and a + c > b


//Count the divisors of a number

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++; 
      if (i !== n / i) count++; // If divisors are not the same, count both
    }
  }

  return count;
}

//P number(n)
//R number of divisors
//E 10 -> 4 (1, 2, 5, 10)
//P 1. create count and loop through all numbers up to n
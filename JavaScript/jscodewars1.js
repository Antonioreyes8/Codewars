// Write a function "greet" that returns "hello world!"
function greet(){
    return "hello world!"
}

//Convert boolean values to strings 'Yes' or 'No'.


function boolToWord( bool ){
    if(bool === true){
      return 'Yes'
    }
    else if(bool === false){
      return 'No'
    }
      
  }
  
  //P bool
  //R 'Yes' or 'No'
  //E If user submits true then Yes and if user submits false then No
  //P if bool === true => 'Yes', if bool === false => 'No'

  //The Feast of Many Beasts

function feast(beast, dish) {
    let f_beast = beast.charAt(0)
    let l_beast = beast.charAt(beast.length -1)
    let f_dish = dish.charAt(0)
    let l_dish = dish.charAt(dish.length -1)
    
    if (f_beast === f_dish && l_beast === l_dish){
      return true;
    }
    else if (f_beast != f_dish || l_dish != l_beast){
      return false;
    }
  }
  
  //P (Name of beast)string, (name of dish)string
  //R True the dish stars and ends with the same letter as the animals name, False otherwise
  //E great blue heron, garlic naan (g and n is true), brown bear, bear claw(b and r is not true)
  //P We take first and last letters of the animal and dish and check if they are equal.
  // If they are equal true but if just or none are true return false

  //Total amount of points

function points(games) {
  
    let pointsAddUp = 0;
    
    for (score of games){
    
      
      let myScore = score.charAt(0);
      console.log(myScore);
      
      let opponentScore = score.charAt(2);
      console.log(opponentScore);
      
  
      if (+myScore > +opponentScore){
        pointsAddUp += 3;
      }
      else if (+myScore === +opponentScore){
        pointsAddUp += 1;
      }
      else if (+myScore < +opponentScore){
        continue
      }
      
      }
      
    return pointsAddUp
  }
  
  //P Games
  //R Points after 10 games
  //E from 10 games we win 5 and lose 5 and that will give us 15 points
  //P We will recieve an array so we loop through it. Each value in the array will contain a
  //  string.
  //  All we need to do is compare the first and last and as a result there are 3 paths.
  //  We tie and recieve one point or we win and recieve 3 or we lose and recieve 0.

  //Sentence Smash

  function smash (words) {
    return words.join(" ");
  };
  
  //P array of variable words
  //R the array into a single string smashed together
  //E ["hello", "world"] = hello world
  //P Loop through a given array, each time extrating the content of the value at
  // the given index and adding it to any variable

//Grasshopper - Grade book

  function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3)/3;
    
    if (90 <= averageGrade && averageGrade <= 100){
      return 'A'
    }
    else if (80 <= averageGrade && averageGrade < 90){
      return 'B'
    }
    else if (70 <= averageGrade && averageGrade < 80){
      return 'C'
    }
    else if (60 <= averageGrade && averageGrade < 70){
      return 'D'
    }
    else if (0 <= averageGrade && averageGrade < 60){
      return 'F'
    }
    
    
  }
  
  //P The three grades
  //R Average in form of a Letter grade
  //E 90 + 91 + 92 = A
  //P We want to add the three grades recieved, divide by 3 and run if statement for returning
  // letter grade

// MakeUpperCase

  function makeUpperCase(str) {
    return str.toUpperCase()
  }
  
  //P string
  //R uppercase version
  //E Hello to HELLO
  //P take the string and run a method that returns same string in all caps


// Third Angle of a Triangle

  function otherAngle(a, b) {
    return 180 - (a +b);
  }
  
  //P two angles of a triangle
  //R the third angle
  //E 20, 20 and answer would be 140
  //P Take the two angles and add them together then subtract them from 180 and return answer

  //Sum Arrays

  function sum (numbers) {
    let sum = 0;
    
    for(let num of numbers){
      sum += num;
    }
    return sum
  }
  
  //P array of numbers
  //R sum of the numbers, or zero if there arent any in the array
  //E [1, 2] = 3
  //P initialize counter to 0 and run a loop through array adding all the values


//Convert a String to a Number!

  const stringToNumber = function(str){
    return +str;
  }
  //P string
  //R the string converted to a number
  //E "1234" -> 1234
  //P take the string and use a method to convert to number

  // Convert a Number to a String!
  function numberToString(num) {
    return num.toString();
  }

  //Reversed sequence

  const reverseSeq = n => {
    let myArray = []
    while (n > 0){
      myArray.push(n);
      n -= 1;
    }
    return myArray;
  };
  
  //P an integer has to be more than 0
  //R an array counting down from that number to 1
  //E 3, [3,2,1]
  //P create a loop and you add number to an array and then subract 1 and add that number and keep going

  //Square Every Digit
  
  function squareDigits(num){

    let splitNum = num
      .toString()
      .split("")
    
    let result = "";
    
    for (let i = 0; i < splitNum.length; i++) {
      let squaredDigit = splitNum[i] ** 2;
      
      result += squaredDigit; 
      
      }
  
    return Number(result);
  }
  
  //P number
  //R every digit in number squared
  //E 12 -> 14
  //P loop through each digit and square and then concatenate the results


  //Opposite number

  function opposite(number) {
    let multiplied = number * 2;
    return number - multiplied
  }
  
  //P take one number
  //R the negative version of that number
  //E 2 => -2
  //P Take the number and multiply by two and store that and then subract that to return


  //Sum of positive
  
  function positiveSum(arr) {
    let sum = 0;
    for(x of arr){
      if (x > 0){
        sum += x;
      }
    }
    return sum
  }
  
  /*
  P an array full of numbers
  R the result of adding up all the positive values
  E 2,3,-5,1 => 6
  P find all positive in arr, add them up, display results
  */


// Grasshopper - Summation

  var summation = function (num) {
    let sum = 0;
    
    for(let x = num ; x>0 ;x--){
      sum += x;
    }
    
    return sum;
  }
  
  /*
  P num to represent starting point
  R The sum of all the integers from 1 to num
  E if the num is 3 we add 3, 2, and 1
  P Once we obtain num, create a for loop that keeps adding results together until 1 from num to 1
  */

  // Beginner Series #1 School Paperwork

  function paperwork(n, m) {
    if ((n<1)||(m<1))
      return 0
    else{
      return n*m
      }
  }
  
  /*
  P 'n' for the amount of classmates and 'm' for the amount of pages
  R as long as m, n are positive integers you return the product
  E 2 students and 2 papers will equal 4 
  P check if either m or n are integers less than 1, if so return 0 else multiply the two
  */

  //DNA to RNA Conversion

  function DNAtoRNA(dna) {
    let rna = '';
    
    for(let i = 0;i < dna.length;i++)
      if (dna[i] === 'T') {
      rna += 'U';
    } else {
      rna += dna[i];
    }
    
    return rna;
  }
  
  //P string
  //R converts 'T's to 'U's
  //E TTTTT -> UUUUU
  //P Loop through a string to find T's and change them to U's

  //A Needle in the Haystack

  function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        return 'found the needle at position ' + i; 
      }
    }
  }
  
  //P an array with all types of inputs
  //R the index of where string 'needle' is found at
  //E ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]; --> found the needle at position 3
  //P loop through the array, if 'needle' found you output 'found the needle at position' + index[i]


  //Grasshopper - Personalized Message

  function greet (name, owner) {
    if(name === owner){
      return 'Hello boss'
    }
    else{
      return 'Hello guest';
    }
  }
  
  //P name and owner
  //R Hello boss or Hello guest
  //E if owner and name are the same then hello boss will be the response 
  // 'Daniel', 'Daniel', 'Hello boss'
  //P conditional that check if name and owner are same. If they are owner is returned if not
  // guest is returned

  //Will you make it?

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump - (mpg * fuelLeft) > 0){
      return false;
    }
    else{
      return true;
    }
  };
  
  //P distanceToPump, mpg, fuelLeft
  //R True or False
  //E if mpg is 25 and there are 2 gallons left we can only travel up to 50 miles
  //P (mpg * fuelLeft) - distanceToPump if the result is negative you don't make it.


  //Count by X

  function countBy(x, n) {
    let z = [];
    let addingUp = 0;
    
    while(n > 0){
      addingUp += x;
      z.push(addingUp);
      n--;
    }
    
    
    return z;
  }
  
  //P multiple and list length
  //R array full of numbers
  //E 2,3 -> three multiples of 2 -> 2,4,6
  //P Create a loop the length of the second parameter, 
  // each time adding a number to the array and then adding the first value to restart loop

  //Convert number to reversed array of digits

  function digitize(n) {
    let digits = [];
    
    if (n != 0) {
      while (n > 0) {
        digits.push(n % 10); // Get the last digit
        n = Math.floor(n / 10); // Remove the last digit
      }
    }
    else {
      return [0];
    }
    
    return digits;
  }
  
  //P a random non-negative number
  //R digits of this number within an array in reverse order
  //E 321 -> [1,2,3]
  //P loop at that adds each value starting from the back into an array

  //Transportation on vacation
  
  function rentalCarCost(d) {
    let total = d * 40;
    
    if (d >= 7) {
      total -= 50; // Discount for 7 or more days
    } else if (d >= 3) {
      total -= 20; // Discount for 3 to 6 days
    }
    
    return total;
  }
  
  
  //P days
  //R total amount
  //E 3 days => 100
  //P if statement for the different cases 
  // one for 1-2 days,
  // one for 3 - 6 days and 
  // one 7 or more

  //Keep up the hoop

  function hoopCount (n) {
    if (n >= 10){
      return 'Great, now move on to tricks'
    }
   else {
     return 'Keep at it until you get it'
   }
}

//P n for time he does hula hoop
//R message based on number
//E 10 times, wow you did great
//P if n less than 10 he gets a message and if more he gets different message

//Keep Hydrated!

function litres(time) {
  return Math.floor(time/2);
}

//P time
//R .05 litres every hour
//E If we cycle for 3 hours we drink 1.5 rounded down to 1 litres of water
//P Divide time by 2 and round down using Math.floor


//Will there be enough space?

function enough(cap, on, wait) {
  let result = (cap - on) - wait;
  
  if(result >= 0){
    return 0;
  }
  else if(result < 0){
    return -result;
  }
}

//P cap (amount of people bus can hold), on (amount of people on), wait (amount of people waiting)
//R enough space => 0, not enough => remainder
//E if there is 2 people on and 5 waiting and the cap is 6 then one will have to wait for the next bus
//P if statement to return different values for different scenarios.


//Rock Paper Scissors!

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }

  // Define the winning conditions for p1
  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  }

  // If p1 didn't win and it's not a draw, p2 must have won
  return 'Player 2 won!';
};


//P the two players
//R the winner
//E first player plays rock and the second scissors so first play wins
//P with 2 players and 3 different scenarios

function setAlarm(employed, vacation){
  if (employed === true && vacation === false){
    return true
  }
  else {
    return false
  }
}

//P employed and vacation are boolean expressions
//R a boolean that says whether or not to set an alarm
//E if I am employed and on vacation dont put the alarm but if im not on vacation do
//P if employed is true and vacation false return true otherwise false

// L1: Set Alarm

function setAlarm(employed, vacation){
  if (employed === true && vacation === false){
    return true
  }
  else {
    return false
  }
}

//P employed and vacation are boolean expressions
//R a boolean that says whether or not to set an alarm
//E if I am employed and on vacation dont put the alarm but if im not on vacation do
//P if employed is true and vacation false return true otherwise false

//Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  
  if (current === 'green'){
    return "yellow"
  }
  else if (current === 'yellow'){
    return "red"
  }
  else if (current === 'red'){
    return "green"
  }

}

//P the current light color
//R the next color
//E if its red then return to green
//P if statement to check what is being inputted

//All Star Code Challenge #18

function strCount(str, letter) {  
  let counter = 0;

  for (let index = 0; index < str.length; index++) {
    if (letter === str[index]) {
      counter += 1;
    }
  }
  
  return counter;
}

// P: a string and a character
// R: returns the amount of times the character is in the string
// E: hello, l -> 2
// P: loop through the string, and each time a character matches, increment the count, then return the count

//Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// P: fathers age and sons age
// R: at what age was (or will be) the father twice the son's age
// E: if the father is 36 and the son is 7, 36 - 2 * 7 = 22 (22 years ago)
// P: calculate the difference between the father's age and twice the son's age, and return the absolute value

//Correct the mistakes of the character recognition software

function correct(string) {
  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] === '5') {
      newString += 'S';
    } else if (string[index] === '0') {
      newString += 'O';
    } else if (string[index] === '1') {
      newString += 'I';
    } else {
      newString += string[index];
    }
  }

  return newString;
}

// P: a string
// R: the string corrected
// E: L0ND0N -> LONDON
// P: loop through the input, add characters to newString, and correct mistyped characters

//Is it a palindrome?

function isPalindrome(x) {
  let sameCase = x.toLowerCase();
  
  let start = 0;
  let end = sameCase.length - 1;
  
  while (start < end) {
    if (sameCase[start] !== sameCase[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  
  return true; // If we complete the loop, it's a palindrome
}

// P: a string
// R: a boolean
// E: "hello" -> false, "bob" -> true
// P: Convert the string to lowercase,
// use two pointers to compare characters from the start and end,
// and return false if a mismatch is found. If the loop completes, it's a palindrome.

//Grasshopper - Terminal game move function

function move (position, roll) {
  return position + roll * 2
}

//P position and the spaces it moves * 2
//R new position
//E 0, 4 -> 8
//P positiion + (multiply roll * 2)

//Is it even?

function testEven(n) {
  if (n % 2 === 0){
    return true
  }
else{
  return false
}
}

//P number
//R boolean whether its even or not
//E .5 -> false
//P %2 == 0 and check that with if

//Count the Digit

function nbDig(n, d) {
  let counter = 0;

  for (let i = 0; i <= n; i++) {
    let squared = i ** 2;
    let squaredString = squared.toString();

    for (let char of squaredString) {
      if (char === d.toString()) {
        counter++;
      }
    }
  }

  return counter;
}


//P n (bigger than 0), d (which is between 0 and 9)
//R count of instances where d is included in the square between the numbers 0 through n
//E if n = 5, d = 1 -> 2
//P 1. create a counter
//  2. loop  0 -> n, each time squaring the increment
//  3. loop through each digit in answer
//  4. conditional digit === d
//  5. add to counter

//Invert values

function invert(array) {
  let negativeArray = [];
  for(let i in array){
    negativeArray.push(array[i]*-1);
  }
  
  return negativeArray;
}
//P array
//R negative version
//E [1,2] -> [-1,-2]
//P loop to to take current index and add the negative version of it to new array



// Expressions Matter

function expressionMatter(a, b, c) {
  // Calculate all possible results
  const results = [
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  ];

  // Find the maximum value manually
  let maxResult = results[0]; // Start with the first result
  
  for (let i = 1; i < results.length; i++) {
    if (results[i] > maxResult) {
      maxResult = results[i]; // Update maxResult if a larger value is found
    }
  }

  return maxResult;
}

//P three numbers
//R the highest number possible withe the operands given ((),*,+)
//E 2,1,2 -> 6
//P try different combinations and then compare and keep highest value.
// 1. You create a list of combinations
// 2. You set a max
// 3. Loop through combinations testing results
// 4. Replace max each time the result is greater

//Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false ;
}

//P base and factor
//R boolean to see if it is a factor of base
//E 10, 2 -> true
//P conditional for a remainder when dividing base by factor. If its 0 then it is then true else false
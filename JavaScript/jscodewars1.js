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
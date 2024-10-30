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
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
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

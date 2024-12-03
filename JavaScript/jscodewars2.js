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
//takeANumber(deliLine); //returns 1
//takeANumber(deliLine); //returns 2

//nowServing(deliLine); //returns 1
//nowServing(deliLine); //returns 2

//takeANumber(deliLine); //returns 3

var num = 0;
function takeANumber(line){
num++;
return num;
}
  line.push(name);
  var position = 1;
  for(var i = 0; i < line.length; i++ ){
    if(line[i] === name){
      position += i;
      return "Welcome, " + name + ". You are number " + position + " in line."
    }
  }
}

//takeANumber(deliLine); //returns 1
//takeANumber(deliLine); //returns 2

//nowServing(deliLine); //returns 1
//nowServing(deliLine); //returns 2

//takeANumber(deliLine); //returns 3

var num = 0;
function takeANumber(line){
num++;
line.push(num);
return num;
}

function nowServing(line){
 var person;
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    person = line.shift();
    return  "Currently serving " + person + ".";
  }
}
  
  function currentLine(line){
    var position = 1;
    if(line.length === 0){
      return "The line is currently empty."
    } 
    var str = "The line is currently:";
     for(var i = 0; i < line.length; i++){
       if(i + 1 === line.length){
       position += i;
       str += " " + position + "." + " " + line[i];
       } else {
       position += i;
       str += " " + position + "." + " " + line[i] + ",";
       position = 1;
     }
  }
  return str;
}



function takeANumber(line,name){
  line.push(name);
  var position = 1;
  for(var i = 0; i < line.length; i++ ){
    if(line[i] === name){
      position += i;
      return "Welcome, " + name + ". You are number " + position + " in line."
    }
  }
}

function nowServing(line){
 var person;
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    person = line.shift();
    return "Currently serving " + person + ".";
  }
}
  
  function currentLine(line){
    var position = 1;
    if(line.length === 0){
      return "The line is currently empty."
    } 
    var str = "The line is currently:";
     for(var i = 0; i < line.length; i++){
       if(i + 1 === line.length){
       position += i;
       str += " " + position + "." + " " + line[i];
       } else {
       position += i;
       str += " " + position + "." + " " + line[i] + ",";
       position = 1;
     }
  }
  return str;
}

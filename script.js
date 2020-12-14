var hr = 0;
var min = 0;
var sec = 0;
var t;

//Increment the value
function setTimer(){

  if(sec < 59 ){
    sec++;
    document.getElementById("sec").innerHTML = print(sec);    
  }
  else{
    sec = 0;
    min ++;
    document.getElementById('sec').innerHTML = print(sec);
  }
  if(min < 59){
    document.getElementById("min").innerHTML = print(min);
  }
  else{
    min = 0;
    hr++;
    document.getElementById('min').innerHTML = print(min);
  }
  if(hr < 24){
    document.getElementById('hr').innerHTML = print(hr);
  }
  else{
    stop();
  }
}

//Print the values
function print(val){
  if(val<=9){
    return '0'+ val;
  }
  else{
    return val;
  }
}

//Start the watch
function start(){
  t = setInterval(setTimer, 1000);
  document.getElementById('start').disabled = true;
}

//stop the watch
function stop(){
  clearInterval(t);
  document.getElementById('start').disabled = false;
}

//Reset the watch
function reset(){
  clearInterval(t);
  min = 0;
  sec = 0;
  hr = 0;
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('min').innerHTML = "00";
  document.getElementById('hr').innerHTML = "00";
}



var myInput = document.getElementById("psw");
var small = document.getElementById("small");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var symbol = document.getElementById("symbol");

myInput.onkeyup = function() {
  var lower = /[a-z]/g;
  if(myInput.value.match(lower)) {  
    small.classList.remove("invalid");
    small.classList.add("valid");
  } else {
    small.classList.remove("valid");
    small.classList.add("invalid");
  }
  
  var upper = /[A-Z]/g;
  if(myInput.value.match(upper)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if(myInput.value.length >= 10) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  var symbols=/[!@#\$%\^&\*]/g;
  if(myInput.value.match(symbols)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }
  
}
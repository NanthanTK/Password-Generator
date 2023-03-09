// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword() {

  var pwdLength = 0;
  var isUpper = false;
  var isLower = false;
  var isSpecial = false;
  var isNumber = false;
  var chrTotal =[];
  var chrUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var chrLower ="abcdegghijklmnopqustuvwxyz".split("");
  var chrSpecial ="!@#$%^&*()_+-=|\<>?,./".split("");
  var chrNumber= "1234567890".split("");
  console.log(chrNumber);
  
  //function to get length of the password
  function getLength (){
    pwdLength = window.prompt("Enter a number for the number of characters in the password (from 8 to 120)");
    while (isNaN(pwdLength)|| pwdLength >120 ||pwdLength <8 ) {
    pwdLength = prompt("Invalid Response. Enter a number for the number of characters in the password (from 8 to 120)");
    }
    console.log(pwdLength);
    return pwdLength ;  
  }
  getLength();

  // function to get the choice of charactors
  var getChoice = function () {
    isUpper = window.confirm("Do you want upper case letters in your password");
    isLower = window.confirm("Do you want lower case letters in your password");
    isSpecial = window.confirm("Do you want special letters in your password");
    isNumber = window.confirm("Do you want numbers in your password");
    console.log (isUpper, isLower,isSpecial,isNumber);
    if (!(isUpper || isLower || isSpecial ||isNumber)){
    window.alert ("At least one type of characters must be selected");
    getChoice();
    }
    return ;
  }
  getChoice();
  
  //include characters to be included in the password
  if (isUpper){
    chrTotal=chrTotal.concat(chrUpper);
  }
  if (isLower){
    chrTotal=chrTotal.concat(chrLower);
  }
  if (isSpecial){
  chrTotal=chrTotal.concat(chrSpecial);
  }
  if (isNumber){
  chrTotal=chrTotal.concat(chrNumber);
  }
    
  //array to include letters selected for the password 
  var pwdLetter = [];
  for (var i=0; i <pwdLength; i++){
    var k= Math.floor(Math.random() * chrTotal.length);
    pwdLetter=pwdLetter.concat(chrTotal[k]);
  }
  console.log (pwdLetter);
  
  //convert array containing lettters for password into a string
  var pwdOut=pwdLetter.join("");

  console.log(pwdOut);
  //strinnd passed to the function writePassword 
  return pwdOut;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

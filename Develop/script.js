// Assignment code here

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacter = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  ",",
  ')',
  '(',
  '_',
  '-',
  "=",
  '+',
  '}',
  '{',
  ']',
  '[',
  '|',
  '<',
  '>',
  '?',
  '/'];

function getPasswordRequirements(){
  var promptPWLength = parseInt(window.prompt("How many character would you like in your password? Must be a number between 8 and 128."));
  if (promptPWLength < 8){
      window.alert("Password must be at least 8 characters");
  } 
      if (promptPWLength > 128) {
        window.alert("Password must be less than 128 characters");
      }
  
  var hasUpperCase = confirm("Would you like to include upper case characters in your password?");
  //console.log("hasUpperCase ", hasUpperCase);
  
  var hasLowerCase = confirm("Would you like to include lower case characters in your password?");
 // console.log("hasLowerCase ", hasLowerCase);    
  
  var hasNumbers = confirm("Would you like to include numbers characters in your password?");
 // console.log("hasNumbers ", hasNumbers);
  
  var hasSymbols = confirm("Would you like to include special characters in your password?");
 // console.log("hasSymbols ", hasSymbols);
  
  if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSymbols === false) {
   window.alert("At least one character type must be selected");
  }
  //object = all the pw criteria
  const passwordEntries = {
    promptPWLength: promptPWLength,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSymbols: hasSymbols
  };
  return passwordEntries;
}

function generatePassword(){
var requirements=getPasswordRequirements();

var listOfCharacterTypes = []
if (requirements.hasUpperCase){
  listOfCharacterTypes = listOfCharacterTypes.concat(upperCase);
} 
if (requirements.hasLowerCase){
  listOfCharacterTypes = listOfCharacterTypes.concat(lowerCase);
 } 
 if (requirements.hasNumbers){
   listOfCharacterTypes = listOfCharacterTypes.concat(numbers)
 }
 if (requirements.hasSymbols){
   listOfCharacterTypes = listOfCharacterTypes.concat(specialCharacter)
 }
} 





//TODO getRandom function



//other code starts here - all my code is before.


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// Generator Function - using the codes from www.net-comber.com/charset.html    |    https://www.youtube.com/watch?v=duNmhKgtcsI&t=433s


// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUppconsole,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// }



// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26)) + 97);
// }


// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26)) + 65);
// }


// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random() * 10)) + 48);
// }


// function getRandomsymbol(){
 // const symbols ='!@#$%^&*)(_-=+}{][|<>?/';
//   return symbols[Math.floor(Math.random() *symbols.length)];
// }











// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria           /prompts...
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
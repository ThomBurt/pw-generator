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
  var passwordEntries = {
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
var everyCharacterType =[]
var password = []
if (requirements.hasUpperCase){
  listOfCharacterTypes = listOfCharacterTypes.concat(upperCase);
  //console.log('upperCase', listOfCharacterTypes);
  everyCharacterType.push(getRandom(upperCase))
  //console.log('upperCase', everyCharacterType);
} 
if (requirements.hasLowerCase){
  listOfCharacterTypes = listOfCharacterTypes.concat(lowerCase);
 //console.log('upperCase + lowerCase', listOfCharacterTypes);
  everyCharacterType.push(getRandom(lowerCase))
//console.log('upperCase + lowerCase', everyCharacterType);
 } 
 if (requirements.hasNumbers){
   listOfCharacterTypes = listOfCharacterTypes.concat(numbers)
  // console.log('upperCase + lowerCase + numbers', listOfCharacterTypes);
   everyCharacterType.push(getRandom(numbers))
  // console.log('upperCase + lowerCase + numbers', everyCharacterType);
 }
 if (requirements.hasSymbols){
   listOfCharacterTypes = listOfCharacterTypes.concat(specialCharacter)
   everyCharacterType.push(getRandom(specialCharacter))
 } 

for(var i = 0; i<requirements.promptPWLength; i++){
  var character = getRandom(listOfCharacterTypes);
  password.push(character) 
}
//console.log('originalPassword', password.join(''));
for(var i = 0; i < everyCharacterType.length; i++){
  password[i] = everyCharacterType[i];
}
//console.log('originalPassword + everyCharacterType', password.join(''));
//console.log(password);
let answer = password.join('');
//console.log(answer);
return answer;
} 

function getRandom(arr){
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}




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
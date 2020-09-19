// Assignment code here
// get and store user input using prompts and confirms
// generate random numbers
// select items from arrays
// implement control flow using fuctions, iterations and condition statements
// When clicking generate button user is prompted for password criteria
// Length of Password between 8 & 128
// Confirm that at least one character type was selected
// Generate Password Matching Criteria

// Arrays of possible characters

// Array of lowercase letters
var lowerCaseChar = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase letters
var upperCaseChar = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Array of numeric values
var numericVal = ['0','1','2','3','4','5','6','7','8','9'];

// Array of special characters
var specialChar = [
  '!','@','#','$','%','^','&','*','(',')','=','+',
  '<','>','?','[',']','{','}','~',';',':','.',','
];



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

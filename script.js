// get and store user input using prompts and confirms
// generate random numbers
// select items from arrays
// implement control flow using fuctions, iterations and condition statements
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

// When clicking generate button user is prompted for password criteria
function getPasswordCriteria() {
  // Length of password prompt
  var passwordLength = parseInt(
    prompt("How long would you like your password to be?")
  );
  // Make sure the password is between 8 & 128 characters long
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 & 128 characters long.")
    return;
  }
  // Prompt for lowercase letters
  var lowerCaseChar = confirm ("Choose 'OK' to include lowercase letters.");

  // Prompt for uppercase letters
  var upperCaseChar = confirm ("Choose 'OK' to include uppercase letters.");

  // Prompt for numeric values
  var numericVal = confirm ("Choose 'OK' to include numbers.");

  // Prompt for special characters
  var specialChar = confirm ("Choose 'OK' to include special characters.");

  // Confirm that at least one character type was selected
  if (lowerCaseChar === false,
      upperCaseChar === false,
      numericVal === false,
      specialChar === false)
      {
        alert("You must select one character type to continue.");
        return;
      }
    
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

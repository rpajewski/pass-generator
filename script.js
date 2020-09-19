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
  // Get and store user input using prompts and confirms
  // Length of password prompt
  var passwordLength = parseInt(
    prompt ("How long would you like your password to be?")
  );

  // Make sure the password is between 8 & 128 characters long
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || passwordLength === '') {
    alert ("Password must be between 8 & 128 characters long.")
    return;
  }
  if (isNaN(passwordLength) === true) {
    alert ('Password length must be provided as a number.');
    return;
  }

  // Prompt for lowercase letters
  var lowerCaseCharConfirm = confirm ("Choose 'OK' to include lowercase letters.");

  // Prompt for uppercase letters
  var upperCaseCharConfirm = confirm ("Choose 'OK' to include uppercase letters.");

  // Prompt for numeric values
  var numericValConfirm = confirm ("Choose 'OK' to include numbers.");

  // Prompt for special characters
  var specialCharConfirm = confirm ("Choose 'OK' to include special characters.");

  // Confirm that at least one character type was selected
  if (lowerCaseCharConfirm === false &&
      upperCaseCharConfirm === false &&
      numericValConfirm === false &&
      specialCharConfirm === false)
      {
        alert("You must select one character type to continue.");
        return;
      }
  // Store user input
  var passwordCriteria = {
    passwordLength: passwordLength,
    lowerCaseCharConfirm: lowerCaseCharConfirm,
    upperCaseCharConfirm: upperCaseCharConfirm,
    numericValConfirm: numericValConfirm,
    specialCharConfirm: specialCharConfirm
  };
  return passwordCriteria;
}

// Select characters randomly from array(s)
function getRandom(charArray) {
  var randChoice = Math.floor(Math.random() * charArray.length);
  var randChar = charArray[randChoice];
  return randChar;
}

// Generate password matching criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  // Store generated results
  var genResults = [];

  // Array of possible characters to included based on user criteria
  var possibleChar = [];

  // Array to store chosen characters
  var chosenChar = [];

  // If criteria value returns true add possible characters then choose char randomly
  if (criteria.lowerCaseCharConfirm) {
    possibleChar = possibleChar.concat(lowerCaseChar);
    chosenChar.push(getRandom(lowerCaseChar));
  }

  // If criteria value returns true add possible characters then choose char randomly
  if (criteria.upperCaseCharConfirm) {
    possibleChar = possibleChar.concat(upperCaseChar);
    chosenChar.push(getRandom(upperCaseChar));
  }

  // If criteria value returns true add possible characters then choose char randomly
  if (criteria.numericValConfirm) {
    possibleChar = possibleChar.concat(numericVal);
    chosenChar.push(getRandom(numericVal));
  }

  // If criteria value returns true add possible characters then choose char randomly
  if (criteria.specialCharConfirm) {
    possibleChar = possibleChar.concat(specialChar);
    chosenChar.push(getRandom(specialChar));
  }

  // For loop to generate filler characters for password based on possible characters generated
  for (var i = 0; i < criteria.passwordLength; i++) {
    var possibleChar = getRandom(possibleChar);
    genResults.push(possibleChar);
  }

  // Making sure criteria is met by adding chosen characters
  for (var i = 0; i < chosenChar.length; i++) {
    genResults[i] = chosenChar[i];
  }

  // Calls generated password and removes seperators preparing password to display for user with function "writePassword"
  return genResults.join('');
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

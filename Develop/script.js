// Array of special characters to be included in password
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// ***************************
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// prompt user character length 
// Prompt user for special char T/F
// Prompt user for lowercase char T/F
// Prompt user for uppercase char T/F
// Prompt user for number char T/F
function generatePassword() {
  var tempPassword = "";

  var charLength = prompt("Choose character length (8 - 128)")
  while (charLength < 8 || charLength > 128) {
    charLength = prompt("Choose character length (8 - 128)");
  }
  console.log(charLength)
  var upperCaseConfirm = confirm("Would you like uppercase characters?");
  console.log(upperCaseConfirm);

  var lowerCaseConfirm = confirm("Would you like lowercase characters?");
  console.log(lowerCaseConfirm);

  var numCharConfirm = confirm("Would you like numerical characters?");
  console.log(numCharConfirm);

  var specCharConfirm = confirm("Would you like special characters?");
  console.log(specCharConfirm);

  // Use charLength to gen that number of random character to a string
  for (var i = 0; i < charLength; i++) {
    if (upperCaseConfirm) {
      tempPassword += getRandomItem(upperCase);

    }
    if (lowerCaseConfirm) {
      tempPassword += getRandomItem(lowerCase);

    }
    if (numCharConfirm) {
      tempPassword += getRandomItem(numericChar);

    }
    if (specCharConfirm) {
      tempPassword += getRandomItem(specialChar);

    }
  }
  console.log(tempPassword.slice(0, charLength));

  return tempPassword.slice(0, charLength);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomItem(arr) {
  console.log(arr)
  // Generate a random index from 0 to the length - 1 of our array
  var randomIndex = Math.random() * arr.length;
  // round down our random index
  randomIndex = Math.floor(randomIndex);
  // return the random item based off of our random index
  return arr[randomIndex];
  // One liner of the above code
  // return arr[Math.floor(Math.random() * arr.length)];
}


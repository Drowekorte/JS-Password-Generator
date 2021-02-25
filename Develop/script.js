// Array of special characters to be included in password
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var charLengthConfirm
var charLengthConfirm = ""
var upperCaseConfirm 
var lowerCaseConfirm 
var numCharConfirm
var specCharConfirm

// Assignment Code
var generateBtn = document.querySelector("#generate");

// My stupid contribution 
function promptFunction() {
  charLength = prompt("Choose character length (8 - 128)");
  newFunction();
    if (charLength >= 8 && charLength <= 128) {
      alert("great!");
    }
    else if (charLength <= 8 && charLength >= 128) {
      alert("Invalid entry");
      console.log(false);
    }
    else {
      alert("Goodbye...");
      console.log(false);
    }
  }
}  
function confirmFunction() {  
  var upperCase = confirm("Would you like uppercase characters") {
   if () 

  }
  var lowerCase = confirm("Would you like lowercase characters") {

  }
  var numericChar = confirm("Would you like numbers") {

  }
  var specialChar = confirm("Would you like special characters") {

  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


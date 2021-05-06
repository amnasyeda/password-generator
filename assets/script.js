// Assignment code here
var userInput = "";
var arraySplit = "";
var exitApplixation = false;
var finalPassword = "";
var displayPassword = "";

// reference for randomized strings
var pReference = {
    numbers: { indexNumber: 0, reference: "0123456789"
    },
    uppercase: { indexNumber: 1, reference: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"        
    }, 
    lowercase: { indexNumber: 2, reference: "abcdefghijklmnopqrstuvwxyz"
    },
    characters: { indexNumber: 3, reference: "!@#$%^&*()<>?/.,;:{}[]~\|"
    }
}

// function for code 
var generatePassword = function () {

// user alert 
  window.alert("Pick either numberd, upper/lowercase letters, or special characters.");

  var validInput = true;

userInput = "";
arraySplit = "";
exitApplixation = false;
finalPassword = "";
displayPassword = "";

// user input selected 
while(validInput) {
  userInput = window.prompt("Please select the variables to be used for your password.");
  if (!userInout) {
    window.alert("If you would like to close the application, please close this tab.")
    generatePassword():
  } else if (userInput) {

    userInout = userInput.split (" ");
    arraySplit = userInput.slice(0,userInput.length);

    window.alert("The follwing has been selected: " + arraySplit);

    validInput = false;

  //loop for user input 
  for (var i = 0; i < userInput.length; i++) {

  var inputReference = userInput [i];

  var inputReferenceIntegar = parsaInt(inputReference);

  switch(inputReferenceIntegar) {
    case 1:
    case 2:
    case 3:
    case 4:

      break;
    default: 
      if (!inputReferenceInteger) {
        window.alert("Select variables.");
        generatePassword();
      }
    else {
      window.alert("Select variables.");
      generatePassword();
    }
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
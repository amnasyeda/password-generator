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

var generatePassword = function () {

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
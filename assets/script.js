
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

const lc ="abcdefghijklmnopqrstuvwxyz";

// Array references for characters utilized
const uc ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const spec ="!@#$%^&*()<>?/.,;:{}[]~\|";

const num = "0123456789";

let allChar = "";

// Questions and answers given to user for each condition 
function generatePassword() {
  console.log("btn was clicked")
  let pwdLength = prompt(
    "Your password must be between 8 to 128 characters long. In the box below, please NUMERICALLY state the LENGTH of your password."
  );
  if (pwdLength < 8 || pwdLength > 128 || isNaN(parseInt(pwdLength))) {
    alert("Sorry. Your password must be more than 8 characters and less than 128 characters. Please enter a password of the required length and try again.");
  } else {
    let lowerCase = confirm("Will you be using LOWER CASE letters in your password?");
    if(lowerCase === true) {
      for (var i = 0; i < lowerCase.length; i++) {
        collectionOfValids.push(lowerCase[i]);
    }
}
    let upperCase = confirm("Will you be using UPPER CASE letters in your password?");
    if (upperCase === true) {
      for (var i = 0; i < upperCase.length; i++) {
        collectionOfValids.push(upperCase[i]);
    }
}
    let specialCharacters = confirm("Will you be using SPECIAL CHARACTERS in your password?");
    if (spec === true) {
      for (var i = 0; i < spec.length; i++) {
        collectionOfValids.push(spec[i]);
    }
}
    let numbers = confirm("Will you be using NUMBERS in your password?");
    if (num === true) {
      for (var i = 0; i < num.length; i++) {
        collectionOfValids.push(num[i]);
    }
}
     
    // console.log if no prompt was exhibited  
    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Please select at least one character type mentioned above in order to generate the password.");
      generatePassword();
    }
  }

  // Randomizing characters
  let pwd = "";
  for (let i=0; i<pwdLength; i++){
    pwd += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return pwd
}

// Produces password in box 
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn)



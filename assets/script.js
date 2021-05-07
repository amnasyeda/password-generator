
function generatePassword() {


  //asking user for length of password 
var lengthPrompt = function() {
  var length = prompt("How many characters will your password have? This may range from 8 to 128 characters.");

      // if nothing is typed, state try again
  if (length = "", length = null, length <= 7, length >= 129) {
      alert("Invalid answer. Try Again")
      return lengthPrompt();
  } else {
      // return user number input
      console.log(length);
      return length;
  }
}
  // global variable for functions
var length = lengthPrompt();

// Uppercase variables outcome
var upperCaseF = function() {
  var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var retValUpper = "";

  var upperCase = window.prompt("Will you be using uppercase letters? Yes or No.");

  // If yes, randomized strings generated
  if (upperCase = "YES", upperCase = "yes", upperCase = "Yes") {
 for (var i = 0, n=charSetUpper.length; i < length; ++i) {
      retValUpper += charSetUpper.charAt(Math.floor(Math.random() * n))
 }
   return retValUpper;

  // If no, nothing to be generated 
} else if (upperCase = "NO", upperCase = "no", upperCase = "No") {
    retValUpper = null;
    return retValUpper; 
  }
};

// Lowercase variable function
var lowerCaseF = function() {
  var charSetLower = "abcdefghijklmnopqrstuvqxyz";
  var retVal = "";

  var lowerCase = window.prompt("Will you be using lowercase letters? Yes or No.");

  // If yes, randomized strings generated
if (lowerCase = "YES", lowerCase = "yes", lowerCase = "Yes") {
  for (var i = 0, n = charSetLower.length; i < length; ++i) {
      retVal += charSetLower.charAt(Math.floor(Math.random() * n));
  }
return retVal;

// If no, nothing to be generated 
} else if (lowerCase = "NO", lowerCase = "no", lowerCase = "No") {
  retVal = null;
  return retVal; 
  }
};

// Number variables
var numbersF = function() {
  var numberSet = "1234567890";
  var retNumber = null;

  var numberPrompt = window.prompt("Will you be using numbers? Yes or No.");

  // If yes, randomized strings generated
  if (numberPrompt = "YES", numberPrompt = "yes", numberPrompt = "yes") {
    for (var i = 0, n = numberSet.length; i < length; ++i) {
      retNum += numberSet.charAt(Math.floor(Math.random() * n));
    }
    return retNumber;

    // If no, nothing to be generated 
  } else if (numberPrompt = "NO", numberPrompt = "no", numberPrompt = "No") {
    retNumber = null;
    return retNum;
  }
  };

   // Special characters variables 
   var specialChar = function () {
     var specialSet = "!@#$%^&*()<>?/.,;:{}[]~\|";
     var retSpecial = "";

     var specialPrompt = window.prompt("Will you be using special characters? Yes or No.");
   
     // if yes, randomized strings generated 
  if (specialPrompt = "YES", specialPrompt = "yes", specialPrompt = "Yes") {
    for (var i = 0, n = specialSet.length; i < length; ++i) {
        retSpecial += specialSet.charAt(Math.floor(Math.random() * n));
    }
  return retSpecial; 

   // if no, nothing to be generated 
  } else if (specialPrompt = "NO", specialPrompt = "no", specialPrompt = "No") {
    retSpecial = null;
    return retSpecial;
  }
   };

// combining all possible functions 
var retValCom = "";
var alphabet = upperCaseF () + lowerCaseF() + numbersF () + specialChar();
for (var i = 0, n = alphabet.length; i < length; ++i) {
    retValCom += alphabet.charAt(Math.floor(Math.random() * n))
}

return retValCom;
  }

  function password_generator( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}

console.log( password_generator() );



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




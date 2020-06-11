// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    // Possible character sets to use
    var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numericCharacters = '0123456789';
    var specialCharacters = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';


    // Function to get the password length
    function getLength() {
      var pLength = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");

      /* Tried to add additional validation, but couldn't get it working quite yet.*/

      //pLength = parseInt(pLength); 

      //if (!Number.isInteger(pLength)) {
      //  alert("Please enter only a number 8 through 128");
      //  getLength();
      //}

      if (pLength < 8 || pLength > 128) {
        alert("Sorry, your password must be between 8 and 128 characters.");
        getLength();
      } else {
        return pLength;
      }
    }

    var passwordLength = getLength();
    console.log("Password length: " + passwordLength);

    // Yes/No for Lowercase
    function chooseLowercase() {
      var lowercaseAnswer = prompt("Would you like to include lowercase letters? (Yes/No)");
      if (lowercaseAnswer === "Yes" || lowercaseAnswer === "yes") {
        alert("Roger that, we'll include lower case.");
        //console.log(lowercaseAnswer);
        return lowercaseAnswer;
      } else if (lowercaseAnswer === "No" || lowercaseAnswer === "no") {
        alert("Roger that, no lower case.");
        //console.log(lowercaseAnswer);
        return lowercaseAnswer;
      } else {
        alert("Please select either Yes or No");
        chooseLowercase();
      }
    }

    var lowercase = chooseLowercase();
    lowercase = lowercase.toLowerCase();
    console.log("Include lowercase characters? " + lowercase);

    // Yes/No for Uppercase
    function chooseUppercase() {
      var uppercaseAnswer = prompt("Would you like to include uppercase letters? (Yes/No)");
      if (uppercaseAnswer === "Yes" || uppercaseAnswer === "yes") {
        alert("Roger that, we'll include uppercase.");
        //console.log(lowercaseAnswer);
        return uppercaseAnswer;
      } else if (uppercaseAnswer === "No" || uppercaseAnswer === "no") {
        alert("Roger that, no uppercase.");
        //console.log(lowercaseAnswer);
        return uppercaseAnswer;
      } else {
        alert("Please select either Yes or No");
        chooseUppercase();
      }
    }

    var uppercase = chooseUppercase();
    uppercase = uppercase.toLowerCase();
    console.log("Include uppercase characters? " + uppercase);

    // Yes/No for Numeric Characters
    function chooseNumeric() {
      var numericAnswer = prompt("Would you like to include numbers? (Yes/No)");
      if (numericAnswer === "Yes" || numericAnswer === "yes") {
        alert("Roger that, we'll include numbers.");
        //console.log(lowercaseAnswer);
        return numericAnswer;
      } else if (numericAnswer === "No" || numericAnswer === "no") {
        alert("Roger that, no numbers.");
        //console.log(lowercaseAnswer);
        return numericAnswer;
      } else {
        alert("Please select either Yes or No");
        chooseNumeric();
      }
    }

    var numeric = chooseNumeric();
    numeric = numeric.toLowerCase();
    console.log("Include numeric characters? " + numeric);


    // Yes/No for Special Characters
    function chooseSpecial() {
      var specialAnswer = prompt("Would you like to include special characters? (Yes/No)");
      if (specialAnswer === "Yes" || specialAnswer === "yes") {
        alert("Roger that, we'll include special characters.");
        //console.log(lowercaseAnswer);
        return specialAnswer;
      } else if (specialAnswer === "No" || specialAnswer === "no") {
        alert("Roger that, no special characters.");
        //console.log(lowercaseAnswer);
        return specialAnswer;
      } else {
        alert("Please select either Yes or No");
        chooseSpecial();
      }
    }

    var special = chooseSpecial();
    special = special.toLowerCase();
    console.log("Include special characters? " + special);

    // Check to make sure at least one character set was chosen
    if (lowercase === 'no' && uppercase === 'no' && numeric === 'no' && special === 'no') {
      alert("Please choose at least one character type");
      generatePassword();
    }

    // Create one string by concatenating the different char sets that were chosen
    var combinedCharSet = '';

    if (lowercase === 'yes') {
      combinedCharSet = combinedCharSet + lowercaseCharacters;
    }

    if (uppercase === 'yes') {
      combinedCharSet = combinedCharSet + uppercaseCharacters;
    }

    if (numeric === 'yes') {
      combinedCharSet = combinedCharSet + numericCharacters;
    }

    if (special === 'yes') {
      combinedCharSet = combinedCharSet + specialCharacters;
    }

    console.log("Full character set being used: " + combinedCharSet);

    password = '';
    
    password = confirmPassword();
    
    function confirmPassword() {
    
      password = tryPassword();
      
      // Create a password. Add one character at a time to the password until reaching the password length.
      // For each character, choose one character randomly from the generated char set string
      function tryPassword(){
        var passwordTest = '';
        for(i = 0; i <= passwordLength; i++) {
          charStringLength = combinedCharSet.length;
          charStart = Math.floor((Math.random() * charStringLength) + 1);
          charEnd = charStart + 1;
          randomCharacter = combinedCharSet.substring(charStart, charEnd);
          passwordTest = passwordTest + randomCharacter;
        }
        return passwordTest;
      }

      // Validation to make sure that if a char set was chosen, there's at least one character from 
      // the set included in the generated password. If not, go back up and create a new password.
      if (lowercase === 'yes') {
        var passwordLowercase = 0;
        for (i = 1; i < lowercaseCharacters.length; i++) {
          charStop = i + 1;
          charCheck = lowercaseCharacters.substring(i, charStop);
          passwordLowercase += password.indexOf(charCheck);
        }

        lowercaseNegative = -25;
        //console.log("lowerCaseNegative: " + lowercaseNegative);
        //console.log("passwordLowerCase: " + passwordLowercase);


        if (passwordLowercase === lowercaseNegative) {
          console.log("No lower case;");
          confirmPassword();
        }
      }

      if (uppercase === 'yes') {
        var passwordUppercase = 0;
        for (i = 1; i < uppercaseCharacters.length; i++) {
          charStop = i + 1;
          charCheck = uppercaseCharacters.substring(i, charStop);
          passwordUppercase += password.indexOf(charCheck);
        }

        uppercaseNegative = -25;
        //console.log("uppercaseNegative: " + uppercaseNegative);
        //console.log("passwordUppercase: " + passwordUppercase);


        if (passwordUppercase === uppercaseNegative) {
          console.log("No lower case;");
          confirmPassword();
        }
      }


      if (numeric === 'yes') {
        var passwordNumeric = 0;
        for (i = 1; i < numericCharacters.length; i++) {
          charStop = i + 1;
          charCheck = numericCharacters.substring(i, charStop);
          passwordNumeric += password.indexOf(charCheck);
        }

        numericNegative = -9;
        //console.log("numericNegative: " + numericNegative);
        //console.log("passwordNumeric: " + passwordNumeric);


        if (passwordNumeric === numericNegative) {
          console.log("No numeric characters;");
          confirmPassword();
        }
      }


      if (special === 'yes') {
        var passwordSpecial = 0;
        for (i = 1; i < specialCharacters.length; i++) {
          charStop = i + 1;
          charCheck = specialCharacters.substring(i, charStop);
          passwordSpecial += password.indexOf(charCheck);
        }

        specialNegative = -29;
        //console.log("specialNegative: " + specialNegative);
        //console.log("passwordSpecial: " + passwordSpecial);


        if (passwordSpecial === specialNegative) {
          console.log("No special characters;");
          confirmPassword();
        }
      }
      // If the generated password makes it through the validation gauntlet, return it.
      return password;
    }
    return password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

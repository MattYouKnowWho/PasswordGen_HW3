// Assignment Code
let generateBtn = document.querySelector("#generate");
let characterLength;
let generatedPassword = "";

const specialCharArr = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")","-","_", ":",";",".","'","[","]","{","}","?",","];
const upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];
const numbersArr = ['1','2','3','4','5','6','7','8','9','0'];
const choices = []



function generatePassword () {
  //parameters for user password length
characterLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!characterLength){
  alert("This needs a value. ");

} else if (characterLength < 8 || characterLength > 128){
  characterLength = parseInt(prompt("You must choose between 8 and 128"));
} else {
const specialChar = window.confirm("Click OK if you want to have special characters in your password. ");
const upperCase = window.confirm("Click OK if you want uppercase letters to be in your password. ");
const lowerCase = window.confirm("Click OK if you want lowercase letters to be in your password. ");
const numbers = window.confirm("Click OK if you want numbers to be in your password. ");
//scenarios in which user doesnt click OK
if (!specialChar && !upperCase && !lowerCase && !numbers){
}
  if (lowercase){
      choices = choices.concat(lowerCase)
    }
    
      if (uppercase) {
        choices = choices.concat(upperCase)
    }
    
      if (specialCharacters) {
        choices = choices.concat(specialChar)
    }
    
      if (number) {
        choices = choices.concat(numbers)
    }
    


//loop to give random generated password 
for (i = 0; i < characterLength + 1; i++) {
    let randomCharIndex = choices[ Math.floor(Math.random() * choices.length)]
    generatedPassword += choices[randomCharIndex]  
  
}
return generatedPassword
}

}
generateBtn.addEventListener("click", function () {
  passwordVar = generatePassword();
  document.getElementById("passwordVar");
})

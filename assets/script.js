// Assignment Code
let generateBtn = document.querySelector("#generate");
let characterLength;
let choices; 
const specialChar = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")","-","_", ":",";",".","'","[","]","{","}","?",","];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];



//  function getUserSelection() {

//  }

function generatePassword () 
{

//parameters for user password length
characterLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!characterLength){
  alert("This needs a value. ");

} else if (characterLength < 8 || characterLength > 128){
  characterLength = parseInt(prompt("You must choose between 8 and 128"));
} else {
specialChar = window.confirm("Click OK if you want to have special characters in your password. ");
upperCase = window.confirm("Click OK if you want uppercase letters to be in your password. ");
lowerCase = window.confirm("Click OK if you want lowercase letters to be in your password. ");
numbers = window.confirm("Click OK if you want numbers to be in your password. ");
// scenarios in which user doesnt click OK
if (!specialChar && !upperCase && !lowerCase && !numbers){

} else if (specialChar && upperCase && lowerCase)
{} else if (specialChar && upperCase)
{} else if (specialChar)
let thePassword =[];

//loop to give random generated password 
for (i = 0; i < chracterLength + 1; i++) {
    let randomCharIndex = choices[ Math.floor(Math.random() * possibleCharacters.length)]
    generatedPassword += possibleCharacters[randomCharIndex]  
    thePassword.push(randomCharIndex)
}} 
//function to button so what when clicked, it performs the generatePassword function
generateBtn.addEventListener("click", function () {
  passwordVar = generatePassword();
  document.getElementById("passwordVar");
})

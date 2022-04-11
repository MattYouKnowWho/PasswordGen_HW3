// Assignment Code
let generateBtn = document.querySelector("#generate");

//making arrays 
const specialChar = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")","-","_", ":",";",".","'","[","]","{","}","?",","];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];
const number = ['1','2','3','4','5','6','7','8','9','0'];

let thePassword = "";




// Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   if (password === undefined) {

//   }

//   passwordText.value = password;

//   setTimeout(function () {
//     passwordText.value = "...Removing your generated password for safety...";
//     setTimeout(function () {
//       passwordText.value = "...Thank me later...";
//       setTimeout(function () {
//         passwordText.value = "...Removed...";
//       }, 1500)
//     }, 3000)
//  },10000)
// }
function generatePassword () 
{
//prompting user for the length and keys desired for their password
let characterLength = window.prompt("How keys between 8 and 128 characters would you like your password to be made up of?");
let specialChar = window.confirm("Click OK if you want to have special characters in your password. ");
let upperCase = window.confirm("Click OK if you want uppercase letters to be in your password. ")
let lowerCase = window.confirm("Click OK if you want lowercase letters to be in your password. ")
let number = window.confirm("Click OK if you want numbers to be in your password. ")
}

if (characterLength < 8 || characterLength > 128){
  window.alert("password length has to be between 8 and 128 characters");
}
// function generatePassword () {
//   let selectOptions = getUserSelection()

//   if (selectOptions === undefined){
//     return
//    }
//  } 
// function getUserSelection (){


// let { length, lowercase, uppercase, specialCharacters, number } = selectOptions
//   let possibleCharacters = [];
//   let generatedPassword = "";

// if (lowercase){
//   possibleCharacters = possibleChracters.concat(lowerCase)
// }
// }
//   if (uppercase) {
//     possibleCharacters = possibleCharacters.concat(upperCase)
// }

//   if (specialCharacters) {
//     possibleCharacters = possibleCharacters.concat(specialChar)
// }

//   if (number) {
//     possibleCharacters = possibleCharacters.concat(number)
// }

// for (i = 0; i < length + 1; i++) {
//   let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
//   generatedPassword += possibleCharacters[randomCharIndex]  

//

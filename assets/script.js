// Assignment Code
let generateBtn = document.querySelector("#generate");

//making arrays 
const specialChar = [ "~", "!", "@", "#", "$", "%","^","&","*","(",")","-","_", ":",";",".","'","[","]","{","}","?",","];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z'];
const number = ['1','2','3','4','5','6','7','8','9','0'];

let thePassword = "";

function generatePassword () 
{
//prompting user for the length and keys desired for their password
let characterLength = window.prompt("How keys between 8 and 128 characters would you like your password to be made up of?");
let specialChar = window.confirm("Click OK if you want to have special characters in your password. ");
let upperCase = window.confirm("Click OK if you want uppercase letters to be in your password. ")
let lowerCase = window.confirm("Click OK if you want lowercase letters to be in your password. ")
let number = window.confirm("Click OK if you want numbers to be in your password. ")
}
//parameters for user password length
if (characterLength < 8 || characterLength > 128){
  window.alert("password length has to be between 8 and 128 characters");
}

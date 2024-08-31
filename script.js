const textInput=document.getElementById("text-input");
const checkBtn=document.getElementById("check-btn");
const result=document.getElementById("result");
const regex= /[^a-zA-Z0-9]/g;


function renderText(){
  if (textInput.value === ""){
    alert("Please input a value")    
  }
  const renderedText=textInput.value.replace(regex,"").toLowerCase();
  //console.log(`rendered text is ${renderedText}`);
  const reversedText=getReverse(renderedText);
  //console.log(`reversed text is ${reversedText}`);
  if (checkPalindrome(renderedText,reversedText)){
    result.innerText=`${textInput.value} is a palindrome`;
  }
  else{
    result.innerText=`${textInput.value} is not a palindrome`;
  }
}

function getReverse
(textToReverse){
  return textToReverse.split("").reverse().join("")
}

function checkPalindrome(renderedText,reversedText){
  return renderedText===reversedText
}

checkBtn.addEventListener("click",renderText)
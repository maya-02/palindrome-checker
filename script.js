const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const regex = /[^a-zA-Z0-9]/g;

function renderText(event) {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Clear the result display
  result.replaceChildren();

  // Check if input is empty
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  const renderedText = textInput.value.replace(regex, "").toLowerCase();
  // Get reversed text
  const reversedText = getReverse(renderedText);
  
  // Check if the text is a palindrome
  if (checkPalindrome(renderedText, reversedText)) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
  
  // Make sure the result is visible
  result.classList.remove('hidden');
}

function getReverse(textToReverse) {
  return textToReverse.split("").reverse().join("");
}

function checkPalindrome(renderedText, reversedText) {
  return renderedText === reversedText;
}

// Add event listener to the button
checkBtn.addEventListener("click", renderText);

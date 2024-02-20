document.getElementById("check-btn").addEventListener("click", function () {
    var input = document.getElementById("text-input").value.toLowerCase();
    var resultElement = document.getElementById("result");
  
    if (input === "") {
      alert("Please input a value");
      return;
    }
  
    var cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "");
  
    var reversedInput = cleanedInput.split("").reverse().join("");
  
    if (cleanedInput === reversedInput) {
      resultElement.textContent = input + " is a palindrome!";
    } else {
      resultElement.textContent = input + " is not a palindrome.";
    }
  });
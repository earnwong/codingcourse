// DOM Manipulation Examples
function changeText() {
    document.getElementById("example-text").textContent = "The text has been changed!";
  }
  
  function changeColor() {
    document.getElementById("example-text").style.color = "red";
  }
  
  function addParagraph() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph!";
    document.querySelector(".example").appendChild(newParagraph);
  }
  
  // Event Handling Examples
  document.getElementById("alert-button").addEventListener("click", function () {
    alert("Button clicked!");
  });
  
  document.getElementById("color-button").addEventListener("click", function () {
    // Get the current background color
    let currentColor = document.body.style.backgroundColor;

    // Toggle between white and blue
    if (currentColor === "lightblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }
  });
  
  // Form Validation Example
  document.getElementById("example-form").addEventListener("submit", function (event) {
    let input = document.getElementById("example-input").value;
    if (input.trim() === "") {
      alert("Please enter a value!");
      event.preventDefault(); // Prevent form submission
    }
  });
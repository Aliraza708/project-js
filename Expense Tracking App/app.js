var income1 = document.getElementById("income1");
var expence1 = document.getElementById("expence1");
var saving = document.getElementById("saving");

function income(){
    var userInput = document.getElementById("userInput");
    income1.innerText = parseInt(income1.innerText) + parseInt(userInput.value);
    updateSavings();
    userInput.value = ""; // Clear the input field after adding income
}

function expence(){
    var userInput = document.getElementById("userInput");
    var expense = parseInt(userInput.value);
    expence1.innerText = parseInt(expence1.innerText) + expense;
  
    updateSavings();
    userInput.value = ""; // Clear the input field after adding expense
}

function updateSavings(){
    saving.innerText = parseInt(income1.innerText) - parseInt(expence1.innerText);

}

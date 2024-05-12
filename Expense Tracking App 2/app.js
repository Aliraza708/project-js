var saving = document.getElementById("saving");
var expence1 = document.getElementById("expence1");
var income1 = document.getElementById("income1");

function income(){
    var  userInput=Number(document.getElementById("userInput").value)
    income1.innerHTML = userInput;
    savingupdate()
}
function expence(){ 
     var ex =  Number( expence1.innerText) + parseInt(userInput.value)
    if(ex==income1.innerText){
        income1.innerText = "Income Finsh";
       
    }
     expence1.innerText =ex
  
    savingupdate();

}
function savingupdate(){
    var result = expence1.innerText - income1.innerText
    saving.innerText = result
    if(income1.innerText == "Income Finsh"){
        saving.innerText = "Not Balance"
    }

}
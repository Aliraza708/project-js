var saving = document.getElementById("saving");
var expence1 = document.getElementById("expence1");
var income1 = document.getElementById("income1");

function income(){
    var  userInput=document.getElementById("userInput").value;
    var total = Number( income1.innerText )+ Number( userInput)
    income1.innerHTML = total;
    savingupdate()
}
function expence(){ 
    
     var ex =  Number( expence1.innerText) + Number(userInput.value)
    
     expence1.innerText =ex
     if(ex ===income1.innerText){
        income1.innerText = Number("00");
        expence1.innerText = Number("00");
        
    }
  
    savingupdate();

}
function savingupdate(){
    var result = expence1.innerText - income1.innerText
    saving.innerText = result


}
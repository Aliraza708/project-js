var result = document.getElementById("userInput")

function number(num){
    result.value +=num
}
function operated(operate){
    result.value += operate
}
function ClearRest(){
    result.value = ""
}
function calculated(){
    var expression = result.value;
    result.value = eval(expression);
    result.innerText = result.value
}


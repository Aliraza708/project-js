var second = 0 ;
var interval

   
var input = document.getElementById("input");
var secondin = document.getElementById("second");
var result = document.getElementById("result");
function start(){
    document.getElementById("dis").disabled = true
    if(input.value == ""){
        alert("Enter number")
    }
    
   interval = setInterval(function(){
      second++
      secondin.innerText = second;
      
      
   
   if(secondin.innerText >=1000){
   clearInterval(interval);
  
  
    
}


},10)
}

function stop(){
    document.getElementById("dis").disabled = false
    clearInterval(interval);
  if(input.value == secondin.innerText){
        result.innerText = "You win";
        result.style.color = "green";
    }else{
        result.innerText = "You loss";
        result.style.color = "red";
    };
}
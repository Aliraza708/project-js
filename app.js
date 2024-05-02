var hours = document.getElementById("hours");
var mintues = document.getElementById("mintues");
var second = document.getElementById("second");
var current = null
setInterval(function(){
 var currentdate = new Date();
 hours.innerText =currentdate.getHours();
 mintues.innerText = currentdate.getMinutes();
 if(mintues.innerText < 10){
   current = "0"+currentdate.getMinutes();
 } 
 second.innerText = currentdate.getSeconds();
 if(second.innerText <=9){
    second.innerText = "0"+currentdate.getSeconds();
 }


},1000)

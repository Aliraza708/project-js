var contaner = document.getElementById("coni");
var btn = document.getElementById("btn");
var btnn = document.getElementById("btnn");


btn.addEventListener("click",function(){
    contaner.src = "img/on.png";
   btn.style.backgroundColor = "Red"
   btn.style.color = "white"
      
})
btnn.addEventListener("click",function(){
    
    contaner.src = "img/of (1).png"; 
    btn.style.backgroundColor = "Yellow"
    btn.style.color = "green"
       
    
})




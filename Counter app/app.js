
var counter = document.getElementById("counter");


function increment(){
 var count = counter.innerText ;

 count ++
 counter.innerText = count ;

 if(count <= 9){
 
     counter.innerText = "0"+count
 }

} 
function resat (){

    counter.innerText = 0
    
}

function decerment(){
  var count = counter.innerText
  --count
    counter.innerText = count
    
 if(count <= 9 && count > 0 ){
 
    counter.innerText = "0"+count
}
if(count < 0){
  
    counter.innerText = 0

}
}
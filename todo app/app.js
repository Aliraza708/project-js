 var todo_add = document.getElementById("todo_add");
 var delect = document.getElementById("delect");
 var list = document.getElementById("list");
 var user = document.getElementById("user");

todo_add.addEventListener("click",function(){
     todo_add.style.backgroundColor = "green"
    if(!user.value) return alert("value dalo input main");
  
    var li = `<li id ="span"><span>${user.value}</span>
    <button class= "but" onclick= "edit(this)"><img src="img/Screenshot_20240524-145715~3.jpg" alt="" class= "img" srcset=""></button> <button class= "but" onclick= "remove(this)"><img src="img/Screenshot_20240524-145715~2.jpg" alt="" class= "img" >
    </button></li>`
    list.innerHTML += li;
    user.value = ""
   
})
function remove(element){
      
//    console.log("element>", element.parentElement)
    element.parentElement.remove();
}
function edit(element){
    element.previousElementSibling . innerText;
    var update = element.previousElementSibling.innerText;
    var user = prompt("Edit",update );
    
    element.previousElementSibling.innerText = user
}

delect.addEventListener("click",function(){
  
 
    list.innerText = ""
    user.value = ""
    delect.style.backgroundColor = "red"
})


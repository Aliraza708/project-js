var sm = document.getElementsByClassName("box");
var question = [
" 1 What is the purpose of the <!DOCTYPE html> declaration in an HTML document?",
" 2 How do you create an ordered list and an unordered list in HTML?",
" 3 What are semantic HTML elements, and why are they important?",
" 4 How can you embed an image in an HTML page?",
" 5 What is the difference between an HTML attribute and an HTML tag?" ,
" 6 What is the purpose of the <!DOCTYPE html> declaration in an HTML document?",
" 7 How do you create an ordered list and an unordered list in HTML?",
" 8 What are semantic HTML elements, and why are they important?",
" 9 How can you embed an image in an HTML page?",
" 10 What is the difference between an HTML attribute and an HTML tag?"]
 
for(var i = 0 ; i < sm.length; i++){
    sm[i].addEventListener("click",function(){
    update(),
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.fontSize = "18px"
        var ques = question;
        ques = ques[Math.floor( Math.random()*10)]
        this.innerHTML = ques ;

    })
}
function update(){
        for(var i = 0 ; i < sm.length; i++){
        sm[i].style.backgroundColor = "black";
        sm[i].style.color = "white";
        // this.style.fontSize = "18px";
        sm[i].innerHTML = i +1
        
    }}
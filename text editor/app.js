var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var FontFamily = document.getElementById("FontFamily");
var Fontsize = document.getElementById("Fontsize");

var under = document.getElementById("under");
var text = document.getElementById("text");
var touppper = document.getElementById("touppper");
var tolower = document.getElementById("tolower");
var cancel = document.getElementById("cancel");

var user = document.getElementById("user");


bold.addEventListener("click",function(){
    user.style.fontWeight = "bold"

});

italic.addEventListener("click",function(){
    user.style.fontStyle = "italic"
});

FontFamily.addEventListener("click",function(){
    user.style.fontFamily = 'cursive'
});

colors.addEventListener("click",function(){
    user.style.color = 'red'
});
Fontsize.addEventListener("click",function(){
    user.style.fontSize = '50px'
});




under.addEventListener("click",function(){
    user.style.textDecoration = "underline"

});

text.addEventListener("click",function(){
    user.style.textAlign = "right"
});

touppper.addEventListener("click",function(){
    user.style.textTransform = "uppercase"
});

tolower.addEventListener("click",function(){
    user.style.textTransform = "lowercase"
});
cancel.addEventListener("click",function(){
    user.style =""
});
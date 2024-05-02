var hours = document.getElementById("hours");
var mintues = document.getElementById("mintues");
var second = document.getElementById("second");

setInterval(function(){
 var currentdate = new Date();
 hours.innerText = currentdate.getHours()-12;
 mintues.innerText = currentdate.getMinutes();
 second.innerText = currentdate.getSeconds();
 if(second.innerText <=9){
    second.innerText = "0"+currentdate.getSeconds();
 }


},1000)

function calculateAge(dateOfBirth){
    // Convert date of birth string to Date object
    var dob = new Date(dateOfBirth);
   
    // Get current date
    var now = new Date();
    
    // Calculate the difference in milliseconds between the two dates
    var diffMilliseconds = now - dob;
    
    // Convert milliseconds to seconds
    var diffSeconds = diffMilliseconds / 1000;
 
    // Convert seconds to months
    var diffMonths = diffSeconds / (60 * 60 * 24 * 30.44); // Average number of seconds in a month
    
    // Convert months to years and months
    var years = Math.floor(diffMonths / 12);
    var months = Math.floor(diffMonths % 12);
 
    return {
        years: years,
        months: months,
        seconds: diffSeconds
    };
   
 }
 var userInput = prompt("Enter your Date of Birth")
 
 // Example usage:
 var dob = userInput ; // Example date of birth in yyyy-mm-dd format
 var age = calculateAge(dob);

 var year1 = document.getElementById("year1");
 var month1 = document.getElementById("month1");
 var second1 = document.getElementById("second1")

 year1.innerText = ("total years : "+age.years );
 month1.innerText =("total months : "+age.months);
 second1.innerText =("total seconds : "+age.seconds);
   

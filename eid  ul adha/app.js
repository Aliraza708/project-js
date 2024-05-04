// Set the date for June 1, 2024
var targetDate = new Date("June 16, 2024 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Find the time difference between now and the target date
  var distance = targetDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + " day : " + hours + " hours : "
  + minutes + " minutes : " + seconds + " seconds  ";
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's June 2024!";
  }
}, 1000);

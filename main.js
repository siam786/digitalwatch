function updateClock(){
  var time = document.querySelector("#time");
  // Get the current time
 let date = new Date();
  // Format the time into hours, minutes, and seconds
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 let day_night = "AM";
 // Add leading zeros if necessary
 if (hours > 12) {
   day_night = "PM";
   hours = hours - 12;
 }
 if (minutes < 10) {
   minutes = "0" + minutes;
 }
 if (seconds < 10) {
   seconds = "0" + seconds;
 }
 time.textContent = hours + ":" + minutes + ":" + seconds+ " " + day_night;
}

 // Call the function once to initialize the clock
updateClock()
// Update the clock every second using setInterval()
setInterval(updateClock,1000);


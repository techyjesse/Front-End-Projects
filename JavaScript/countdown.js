// Countdown to this date and time
var countDownDate = new Date("Apr 20, 2022 16:20:00").getTime();

//Runs function every second
var myfunc = setInterval(function() {
    
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    //Calculates days, hours, minutes, seconds left
    var days = Math.floor(timeLeft / (1000 * 60 *60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " Days" + " " + "|"
    document.getElementById("hours").innerHTML = hours + " Hours" + " " + "|"
    document.getElementById("mins").innerHTML = minutes + " Minutes" + " " + "|"
    document.getElementById("secs").innerHTML = seconds + " Seconds" 

    if (timeLeft <= 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Time to Party!"
    }

    }, 1000)



document.getElementById("days").innerHTML = days + "Days"
document.getElementById("hours").innerHTML = hours + "Hours"
document.getElementById("mins").innerHTML = minutes + "Minutes"
document.getElementById("secs").innerHTML = seconds + "Seconds"
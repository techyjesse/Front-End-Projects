const switchBtn = document.getElementById("twelveHourBtn");
let twelveHourBtn = document.getElementById("twelveHourBtn");
let getTime = document.getElementById("time");
let isTwelveHour = true;
let amPm = "AM";

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    let hours = "12";
    let today = new Date();
    let h = today.getHours();
}
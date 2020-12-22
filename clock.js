setInterval(getCurrentTime, 1000);

function getCurrentTime() {

var currentTime = new Date();
// var a = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
var a = currentTime.toLocaleTimeString('en-US');
document.getElementById("time").innerHTML = a;
}

var body = document.body;
var myDiv = document.getElementById("red");

myDiv.addEventListener("mouseover", function() {
    body.style.backgroundColor = "red";
});

myDiv.addEventListener("mouseout", function() {
    body.style.backgroundColor = "white";
});
document.write("Hello")

function updateClock() {
    var time = new Date();
    var real_time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.getElementById('RealTime').innerHTML = real_time;
}
function Update(){
    setInterval(updateClock, 1000);
}
  
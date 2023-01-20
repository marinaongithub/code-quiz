

var start = document.getElementById("start");
var time = document.getElementById("time");

var timeLeft = 76; 

//when I clcik the start button the timer starts
start.addEventListener("click", function() {
    setTime();
})

function setTime() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
        
    }, 1000)
}



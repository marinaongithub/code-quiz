

var start = document.getElementById("start");
var time = document.getElementById("time");
var questionDiv = document.getElementById("questions")
var question = document.getElementById("question-title");
var startScreen = document.getElementById("start-screen");
var choices = document.getElementById("choices");

var timeLeft = 76; 

// Timer starts when button clicked
start.addEventListener("click", function() {
    setTime();
    initQuestion();
    nextQuestion();
})

// Handles the timer
function setTime() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }

    }, 1000)
}

function initQuestion() {

    // remove start screen
    startScreen.textContent = "";

    // show questions 
    questionDiv.setAttribute("class", "show");

    // populate with current question
    question.textContent = questions[0];          // to change

    // populate list of choices

        // creates ul tag
    ulTag = document.createElement("ul");

    bu1 = document.createElement("button");
    bu2 = document.createElement("button");
    bu3 = document.createElement("button");
    bu4 = document.createElement("button");

        // array to store all the button tag 
    var buArr = [bu1, bu2, bu3, bu4];

        // loops through the buttons array to append each of them to the ul tag with content
    for (var i = 0; i < responses.length; i++) {
        ulTag.appendChild(buArr[i]);
        buArr[i].textContent = responses[i];
    }


}

// Render the question + choices
function nextQuestion() {

    // remove start screen
    startScreen.textContent = "";

    // show questions 
    questionDiv.setAttribute("class", "show");

    // populate with current question
    question.textContent = questions[0];          // to change

    // populate list of choices

        // creates ul tag
    ulTag = document.createElement("ul");

    bu1 = document.createElement("button");
    bu2 = document.createElement("button");
    bu3 = document.createElement("button");
    bu4 = document.createElement("button");

        // array to store all the button tag 
    var buArr = [bu1, bu2, bu3, bu4];

        // loops through the buttons array to append each of them to the ul tag with content
    for (var i = 0; i < responses.length; i++) {
        ulTag.appendChild(buArr[i]);
        buArr[i].textContent = responses[i];
    }

        // when I answer a question then I am presented with another question



}





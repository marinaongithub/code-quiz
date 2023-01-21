var start = document.getElementById("start");
var time = document.getElementById("time");
var questionDiv = document.getElementById("questions")
var question = document.getElementById("question-title");
var startScreen = document.getElementById("start-screen");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback")

var timeLeft = 76; 

// tracks index of the quizz array
var index = 0;

// current object from the quizz array
var currQuizz;

// Timer starts when button clicked
start.addEventListener("click", function() {
    setTime();
    initQuestion();
});

// Next question when clic on a response
questionDiv.addEventListener("click", function (event) {
    var element = event.target;
    currQuizz = quizz[index];

    if (element.matches("button")) {

        if (element.textContent === currQuizz.answer) {
            feedback.setAttribute("class", "feedback");
            feedback.textContent = "Correct!";
        }

        else {
            feedback.setAttribute("class", "feedback");
            feedback.textContent = "False!";
            timeLeft -= 10;
        }

        index++;
        currQuizz = quizz[index];

        if (index < quizz.length) {
            nextQuestion(currQuizz);
        }
        else {

        }
        
    }
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

// Render the 1st question + choices

function initQuestion() {

    // remove start screen
    startScreen.textContent = "";

    // show questions 
    questionDiv.setAttribute("class", "show");

    // populate with current question
    question.textContent = quizz[0].question;  // to change
    console.log(quizz[0].question)          

    // populate list of choices
        // creates ul tag
    ulTag = document.createElement("ul");

    bu1 = document.createElement("button");
    bu2 = document.createElement("button");
    bu3 = document.createElement("button");
    bu4 = document.createElement("button");

        // array to store all the button tag 
    var buArr = [bu1, bu2, bu3, bu4];
        // adds ul tag to the choice div
    choices.appendChild(ulTag);

        // loops through the buttons array to append each of them to the ultag with content from the corresponding 
        // options from the quizz array
    for (var i = 0; i < quizz[0].options.length; i++) {
        ulTag.appendChild(buArr[i]);
        buArr[i].textContent = quizz[0].options[i];
    }
}

// when I answer a question then I am presented with another question
function nextQuestion(currQuizz) {

    // show questions 
    questionDiv.setAttribute("class", "show");
    
    console.log(currQuizz);
        // populate with current question
    question.textContent = currQuizz.question;

        // array to store all the button tag 
    var buArr = [bu1, bu2, bu3, bu4];

        // loops through the buttons array to append each of them to the ul tag with content
    for (var i = 0; i < currQuizz.options.length; i++) {
        // ulTag.appendChild(buArr[i]);
        buArr[i].textContent = currQuizz.options[i];
        // buArr[i].setAttribute("data-index", i);
    }
}





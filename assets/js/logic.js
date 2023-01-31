var start = document.getElementById("start");
var time = document.getElementById("time");
var questionDiv = document.getElementById("questions")
var question = document.getElementById("question-title");
var startScreen = document.getElementById("start-screen");
var choices = document.getElementById("choices");
var feedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");

var timeLeft = 75;
var score = 0;

// tracks whether the game is ongoing or over
var game;

// tracks index of the quiz array
var index;

// current object from the quiz array
var currQuiz;

// Timer starts when button clicked
start.addEventListener("click", function() {
    initQuestion();
    setTime();
});

// Next question when clic on a response
    questionDiv.addEventListener("click", function (event) {
        var element = event.target;
        currQuiz = quiz[index];

        if (element.matches("button")) {

            feedback.setAttribute("class", "feedback");

            // correct answer selected
            if (element.textContent === currQuiz.answer) {
               
                feedback.textContent = "Correct!";
                score++;
            }

            // wrong answer selected
            else {
                
                feedback.textContent = "Wrong!";

                if (timeLeft > 10) {
                    timeLeft -= 10;
                }
                // when the timer reach 0 the game is over
                else {
                    gameOver();
                }
            }

            // hide feedback after 1 seconde
            setTimeout(function () {feedback.setAttribute("class", "feedback hide")}, 750);    

            index++;

            currQuiz = quiz[index];

            if (index < quiz.length) {
                nextQuestion(currQuiz);
            }
        
            // when all questions are answered the game stops
            else {
                gameOver();
            }
        }
    }
)

// Handles the timer
function setTime() {
    var timeInterval = setInterval(function() {

        time.textContent = timeLeft;
        timeLeft--;

        // when the timer reach 0 the game is over
        if (timeLeft === 0) {

            clearInterval(timeInterval);
            gameOver();
        }
       
        // when all questions are answered clear the interval or timer is almost up
        else if (!game) {
            clearInterval(timeInterval);
        }

    }, 1000)
}

// Render the 1st question + choices
function initQuestion() {

    index = 0;
    game = true;

    // remove start screen
    startScreen.textContent = "";

    // show questions 
    questionDiv.setAttribute("class", "show");

    // populate with current question
    question.textContent = quiz[index].question;  // to change?

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
        // options from the quiz array
    for (var i = 0; i < quiz[0].options.length; i++) {
        ulTag.appendChild(buArr[i]);
        buArr[i].textContent = quiz[0].options[i];
    }
}

// when I answer a question then I am presented with another question
function nextQuestion(currQuiz) {
    
        // populate with current question
    question.textContent = currQuiz.question;

        // array to store all the button tag 
    var buArr = [bu1, bu2, bu3, bu4];

        // loops through the buttons array to append each of them to the ul tag with content
    for (var i = 0; i < currQuiz.options.length; i++) {
        buArr[i].textContent = currQuiz.options[i];
    }
};

function gameOver() {

    game = false;
    questionDiv.setAttribute("class", "hide");
    endScreen.setAttribute("class", "show");
    // feedback.setAttribute("class", "feedback hide");
    finalScore.textContent = score;   


    submit.addEventListener ("click", function (event) {
        event.preventDefault();

        localStorage.setItem("initials", initials.value); 
        localStorage.setItem("score", score); 

        window.open("highscores.html");

    })
}






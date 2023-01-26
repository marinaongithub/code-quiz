var highscores = document.getElementById("highscores");

var newLog;

// will temporarly store the scores from the local storage + the new logged score
var scores = [];


scoreLog();


function scoreLog() {

    // stores the scores from the local storage into an object
    var scoreLog = JSON.parse(localStorage.getItem("storeLog"));


    // Only if there is a score input
    if (localStorage.getItem("initials") !== null) {

        // retrieve the initials and score from the new user input previously stored into the local storage
        // and stores them into an object
        newLog = { 
            initials: localStorage.getItem("initials"),
            score : localStorage.getItem("score"),
        }
        // clears the local storage of the initials to avoid duplicate log in the array
        localStorage.removeItem("initials");

        // if the local storage is not empty iterate throught the array and push each element to the scores array
        if (scoreLog !== null) {
            
            for (var i = 0; i < scoreLog.length; i++) {
            
                scores.push(scoreLog[i]);
            }
        }   
        
        // push this object to the scores array that temporarly stores all the score logs
        scores.push(newLog);

        // put in local storage all the score logs saved into the scores array
        localStorage.setItem("storeLog", JSON.stringify(scores));
    }    

    // appends scores to the html
    if (highscores !== null) {
        var logArr = JSON.parse(localStorage.getItem("storeLog"));
        for (var i = 0; i < logArr.length; i++) {
            liEl = document.createElement('li');
            liEl.textContent = `${logArr[i].initials} - ${logArr[i].score}`;
            highscores.appendChild(liEl);
            }
        }
}

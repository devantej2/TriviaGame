$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let timeRemaining = 30;
    let intervalID;


    const triviaQuestions = [
        { question: "How many teams are in the NFL?", choices: [15, 32, 20, 24], answer: 1 },
        { question: "What division(s) make up the NFL?", choices: ["NFC and AFC", "North and South", "East and West", "NFL and AFL"], answer: 0 },
        { question: "Who holds the all-time passing record?", choices: ["Tom Brady", "Brett Farve", "Drew Brees", "Dan Marino"], answer: 2 },
        { question: "Who was the winner of Super Bowl LIII?", choices: ["Philadelphia Eagles", "Denver Broncos", "New England Patriots", "Arizona Cardinals"], answer: 2 },
        { question: "What is the name of the Green Bay Packers' Stadium?", choices: ["Lambeau Field", "Soldier Field", "Mercedes-Benz Stadium", "Arrowhead Stadium"], answer: 0 }
    ];

    for (let i = 0; i < triviaQuestions.length; i++) {
        const choicesArray = triviaQuestions[i].choices;
        for (let j = 0; j < choicesArray.length; j++) {
            console.log(choicesArray[j]);
        }
        console.log(triviaQuestions[i].answer);
    }

    $("#startGame").on("click", timeLeft)
    // {
    // $(this).hide();
    // $("#submit").html("<button id='done' class='btn'>Done</button>");
    // countDown();
    // timeRemaining();

    // for (let i = 0; i < triviaQuestions.length; i++) {
    //     const displayQuestion = $("<div class=question" + [i + 1] + ">");
    //     displayQuestion.text(triviaQuestions[i].question);
    //     const choicesArray = triviaQuestions[i].choices;
    //     for (let j = 0; j < choicesArray.length; j++) {
    //         const displayChoices = $("<div id=answer>");
    //         displayChoices.html($("<input type='radio' name='answer' value=" + [j] + " >" + "<label>" + triviaQuestions[i].choices[j] + "</label>"));
    //         displayQuestion.append(displayChoices);
    //     }

    //     $(".game").append(displayQuestion);
    // }

    function timeLeft() {
        clearInterval(intervalID);
        intervalID = setInterval(countDown, 1000);

        $(this).hide();
        $("#submit").html("<button id='done' class='btn'>Done</button>");
        countDown();

        for (let i = 0; i < triviaQuestions.length; i++) {
            const displayQuestion = $("<div class=question" + [i + 1] + ">");
            displayQuestion.text(triviaQuestions[i].question);
            const choicesArray = triviaQuestions[i].choices;
            for (let j = 0; j < choicesArray.length; j++) {
                const displayChoices = $("<div id=answer>");
                displayChoices.html($("<input type='radio' name='answer' value=" + [j] + " >" + "<label>" + triviaQuestions[i].choices[j] + "</label>"));
                displayQuestion.append(displayChoices);
            }

            $(".game").append(displayQuestion);
        }

    }

    function countDown() {

        timeRemaining--;

        $("#timeRemaining").html("<h3> Time Remaining: " + timeRemaining + "</h3>");

        if (timeRemaining === 0) {

            stop();

            alert("Time is Up!");

            displayResults();

        }

    }

    // function displayResults(){


    // }

    // function scoreCalc(){

    // }

    function stop() {

        clearInterval(intervalID);
    }
});
timeLeft();
// });


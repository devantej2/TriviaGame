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

    $("#startGame").on("click", timeLeft);


    function timeLeft() {
        clearInterval(intervalID);
        intervalID = setInterval(countDown, 1000);

        $(this).hide();
        countDown();

        for (let i = 0; i < triviaQuestions.length; i++) {
            const displayQuestion = $("<div class=question" + [i + 1] + ">");
            displayQuestion.text(triviaQuestions[i].question);
            const choicesArray = triviaQuestions[i].choices;
            for (let j = 0; j < choicesArray.length; j++) {
                const displayChoices = $("<div id=answer " + i + ">");
                displayChoices.html($("<input type='radio' name=answer" + [i] + " value=" + [j] + " >" + "<label>" + triviaQuestions[i].choices[j] + "</label>"));
                displayQuestion.append(displayChoices);
            }

            $(".game").append(displayQuestion);
        }

        $("#submit").html("<button id='finish' class='btn'>Submit Answers</button>");

        $("#finish").on("click", function () {
            stop();
            $(".game").empty();
            $("#submit").hide();
            scoreCheck();

            // Display 
            displayResults();
        });
    }

    function countDown() {

        timeRemaining--;

        $("#timeRemaining").html("<h3> Time Remaining: " + timeRemaining + "</h3>");

        if (timeRemaining === 0) {

            stop();

            alert("Time is Up!");
            $(".game").empty();
            $("#submit").hide();
            scoreCheck();
            displayResults();

        }

    }

    function displayResults() {
        $("#results").html("<h3>Here are your results!</h3>");
        $("#correct").html("Correct Answers: " + correct);
        $("#incorrect").html("Incorrect Answers: " + incorrect);
        $("#unanswered").html("Unanswered: " + unanswered);

    }

    function scoreCheck() {


        let userAnswer1 = $("input[name='answer0']:checked").val();
        let userAnswer2 = $("input[name='answer1']:checked").val();
        let userAnswer3 = $("input[name='answer2']:checked").val();
        let userAnswer4 = $("input[name='answer3']:checked").val();
        let userAnswer5 = $("input[name='answer4']:checked").val();

        // Question 1
        if (userAnswer1 === undefined) {

            unanswered++;
        }
        else if (userAnswer1 == triviaQuestions[0].answer) {

            correct++;
        }
        else {

            incorrect++;
        }

        // Question 2
        if (userAnswer2 === undefined) {

            unanswered++;
        }
        else if (userAnswer2 == triviaQuestions[1].answer) {

            correct++;
        }
        else {

            incorrect++;
        }

        // Question 3
        if (userAnswer3 === undefined) {

            unanswered++;
        }
        else if (userAnswer3 == triviaQuestions[2].answer) {

            correct++;
        }
        else {

            incorrect++;
        }

        // Question 4
        if (userAnswer4 === undefined) {

            unanswered++;
        }
        else if (userAnswer4 == triviaQuestions[3].answer) {

            correct++;
        }
        else {

            incorrect++;
        }

        // Question 5
        if (userAnswer5 === undefined) {

            unanswered++;
        }
        else if (userAnswer5 == triviaQuestions[4].answer) {

            correct++;
        }
        else {

            incorrect++;
        }
    }

    function stop() {

        clearInterval(intervalID);
    }
});


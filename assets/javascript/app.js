var questions = [{
    "question": "What color does red and blue create if put together?",
    "option1" : "Purple",
    "option2" : "yellow",
    "option3" : "Blue again",
    "option4" : "No idea",
    "answer" : "1"
}, {
    "question": "What was the sound Pikachu made when it talked?",
    "option1" : "chu",
    "option2" : "pickachu",
    "option3" : "Picka pi",
    "option4" : "All the above",
    "answer" : "4"
}, {
    "question": "what does 2 + 2 - 2 * 2 equal?",
    "option1" : "4",
    "option2" : "0",
    "option3" : "6",
    "option4" : "8",
    "answer" : "2"
}, {
    "question": "What does Starbucks sell?",
    "option1" : "Sandwiches",
    "option2" : "cake",
    "option3" : "Coffee",
    "option4" : "All the above",
    "answer" : "4"
}, {
    "question": "How many legs does a typical chair have?",
    "option1" : "4",
    "option2" : "1",
    "option3" : "3",
    "option4" : "2",
    "answer" : "1"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = $('#quizContainer');
var questionEl = $('#question');
var opt1 = $('#opt1');
var opt2 = $('#opt2');
var opt3 = $('#opt3');
var opt4 = $('#opt4');
var nextButton = $('#nextButton');
var resultCont = $('#result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.text((questionIndex + 1) + '. ' + q.question);
    opt1.text(q.option1);
    opt2.text(q.option2);
    opt3.text(q.option3);
    opt4.text(q.option4);
}

function loadNextQuestion () {
    var selectedOption = $('input[type=radio]:checked').val();
    console.log(selectedOption);
    if(!selectedOption) {
        alert('Please select an answer!');
        return;
    }
    var answer = selectedOption;
    if(questions[currentQuestion].answer == answer) {
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.text('Finish');
    }
    if(currentQuestion == totQuestions) {
        // $('.container').style.display = 'none';
        console.log(resultCont);
        resultCont.css("visibility", "visible"); 
        resultCont.text('Your Score: ' + score);
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

// STILL NEED TO HAVE A PAGE LOAD AFTER ANSWERING THE FINAL QUESTION
// NEED THE FINAL PAGE TO DISPLAY THE SCORE AFTER COMPLETING QUESTIONS AND AS THE TIME RUNS OUT
// RESET GAME AFTER A CERTAIN AMOUNT OF TIME


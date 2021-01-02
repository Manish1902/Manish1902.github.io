

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const levelBox = document.querySelector(".level-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let attempt = 0;

//push the question into availableQuestions
function setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++){
		availableQuestions.push(quiz[i]);
	}
}

// set question number, question and options
function getNewQuestion(){
	//set question number
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of 5";
	
	//set question text
	// get random question
	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	// get the position of 'questionIndex' from the availableQuestion Array
	const index1 = availableQuestions.indexOf(questionIndex);
	// remove the 'questionIndex' from the availableQuestion Array,so no repeat
	availableQuestions.splice(index1,1);
	// set options
	// get the length of options 
	const optionLen = currentQuestion.options.length;
	//push options into availableQuestions Array
	for(let i=0; i<optionLen; i++){
		availableOptions.push(i);
	}
	optionContainer.innerHTML = '';
	let animationDelay = 0.15;
	//create options in html
	for(let i=0; i<optionLen; i++){
		// random option
		const optonIndex = availableOptions[Math.floor(Math.random()* availableOptions.length)];
		// get the position of 'optonIndex' from the availableOptions Array
		const index2 = availableOptions.indexOf(optonIndex);
		// remove the 'optonIndex' from the availableOptions Array, so option does not repeat
		availableOptions.splice(index2,1);
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optonIndex];
		option.id = optonIndex;
		option.style.animationDelay = animationDelay + 's';
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionContainer.appendChild(option);
		option.setAttribute("onclick","getResult(this)");
	}

	questionCounter++
}

// get the result of current attempt question
function getResult(element){
	const id = parseInt(element.id);
	// get the answer by comparing the id of cliicked option
	if(id === currentQuestion.answer){
		// set green color to correct option
		element.classList.add("correct");
		// add the indicator to correct mark
		updateAnswerIndicator("correct");
		correctAnswer++;
	}
	else{
		// set red color to wrong option
		element.classList.add("wrong");
		// add the indicator to wrong mark
		updateAnswerIndicator("wrong");

		// if the answer is incorrect then show correct answer
		const optionLen = optionContainer.children.length;
		for (let i=0; i<optionLen; i++){
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
				optionContainer.children[i].classList.add("correct");
			}
		}
	}
	attempt++;
	unclickableOptions();
}

// make all the options unclickable once the user select a option
function unclickableOptions(){
	const optionLen = optionContainer.children.length;
	for(let i=0; i<optionLen; i++){
		optionContainer.children[i].classList.add("already-answered");

	}
}

function answersIndicator(){
	answersIndicatorContainer.innerHTML = '';
	const totalQuestion = 5;
	for(let i=0; i<totalQuestion; i++){
		const indicator = document.createElement("div");
		answersIndicatorContainer.appendChild(indicator);
	}
}

function updateAnswerIndicator(markType){
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
	if(questionCounter === 5){
		quizOver();
	}
	else{
		getNewQuestion();
	}
}

function quizOver(){
	// hide quiz Box
	quizBox.classList.add("hide");
	// show result box
	resultBox.classList.remove("hide");
	quizResult();
}
// get the quiz Result
function quizResult(){
	resultBox.querySelector(".total-question").innerHTML = 5;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
	resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
	const percentage = (correctAnswer/5)*100;
	resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML = correctAnswer + " / " + 5;
}

function resetQuiz(){
	questionCounter = 0;
	correctAnswer = 0;
	attempt = 0;
	availableQuestions = [];
	availableOptions = [];
}

function tryAgainQuiz(){
	// hide the resultBox
	resultBox.classList.add("hide");
	// show the quizBox
	quizBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}

function goToHome(){
	// hide result Box
	resultBox.classList.add("hide");
	// show home box 
	homeBox.classList.remove("hide");
	resetQuiz();
}

// #### STARTING POINT ####

function selectLevel(){
	//hide home box
	homeBox.classList.add("hide");
	// show level selector box
	levelBox.classList.remove("hide");
}

function levelEasy(){
	quiz=quizA;
	startQuiz();
}
function levelMedium(){
	quiz=quizB;
	startQuiz();
}
function levelHard(){
	quiz=quizC;
	startQuiz();
}

function startQuiz(){

	// hide home box
	levelBox.classList.add("hide");
	//homeBox.classList.add("hide");
	// show quiz box
	quizBox.classList.remove("hide");
	//first we will set all questions in availableQuestions Array
	setAvailableQuestions();
	//second we will call getNewQuestion(); function
	getNewQuestion();
	// to create indicators of answers
	answersIndicator();

}

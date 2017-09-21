(function(window){
	var question = document.querySelector('[data-question="text"]');
	var optionA = document.querySelector('[data-option="A"]');
	var optionB = document.querySelector('[data-option="B"');
	var optionC = document.querySelector('[data-option="C"');
	var optionD = document.querySelector('[data-option="D"');

	var submitBtn = document.querySelector('[data-btn="submit"]');

	var answerA = document.querySelector('#answerA');
	var answerB = document.querySelector('#answerB');
	var answerC = document.querySelector('#answerC');
	var answerD = document.querySelector('#answerD');

	var allInput = document.getElementsByClassName("css-checkbox");

	var questionPlace = 0;
	var score = 0;

	var Question = function(h1, firstVal, secondVal, thirdVal, fourthVal){
		this.h1 = h1;
		this.firstVal = firstVal;
		this.secondVal = secondVal;
		this.thirdVal = thirdVal;
		this.fourthVal = fourthVal;
	}
		
	var firstQuestion = new Question("Test Question1", ["A", false], ["B", false], ["C", false], ["D", true]);
	var secondQuestion = new Question("Test Question2", ["A", false], ["B", false], ["C", true], ["D", false]);
	var thirdQuestion = new Question("Test Question3", ["A", false], ["B", true], ["C", false], ["D", false]);
	var fourthQuestion = new Question("Test Question4", ["A", true], ["B", false], ["C", false], ["D", false]);

    function checkAnswer() {
        for (var i = 0; i < allInput.length; i++) {
            if (allInput[i].checked === true) {
                if (allInput[i].value == "true") {
                    score++;
                    allInput[i].checked = false
                }
                else{
                	allInput[i].checked = false;
                }
            }
        }
    }

	function changeQuestion(object){

		question.innerHTML = object.h1;

		optionA.innerHTML = object.firstVal[0];
		answerA.value = object.firstVal[1];

		optionB.innerHTML = object.secondVal[0];
		answerB.value = object.secondVal[1];

		optionC.innerHTML = object.thirdVal[0];
		answerC.value = object.thirdVal[1];

		optionD.innerHTML = object.fourthVal[0];
		answerD.value = object.fourthVal[1];

		questionPlace++;
	}

	submitBtn.addEventListener('click', function(e){
		e.preventDefault();
		if(questionPlace === 1 ){
			checkAnswer();
			changeQuestion(secondQuestion);
			return;
		}
		if(questionPlace === 2){
			checkAnswer();
			changeQuestion(thirdQuestion);
			return;
		}
		if(questionPlace === 3){
			checkAnswer();
			changeQuestion(fourthQuestion);
			return;
		}
		if(questionPlace === 4){
			checkAnswer();
			console.log(score);
			return;
		}
	});

	changeQuestion(firstQuestion);
})(window);
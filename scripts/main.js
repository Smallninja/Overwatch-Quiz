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

	var questionPlace = 1;

	var Question = function(h1, firstVal, secondVal, thirdVal, fourthVal){
		this.h1 = h1;
		this.firstVal = firstVal;
		this.secondVal = secondVal;
		this.thirdVal = thirdVal;
		this.fourthVal = fourthVal;
	}
		
	var firstQuestion = new Question("Test Question1", ["A", 0], ["B", 0], ["C", 0], ["D", 1]);
	var secondQuestion = new Question("Test Question2", ["A", 0], ["B", 0], ["C", 1], ["D", 0]);
	var thirdQuestion = new Question("Test Question3", ["A", 0], ["B", 1], ["C", 0], ["D", 0]);
	var fourthQuestion = new Question("Test Question4", ["A", 1], ["B", 0], ["C", 0], ["D", 0]);


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
		if(questionPlace === 2 ){
			changeQuestion(secondQuestion);
			return;
		}
		if(questionPlace === 3){
			changeQuestion(thirdQuestion);
			return;
		}
		if(questionPlace === 4){
			changeQuestion(fourthQuestion);
			return;
		}
	});

	changeQuestion(firstQuestion);

})(window);
"use strict";

var startObjectionTest = function() {
	var isValidObjectionTest_1 = true;
	var isValidObjectionTest_2 = true;
	var isValidObjectionTest_3 = true;
	var isValidObjectionTest_3b = true;
	var isValidObjectionTest_4 = true;
	var isValidObjectionTest_5 = true;
	var progressStatus = "";

	while(isValidObjectionTest_1) {
		var progressStatus = "1/6\n";
		var testObjectionText = "Is that a reason this causes harm or moves us backward? {{ Type \"1\" }}\n…OR…\nIs it a better idea or something else we should consider as well? {{ Type \"2\" }}";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "1":
				response = "You said that the proposal in its current form would cause harm or move us backward. Moving to next objection validation test.";
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_1 = false;
				break;
			case "2":
				response = "You said that your objection is a better idea or something else we should consider as well. Objection is invalid."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_1 = false;
				isValidObjectionTest_2 = false;
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
			default:
				response = "Not valid input. Need \"1\" or \"2\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_1 = false;
				isValidObjectionTest_2 = false;
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
		}
	}

	while(isValidObjectionTest_2) {
		var progressStatus = "2/6\n";
		var testObjectionText = "Would that issue be created by adopting this proposal? {{ Type \"1\" }}\n…OR…\nIs it already an issue, even if we don’t adopt this proposal? {{ Type \"2\" }}";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "1":
				response = "You said that the proposal in its current form would create a new tension. Moving to next objection validation test."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_2 = false;
				break;
			case "2":
				response = "You said that your objection is related to something that is already a tension and that adopting this proposal would not affect that particular tension. Objection is invalid."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_2 = false;
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
			default:
				response = "Not valid input. Need \"1\" or \"2\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_2 = false;
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
		}
	}

	while(isValidObjectionTest_3) {
		var progressStatus = "3/6\n";
		var testObjectionText = "Is that based on presently-known data? {{ Type \"1\" }}\n…OR…\nAre you anticipating that it might happen? {{ Type \"2\" }}";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "1":
				response = "You said that your objection is based on presently-known data. Skipping 3b – Moving to next objection validation test."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				break;
			case "2":
				response = "You said that you are anticipating that something might happen. Moving to 3b objection validation test."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_3 = false;
				break;
			default:
				response = "Not valid input. Need \"1\" or \"2\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_3 = false;
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
		}
	}

	while(isValidObjectionTest_3b) {
		var progressStatus = "4/6\n";
		var testObjectionText = "If anticipated: is there a reason we can’t adapt once we get more data? {{ Type \"1\" }}\n…OR…\nIs it safe enough to try, knowing we can revisit it anytime? {{ Type \"2\" }}";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "1":
				response = "You said that there is a reason we can’t adapt proposal in current form once we get more data. Moving to next objection validation test."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_3b = false;
				break;
			case "2":
				response = "You said that the proposal in its current form is safe enough to try, knowing we can revisit it anytime. Objection is invalid."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
			default:
				response = "Not valid input. Need \"1\" or \"2\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_3b = false;
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
		}
	}

	while(isValidObjectionTest_4) {
		var progressStatus = "5/6\n";
		var testObjectionText = "Does it limit one of your Roles? Which one? {{ Type \"1\" }}\n…OR…\nAre you trying to help another Role or the Circle?? {{ Type \"2\" }}";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "1":
				response = "You said that the proposal in its current form would limit one of your roles. Moving to next object validation test.";
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_4 = false;
				break;
			case "2":
				response = "You said that you are trying to help another Role or the Circle in general. Objection is invalid."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
			default:
				response = "Not valid input. Need \"1\" or \"2\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_4 = false;
				isValidObjectionTest_5 = false;
				break;
		}
	}

	while(isValidObjectionTest_5) {
		var progressStatus = "6/6\n";
		var testObjectionText = "Is the proposal adhering to Holacracy Constitution rules of creating, amending or removing Roles’ accountabilities and domains? {{ Type \"Y\" for Yes, \"N\" for No }}.";
		var response = "";
		var questionPrompt = prompt(progressStatus + testObjectionText);
		switch(questionPrompt) {
			case "Y":
				response = "You said that the proposal in its current form is true to Holacracy Constitution rules of valid governance meeting output." + "<br />" + "Objection is valid. Secretary, please capture the objection for the Objection board."
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				isValidObjectionTest_5 = false;
				break;
			case "N":
				response = "You said that the proposal in its current form is either not valid output form for governance meeting or is outside of Circle’s authority." + "<br />" + "Suggestions from the group: how we can amend the proposal to better adhere to governance meeting output of creating, amending or removing roles and/or their accountabilities?";
				document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_5 = false;
				break;
			default:
				response = "Not valid input. Need \"Y\" or \"N\".";
				document.getElementById('demo').innerHTML = response;
				// refactor below repetitive false-ifiers
				isValidObjectionTest_5 = false;
				break;
		}
	}
}

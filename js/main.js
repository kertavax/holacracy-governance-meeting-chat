"use strict";

$(document).ready(function() {

	$(".round2_adminConcerns").hide();
	$(".round3_agendaBuilding").hide();
	$(".round4_IDM").hide();
	$(".round5_closingRound").hide();

	var User = function(name) {
		this.name = name;
		this.checkinRoundVal = "";
		this.agendaItems = [];
		this.closingReflection = "";
	};

	var egill = new User("Egill");

	$(".startObjectionTest").on("click", function() {
		runObjectionTest();
	})

	var runObjectionTest = function() {
		var isValidObjectionTest_1 = true;
		var isValidObjectionTest_2 = true;
		var isValidObjectionTest_3 = true;
		var isValidObjectionTest_3b = true;
		var isValidObjectionTest_4 = true;
		var isValidObjectionTest_5 = true;
		var progressStatus = "";

		while(isValidObjectionTest_1) {
			var progressStatus = "1/5\n";
			var testObjectionText = "Is your concern a reason the proposal causes harm… {{ Type \"1\" }}\n…OR…\nIs your concern the proposal is unneeded or incomplete? {{ Type \"2\" }}";
			var response = "";
			var objectionInvalidReason = "The reason being …";
			var questionPrompt = prompt(progressStatus + testObjectionText);
			switch(questionPrompt) {
				case "1":
					response = "You said that the proposal in its current form would cause harm. Moving to next objection validation test.";
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
					isValidObjectionTest_1 = false;
					break;
				case "2":
					response = "You said that your concern is that the proposal is unneeded or incomplete. Objection is invalid.";
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response + "<br />" + objectionInvalidReason;
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
			var progressStatus = "2/5\n";
			var testObjectionText = "Is your concern created by this proposal… {{ Type \"1\" }}\n…OR…\nIs it already a concern or tension, even if the proposal were dropped? {{ Type \"2\" }}";
			var response = "";
			var questionPrompt = prompt(progressStatus + testObjectionText);
			switch(questionPrompt) {
				case "1":
					response = "You said that your concern is created by the proposal in its current form. Moving to next objection validation test."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
					isValidObjectionTest_2 = false;
					break;
				case "2":
					response = "You said that your concern is an already tension, even if the current proposal were dropped. Objection is invalid."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response + "<br />" + objectionInvalidReason;
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
			var progressStatus = "3/5\n";
			var testObjectionText = "Do you know, based on present data, that this impact will occur… {{ Type \"1\" }}\n…OR…\nAre you anticipating this impact is likely to occur? {{ Type \"2\" }}";
			var response = "";
			var questionPrompt = prompt(progressStatus + testObjectionText);
			switch(questionPrompt) {
				case "1":
					response = "You said that your concern is based on presently-known data. Skipping 3b – Moving to next objection validation test."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
					isValidObjectionTest_3 = false;
					isValidObjectionTest_3b = false;
					break;
				case "2":
					response = "You said that you are anticipating this impact is likely to occur. Moving to 3b objection validation test."
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
			var progressStatus = "3/5\n";
			var testObjectionText = "If anticipated: Is it safe enough to try, knowing we can revisit it anytime… {{ Type \"1\" }}\n…OR…\nIs it not safe enough to try, because significant harm could happen before we can adapt? {{ Type \"2\" }}";
			var response = "";
			var questionPrompt = prompt(progressStatus + testObjectionText);
			switch(questionPrompt) {
				case "1":
					response = "You said that the proposal in its current form is safe enough to try, knowing we can revisit it anytime. Objection is invalid."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response + "<br />" + objectionInvalidReason;
					isValidObjectionTest_3b = false;
					isValidObjectionTest_4 = false;
					isValidObjectionTest_5 = false;
					break;
				case "2":
					response = "You said that the proposal in its current form is not safe enough to try, because significant harm could happen before we can adapt. Objection is invalid."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response + "<br />" + objectionInvalidReason;
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
			var progressStatus = "4/5\n";
			var testObjectionText = "Would the proposal limit one of your roles… {{ Type \"1\" }}\n…OR…\nAre you trying to help another role or the circle in general? {{ Type \"2\" }}";
			var response = "";
			var questionPrompt = prompt(progressStatus + testObjectionText);
			switch(questionPrompt) {
				case "1":
					response = "You said that the proposal in its current form would limit one of your roles. Moving to next object validation test.";
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response;
					isValidObjectionTest_4 = false;
					break;
				case "2":
					response = "You said that you are trying to help another Role or the circle in general. Objection is invalid."
					document.getElementById('demo').innerHTML = "Just completed " + progressStatus + "<br />" + response + "<br />" + objectionInvalidReason;
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
			var progressStatus = "5/5\n";
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
	};

	$("#checkin-form").submit(function(event) {
		egill.checkinRoundVal = $(".user-checkin-description").val();
		$(".round2_adminConcerns").show();
		event.preventDefault();
	});

	$(".round2_adminConcerns")
		.children("button")
		.on("click", function(event) {
			$(".round3_agendaBuilding").show();
	});

	$("#agendabuild-form").submit(function(event) {
		egill.agendaItems.push($(".user-agenda-item").val());
		$(".round4_IDM").show();
		$(".round5_closingRound").show();
		for (var i = 0; i < egill.agendaItems.length; i++) {
			$(".round4_IDM").children("ul").append("<li>" + egill.agendaItems[i] + "</li>");
		};
		event.preventDefault();
	});

	$("#closing-form").submit(function(event) {
		egill.closingReflection = $(".user-closing-reflection").val();
		$(this).append("<h1>Thanks for your participation! : )</h1>")
		console.log(egill);
		event.preventDefault();
	});

});
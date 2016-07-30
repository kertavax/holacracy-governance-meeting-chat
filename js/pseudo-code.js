/* Governance Meetings 

## 1. Check-in

- One person at a time; either in sequence <ol> (go around the table style) or unorderly <ul>
- Call out distractions, get present, here and now.

## 2. Administrative Concerns

- Facilitator only.
- Account for time allotted, hard stops, breaks, etc.
- Very briefly, facilitator addresses any practical constraints on the meeting, eg. time-limits, announcing a circle member needs to leave early. Purely administrative.

## 3. Build Agenda

- One person at a time; either in sequence <ol> (go around the table style) or unorderly <ul>
- Build agenda of tensions to process. One or two words per item.
- Max 1 item per role?

## 4. Integrative Decision-Making Process (of each agenda item built in previous round)

1. Present Proposal:
	- Proposer only
	- Describes a tension and presents a proposal to resolve it.
	- (additionally: can request discussion to help craft a proposal, but not consensus)
2. Clarifying Questions:
	- One at a time, anyone asks to better understand proposal. To each question, proposer answers by either clarifying proposal or stating "Not specified".
	- Programmatically, how to define a “clarifying question”?
		- Perhaps use RegExpressions to highlight opinionated terms such as "I think", "This might", "This is ridiculous", any exclamation points "!", "Don’t you think this could", "should/would/could"?
3. Reaction Round:
	- One at a time, everyone but the proposer speaks, i.e. no response or cross talk.
	- Anything from an intellectual critique to an emotional outburst is allowed, but should address the proposal not role in questionm i.e. not "you’re crazy!" but instead "this proposal is crazy!".
4. Amend and clarify:
	- Only proposer speaks, can optionally clarify the intent of the proposal or amend it based on prior reactions and clarifying questions.
	- No discussion.
5. Objection Round:
	- Facilitator asks one at a time if they want to raise an objection: “Do you see any reason why adopting this proposal would cause harm or move us backwards?”.
	- One at a time answers either "No objection" to move the "speaking totem" to the next person, or raises an objection.
	- Objections are stated.
	- Objections are tested with either-or questions …
		- 5 valid objections
			1. The Proposal would degrade the Circle’s capacity
			2. The proposal, if a adopted, would introduce a new Tension.
			3. The objection is either based on presently-known data, or is necessarily predictive because we can’t adapt later
			4. The Objection would be a valid Tension for your Role to process.
			5. the Proposal breaks the rules of the Holacracy Constitution (eg “not valid governance output”, “Outside the circle’s authority”)
				// pseudo code
				// need to differentiate naming conventions of each question.
				// Should be stage1, stage2 instead of condition being confused.
			 	var proposalDegradingCapacity = true;
			 	var proposalNewTension = true;
			 	var basedOnPresentData = true;
			 	var areYouAnticipating2 = true;
			 	var isValidGovernanceOutput = true;
			 	var objectionValid = false;
			 	var proposalValid = true;
			 	var objectionInvalid = function() {
			 		console.log("Object is invalid.")
			 	};

			 	// 1. The Proposal would degrade the Circle’s capacity
				while (proposalDegradingCapacityCheck) {
					var causesHarm = "Is that a reason this causes harm or moves us backward? (and how?)";
					var somethingElse = "Is it a better idea or something else we should consider as well?";
					if (causesHarm) {
						moveToNextTest();
						proposalDegradingCapacityCheck = false;
					} else {
						objectionInvalid();
						proposalDegradingCapacityCheck = false;
					}
				}

				// 2. The proposal, if a adopted, would introduce a new Tension
				while (newTension) {
					var createdByThisTension = "Would that issue be created by adopting this proposal? (and how?)";
					var alreadyTension = "Is it already an issue, even if we don’t adopt this proposal?";
					if (createdByThisTension) {
						moveToNextTest();
						newTension = false;
					} else {
						objectionInvalid();
						newTension = false;
					}

				// 3. The objection is either based on presently-known data or …
				while (basedOnPresentData) {
					var isPresentData = "Is that based on presently-known data?";
					var areYouAnticipating = "Are you anticipating that it might happen?";
					if (isPresentData) {
						moveToNextTest();
						basedOnPresentData = false;
					} else {
						// objection is necessarily predictive because we can’t adapt later
						while (areYouAnticipating2) {
							var cantAdaptOnceMoreData = "If anticipated: is there a reason we can’t adapt once we get more data?";
							var safeToTry = "Is it safe enough to try, knowing we can revisit it anytime?";
							if (cantAdaptOnceMoreData) {
								moveToNextTest();
								areYouAnticipating2 = false;
								basedOnPresentData = false;
							} else {
								objectionInvalid();
								areYouAnticipating2 = false;
								basedOnPresentData = false;
							}
						}
					}
				} 
				// 4. The Objection would be a valid Tension for your Role to process.
				while (createsTensionOtherRole) {
					var limitYourRole = "Does it limit one of your Roles? (which one?)";
					var lendingHand = "Are you trying to help another Role or the Circle?";
					if (limitYourRole) {
						moveToProposalValidTest();
						createsTensionOtherRole = false;
					} else {
						objectionInvalid();
						createsTensionOtherRole = false;
					}
				}

				// 5. the Proposal breaks the rules of the Holacracy Constitution (eg “not valid governance output”, “Outside the circle’s authority”)
				while (isValidGovernanceOutput) {
					var output = "Is the proposal adhering to Holacracy Constitution rules of creating, amending or removing Roles’ accountabilities and domains?";
					if (output) {
						objectionValid = true;
						isValidGovernanceOutput = false;
					} else {
						proposalValid = false;
						isValidGovernanceOutput = false;
					}
				}
	- Valid objections are captured without discussion from others.
	- If no objections surface, proposal is adopted.
6. Integration
	- Mostly objector & proposer speak; others can help.
	- One objection at a time.
	- The goal is to craft an amened proposal that would resolve both the tension initially stated and the valid objection.
	- Once all objections are integrated, go back to the objection round.
	- Need some kind of function that confirms that proposer and objector are satisfied with amended proposal.

## 5. Closing Round

- One at a time.
- Each person can share a closing reflection to improve next meetings. No discussion.
- On last person willing to share or pass, meeting is over.

*/











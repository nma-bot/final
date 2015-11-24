// Create variables for our opponent choice
var opponentChoice = '';

// Create variable for our button options
var $options       = document.querySelectorAll('button');

// Create variables to display results
var userResult  = document.querySelectorAll('.user')[0];
var oppResult   = document.querySelectorAll('.opponent')[0];
var finalResult = document.querySelectorAll('.result')[0];

// Create a random value between 1 - 100
var rando    = Math.random() * 100;

// Set options for computer choice
// based on random value
if (rando < 34) {
  opponentChoice = "rock";
} else if (rando <= 67) {
  opponentChoice = "paper";
} else {
  opponentChoice = "scissors";
}

// Create comparison function
function compareChoices(choice1, choice2) {
  // If both choices are equal
  if (choice1 === choice2) {
    return "The result is a tie!";
  }
  
  // If user chooses "rock"...
  if (choice1 === "rock") {
    // ...and opponent chooses "scissors"
    if (choice2 === "scissors") {
        return "You win!";
    } else {
        return "Opponent wins";
    }
  }

  // If user chooses "paper"...
  if (choice1 === "paper") {
    // ...and opponent chooses "rock"
    if (choice2 === "rock") {
        return "You win!";
    } else {
        return "Opponent wins";
    }
  }

  // If user chooses "scissors"...
  if (choice1 === "scissors") {
    // ...and opponent chooses "paper"
    if (choice2 === "paper") {
        return "You win!";
    } else {
        return "Opponent wins";
    }
  }
};

// Listener for buttons to start challenge
function startChallengeListener(e){
  // Get user choice from button data-* attribute 
  // Remember, `e.target` is the element that was emitted the event
  var userChoice = e.target.getAttribute('data-option');
  
  // Set text content to choices and final result
  userResult.textContent  = userChoice;
  oppResult.textContent   = opponentChoice;
  finalResult.textContent = compareChoices(userChoice, opponentChoice);
}

// Loop over buttons and add startChallengeListener to handlers
for (var i = 0; i < $options.length; i++){
  $options[i].addEventListener('click', startChallengeListener);
}
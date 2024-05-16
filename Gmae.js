(function() {  //random game in javaScript 
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessedCorrectly = false;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Guess a number between 1 and 100.");

    // Function to prompt user for their guess
    function guessNumber() {
        const userGuess = prompt("Enter your guess:");

        if (userGuess === null) {
            console.log("Game aborted. See you next time!");
            return;
        }

        const guess = parseInt(userGuess, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            guessNumber();
            return;
        }

        attempts++;

        if (guess === randomNumber) {
            guessedCorrectly = true;
            console.log(`Congratulations! You've guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
            guessNumber();
        } else {
            console.log("Too high! Try again.");
            guessNumber();
        }
    }

    guessNumber();
})();

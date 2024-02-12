// TRUE FALSE SECTION START

// Looks up all buttons with the class 'trueFalseButton' and stores to prevent repeated DOM lookups
let tfbuttons = document.querySelectorAll(".trueFalseButton");

// Looks up the 'scoreDisplay' element and stores to prevent repeated DOM lookups
let scoreDisplay = document.getElementById("scoreDisplay");

// Scores for the true false questions
let q1score = 0;
let q2score = 0;
let q3score = 0;
let totalScore = 0;

// Alert messages to display with corresponding button clicks as per if else statements
let alertMessages = {
    q1True: "That's incorrect. According to Tech UK women occupy only a quarter of tech roles, but we're here to help change that.",
    q1False: "That's correct! According to Tech UK women occupy only a quarter of tech roles, but we're here to help change that.",
    q2True: "That's correct! The UK government reports that the UK workforce isn't equipped with the tech skills needed to meet current digital demands, costing the economy an estimated £63 billion in potential GDP each year.",
    q2False: "That's incorrect. The UK government reports that the UK workforce isn't equipped with the tech skills needed to meet current digital demands, costing the economy an estimated £63 billion in potential GDP each year.",
    q3True: "That's incorrect. It's actually 283 years!",
    q3False: "That's correct. It's actually 283 years!",
}

// Function to update score text in HTML
function updateScore() {

    // Update the scoreDisplay content with the current value of totalScore
    scoreDisplay.textContent = "Correct answers: " + totalScore + " of 3";
}

// For loop that iterates through each true false button and runs a function that listens for button clicks and uses if else statements to determine the alert and scoring
tfbuttons.forEach(function(tfbutton) {
    
    // Adds event listener to each true false button
    tfbutton.addEventListener("click", function(event) {
        
        // Displays id of true false button click in console
        console.log(tfbutton.id + " clicked");

        // If statement to display alert if button was clicked
        if (event.target.id === "q1-true-button") {
            alert(alertMessages["q1True"]);
        }

        // Else if statement to display alert if button was clicked
        else if (event.target.id === "q1-false-button") {
            alert(alertMessages["q1False"]);
            
            // Nested if statement to add one point if no points have been awarded for question already
            if (q1score < 1) {
                q1score++
                totalScore++
            };
        }

        // Else if statements are repeated for remaining buttons
        else if (event.target.id === "q2-true-button") {
            alert(alertMessages["q2True"]);
            
            // If statement to add one point if no points have been awarded for question already
            if (q2score < 1) {
                q2score++
                totalScore++
            };
        }

        else if (event.target.id === "q2-false-button") {
            alert(alertMessages["q2False"]);
        }

        else if (event.target.id === "q3-true-button") {
            alert(alertMessages["q3True"]);
        }

        else if (event.target.id === "q3-false-button") {
            alert(alertMessages["q3False"]);
            
            if (q3score < 1) {
                q3score++
                totalScore++
            };
        }
        
        // Displays scores for each question and total score in console
        console.log("Q1 score: " + q1score, "\nQ2 score: " + q2score, "\nQ3 score: " + q3score, "\nTotal score: " + totalScore);

        // Calls the updateScore function to update the score displayed in the HTML
        updateScore();

    });
});

// TRUE FALSE SECTION END
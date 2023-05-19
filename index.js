// Get the next button element
const nextButton = document.querySelector(".next");

// Add a click event listener to the next button
nextButton.addEventListener("click", displayQuestion);

// Hide the next button initially
nextButton.classList.add("hidden");

// Define a function to check the answer
function checkAnswer(event) {
  // Get the clicked answer element
  const answer = event.target;

  // Get the value of the answer (0 for wrong, 1 for correct)
  const value = answer.dataset.value;

  // Get the feedback element
  const feedback = document.querySelector(".feedback");

  // If the answer is correct
  if (value == "1") {
    // Add the correct class to the answer
    answer.classList.add("correct");

    // Show a positive feedback message
    feedback.textContent = "Richtig! Gut gemacht!";

    // Increase the score by 1
    increaseScore();
  }
  // If the answer is wrong
  else {
    // Add the wrong class to the answer
    answer.classList.add("wrong");

    // Show a negative feedback message
    feedback.textContent = "Falsch! Versuche es noch einmal!";
  }

  // Disable further clicks on the answers
  answers.forEach(answer => {
    answer.removeEventListener("click", checkAnswer);
  });

  // Show the next button
  nextButton.classList.remove("hidden");
}

// Define a function to display a random question
function displayQuestion() {
  // Hide the next button
  nextButton.classList.add("hidden");

  // Get a random index from the questions array
  const index = Math.floor(Math.random() * questions.length);

  // Get the question object at that index
  const question = questions[index];

  // Get the question element
  const questionElement = document.querySelector(".question");

  // Set the question element's text to the question's text
  questionElement.textContent = question.question;

  // Get the answer elements
  const answerElements = document.querySelectorAll(".answer");

  // Loop through the answer elements
  for (let i = 0; i < answerElements.length; i++) {
    // Set the answer element's text to the answer's text
    answerElements[i].textContent = question.answers[i].text;

    // Set the answer element's data-value to the answer's value
    answerElements[i].dataset.value = question.answers[i].value;

    // Remove any previous classes from the answer element
    answerElements[i].className = "answer";

    // Add a click event listener to the answer element
    answerElements[i].addEventListener("click", checkAnswer);
  }
}

// Define a function to increase the score
function increaseScore() {
  // Get the score element
  const scoreElement = document.querySelector("#score");

  // Get the current score
  const currentScore = parseInt(scoreElement.textContent);

  // Increase the score by 1
  const newScore = currentScore + 1;

  // Set the score element's text to the new score
  scoreElement.textContent = newScore;
}

// Call the displayQuestion function when the page loads
window.addEventListener("load", displayQuestion);

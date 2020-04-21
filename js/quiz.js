let correctAnswers = 0;

/* 
  1. Store correct answers
  - When quiz begins, no answers are correct
*/

const correctAnswer1 = 'Washington, D.C.';
const correctAnswer2 = ['three', '3'];
const correctAnswer3 = 1974;
const correctAnswer4 = 'Luanda';
const correctAnswer5 = ['3days', '3', 'three', 'three days'];

// 2. Store the rank of a player

const rankOne = 'Gold';
const rankTwo = 'Bronze';
const rankThree = 'Silver';
const noRank = 'Sorry, you did not rank!';

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/

const question1 = prompt('What is the capital of the United States?');
const question2 = prompt('How many colors in the Colombian flag?');
const question3 = prompt('What was the year Portugal was free from dictatorship?');
const question4 = prompt('What is the capital of Angola, Africa?');
const question5 = prompt('How many days does it take to get to the moon from planet Earth?');

/*
  5. Rank player based on number of correct answers
  - 5 correct = Gold
  - 3-4 correct = Silver
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/


// 6. Output results to the <main> element
let correctAnswers = 0;

/* 
  1. Store correct answers
  - When quiz begins, no answers are correct
*/

const correctAnswerOne = 'Washington, D.C.';
const correctAnswerTwo = ['three', '3'];
const correctAnswerThree = 1974;
const correctAnswerFour = 'Luanda';
const correctAnswerFive = ['3days', '3', 'three', 'three days'];

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

const questionOne = prompt('What is the capital of the United States?');
const questionTwo = prompt('How many colors in the Colombian flag?');
const questionThree = prompt('What was the year Portugal was free from dictatorship?');
const questionFour = prompt('What is the capital of Angola, Africa?');
const questionFive = prompt('How many days does it take to get to the moon from planet Earth?');

if (questionOne === correctAnswerOne) {
  correctAnswers += 1;
  document.querySelector('main').innerHTML = `<h1>You got ${correctAnswers} out of 5 questions correct.</h1>`;
}
console.log(correctAnswers);


/*
  5. Rank player based on number of correct answers
  - 5 correct = Gold
  - 3-4 correct = Silver
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/


// 6. Output results to the <main> element

if (correctAnswers < 5) {
  rank = 'No crown'
}
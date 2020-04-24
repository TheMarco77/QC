/*
1. Store correct answers
- when quiz begins, no answers are correct  
*/
let correct = 0;

// const correctOne = 'DC';
// const correctTwo = '3';
// const correctThree = '1974';
// const correctFour = 'Luanda';
// const correctFive = '3';

// 2. Store the rank of a player
let rank;

// const rankOne = 'You earned the Gold Crown ';
// const rankTwo = 'Silver';
// const rankThree = 'Bronze';
// const noRank = 'Sorry, you did not rank!';

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/

const Q1 = prompt('What is the capital of the United States?');
if (Q1.toUpperCase() === 'DC') {
  correct++;
}

const Q2 = prompt('How many colors in the Colombian flag?');
if (Q2 === '3') {
  correct++;
}

const Q3 = prompt('What was the year Portugal was free from dictatorship?');
if (Q3 === '1974') {
  correct++;
}

const Q4 = prompt('What is the capital of Angola, Africa?');
if (Q4[0].toUpperCase() + Q4.slice(1).toLowerCase() === 'Luanda') {
  correct++;
}

const Q5 = prompt('How many days does it take to get to the moon?');
if (Q5 === '3') {
  correct++;
}

// console.log(correctAnswers);
/*
  5. Rank player based on number of correct answers
  - 5 correct = Gold
  - 3-4 correct = Silver
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/

if (correct === 5) {
  rank = 'GOLD';
} else if (correct >= 3) {
  rank = 'SILVER';
} else if (correct >= 2) {
  rank = 'BRONZE';
} else {
  rank = 'None :(';
}

// 6. Output results to the <main> element
document.querySelector(
  'main'
).innerHTML = `<h2 style="text-align:center">You got ${correct} out of 5 questions correct.</h2>
<p style="text-align:center">Crown earned: <strong>${rank}</strong><p>
`;

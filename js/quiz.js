let correctAnswers = 0;

const correctOne = 'DC';
const correctTwo = '3';
const correctThree = '1974';
const correctFour = 'Luanda';
const correctFive = '3';

// 2. Store the rank of a player
// const rankOne = 'Gold';
// const rankTwo = 'Silver';
// const rankThree = 'Bronze';
// const noRank = 'Sorry, you did not rank!';

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
  - Store each answer in a variable
  - Keep track of the number of correct answers
*/

const qOne = prompt('What is the capital of the United States?');
const qTwo = prompt('How many colors in the Colombian flag?');
const qThree = prompt('What was the year Portugal was free from dictatorship?');
const qFour = prompt('What is the capital of Angola, Africa?');
const qFive = prompt('How many days does it take to get to the moon?');

if (qOne.toUpperCase() === correctOne) {
  correctAnswers++;
  console.log(correctAnswers);
}
if (qTwo === correctTwo) {
  correctAnswers++;
  console.log(correctAnswers);
}
if (qThree === correctThree) {
  correctAnswers++;
  console.log(correctAnswers);
}
if (qFour[0].toUpperCase() + qFour.slice(1) === correctFour) {
  correctAnswers++;
  console.log(correctAnswers);
}
if (qFive === correctFive) {
  correctAnswers++;
  console.log(correctAnswers);
}
console.log(correctAnswers);
/*
  5. Rank player based on number of correct answers
  - 5 correct = Gold
  - 3-4 correct = Silver
  - 1-2 correct = Bronze
  - 0 correct = No crown
*/
if (correctAnswers === 5) {
  console.log('You got all correct, you won the GOLD CROWN');
} else if (correctAnswers === 4 || correctAnswers === 3) {
  console.log('You earned the SILVER CROWN');
} else if (correctAnswers === 2 || correctAnswers === 1) {
  console.log('You earned the BRONZE CROWN');
} else {
  console.log('Sorry you got the all wrong!');
}
// 6. Output results to the <main> element
document.querySelector(
  'main'
).innerHTML = `<h1 style="text-align:center">You got ${correctAnswers} out of 5 questions correct.</h1>`;

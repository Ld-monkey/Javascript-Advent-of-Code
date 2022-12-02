console.log('--- Day 2: Rock Paper Scissors ---');

const contentTextArea = document.querySelector('#rock-paper-scissors');
const btn = document.querySelector('.btn');
const spanTotal = document.querySelector('.total-score');
const spanSecret = document.querySelector('.secret-score');

function getRockPaperScissorsMatrice(rounds) {
  const round = rounds.trim().split('\n');
  const individualChoice = round.map((choice) => choice.split(' '));
  return individualChoice;
}

function getMaxScore(game) {
  let totalScore = 0;
  for (let i = 0; i < game.length; i++) {
    let choicePlayerOne = game[i][0];
    let choicePlayerTwo = game[i][1];
    if (choicePlayerOne === 'A') {
      if (choicePlayerTwo === 'X') {
        totalScore += 3 + 1;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 6 + 2;
      } else {
        totalScore += 0 + 3;
      }
    } else if (choicePlayerOne === "B") {
      if (choicePlayerTwo === 'X') {
        totalScore += 0 + 1;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 3 + 2;
      } else {
        totalScore += 6 + 3;
      }
    } else {
      if (choicePlayerTwo === 'X') {
        totalScore += 6 + 1;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 0 + 2;
      } else {
        totalScore += 3 + 3;
      }
    }
  }
  return totalScore;
}

function getMaxSecretScrore(game) {
  let totalScore = 0;
  for (let i = 0; i < game.length; i++) {
    let choicePlayerOne = game[i][0];
    let choicePlayerTwo = game[i][1];
    if (choicePlayerOne === 'A') {
      if (choicePlayerTwo === 'X') {
        totalScore += 3;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 4;
      } else {
        totalScore += 8;
      }
    } else if (choicePlayerOne === "B") {
      if (choicePlayerTwo === 'X') {
        totalScore += 1;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 5;
      } else {
        totalScore += 9;
      }
    } else {
      if (choicePlayerTwo === 'X') {
        totalScore += 2;
      } else if (choicePlayerTwo === 'Y') {
        totalScore += 6;
      } else {
        totalScore += 7;
      }
    }
  }
  return totalScore;
}

btn.addEventListener('click', () => {
  const values = contentTextArea.value;
  const eachGameMatrice = getRockPaperScissorsMatrice(values);
  const total = getMaxScore(eachGameMatrice);
  spanTotal.textContent = total;

  const secretTotal = getMaxSecretScrore(eachGameMatrice);
  spanSecret.textContent = secretTotal;
});

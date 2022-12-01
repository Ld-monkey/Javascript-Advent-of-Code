console.log("--- Day 1: Calorie Counting ---");

const textAreaContent = document.querySelector('#area-calories');
const button = document.querySelector('.btn');
const spanResult1 = document.querySelector('.which-elf');
const spanResult2 = document.querySelector('.total-calories');
const spanResult3 = document.querySelector('.top-three-elves');
const spanResult4 = document.querySelector('.sum-top-calories');

/**
 * From text, split and store to return a correct array of number.
 * @function
 * @param {string} str - The text of the area.
 * @returns {Array}
 */
function getCaloriesArray(str) {
  const individualCal = str.trim().split('\n\n');

  const strArray = individualCal.map((cal) => {
    return cal.split('\n');
  });

  const NumberArray = strArray.map((strArray) => {
    if (strArray.length > 1) {
      return l = strArray.map((a) => Number(a));
    } else {
      return b = strArray.map((a) => Number(a));
    }
  });

  return NumberArray;
}

/**
 * Check which elf carrying the most calories and return the total.
 * @param {Array} calories - All elfs calories.
 * @returns {number|Array} return [PositionElf, TotalCalories];
 */
function getElfCalories(calories) {
  let elfPosition = -1, totalCalories = 0;
  for (let i = 0; i < calories.length; i++) {
    if (calories[i].length > 1) {
      let countCalories = 0;
      for (let y = 0; y < calories[i].length; y++) {
        countCalories += calories[i][y];
      }
      if (countCalories > totalCalories) {
        totalCalories = countCalories;
        elfPosition = i;
      }
    } else {
      let countCalories = 0;
      for (let y = 0; y < calories[i].length; y++) {
        countCalories += calories[i][y];
      }
      if (countCalories > totalCalories) {
        totalCalories = countCalories;
        elfPosition = i;
      }
    }
  }

  // Increment because in rare case, 0 elf doesn't exists.
  if (elfPosition !== -1) {
    elfPosition++;
  } else {
    elfPosition = 0;
  }

  // Returns as an array.
  return [elfPosition, totalCalories];
}

function getTopThreeElves(calories) {
  let topThreeElvesPosition = [0, 0, 0];
  let topThreeElvesCalories = [0, 0, 0];
  let sumTopThreeElves = 0;

  for (let i = 0; i < calories.length; i++) {
    if (calories.length > 1) {
      let totalCalories = 0;
      for (let y = 0; y < calories[i].length; y++) {
        totalCalories += calories[i][y];
      }
      let indexMinTopThree = topThreeElvesCalories.indexOf(Math.min(...topThreeElvesCalories));
      if (totalCalories >= topThreeElvesCalories[indexMinTopThree]) {
        topThreeElvesCalories.splice(indexMinTopThree, 1, totalCalories);
        topThreeElvesPosition.splice(indexMinTopThree, 1, i);
      }
    } else {
      let totalCalories = calories[i];
      let indexMinTopThree = topThreeElvesCalories.indexOf(Math.min(...topThreeElvesCalories));
      if (totalCalories >= topThreeElvesCalories[indexMinTopThree]) {
        topThreeElvesCalories.splice(indexMinTopThree, 1, totalCalories);
        topThreeElvesPosition.splice(indexMinTopThree, 1, i);
      }
    }
  }

  topThreeElvesCalories.forEach((cal) => {
    sumTopThreeElves += cal;
  })

  topThreeElvesPosition = topThreeElvesPosition.map((p) => p + 1);

  return [topThreeElvesPosition, sumTopThreeElves];
}

button.addEventListener('click', () => {
  const areaContent = textAreaContent.value;
  const elfCalories = getCaloriesArray(areaContent);
  const [elf, total] = getElfCalories(elfCalories);
  spanResult1.textContent = elf;
  spanResult2.textContent = total;

  const [elvesPositions, sumTopElvesCalories] = getTopThreeElves(elfCalories);
  spanResult3.textContent = elvesPositions;
  spanResult4.textContent = sumTopElvesCalories;
});

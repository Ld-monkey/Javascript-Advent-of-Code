const content = document.querySelector('#input');
const btn = document.querySelector('.btn');
const span1 = document.querySelector('.priorities');
const span2 = document.querySelector('.three-elves');

function getPriorities(letter) {
  let prioritiesLowercase = [
    'a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x',
    'y','z'
  ];
  let item = prioritiesLowercase.indexOf(letter.toLowerCase());
  if (letter === letter.toUpperCase()) {
    return item + 1 + 26;
  }
  return item + 1;
}

function getBothItems(str) {
  let rucksack = str.trim().split('\n');
  return items = rucksack.map((item) => {
    let arrayLength = (item.length) / 2;
    return [item.slice(0, arrayLength), item.slice(arrayLength, item.length)];
  });
}

function findOccurences(arr) {
  const a = arr.map((item) => {
    for (let y = 0; y < item[0].length; y++) {
      let firstletter = item[0][y];
      for (let z = 0; z < item[1].length; z++) {
        let secondletter = item[1][z];
        if (firstletter === secondletter) {
          return firstletter;
          break;
        }
      }
    }
  });
  return a;
}

function getGroupThreeElves(str) {
  let rucksack = str.trim().split('\n');
  let groupeArray = []
  for (let index = 3; index <= rucksack.length; index += 3) {
    groupeArray.push([rucksack[(index) - 3], rucksack[(index) - 2], rucksack[(index) - 1]])
  }
  return groupeArray;
}

function groupOccurences(groups) {
  return item = groups.map((a) => {
    for (let i = 0; i < a[0].length; i++) {
      let firstLetter = a[0][i];
      for (let y = 0; y < a[1].length; y++) {
        if (firstLetter === a[1][y]) {
          for (let z = 0; z < a[2].length; z++) {
            if (firstLetter === a[2][z]) {
              return firstLetter;
              break;
            }
          }
        }
      }
    }
  });
}

btn.addEventListener('click', () => {
  const values = content.value;

  /** First part. */
  const bothItems = getBothItems(values);
  const typeOccurences = findOccurences(bothItems);
  const priorities = typeOccurences.reduce((mount, elemt) => mount += getPriorities(elemt), 0);
  span1.textContent = priorities;

  /** Second part. */
  const groups = getGroupThreeElves(values);
  const itemsGroups = groupOccurences(groups);
  const sumThreePriorities = itemsGroups.reduce((mount, elemt) => mount += getPriorities(elemt), 0);
  span2.textContent = sumThreePriorities;
});

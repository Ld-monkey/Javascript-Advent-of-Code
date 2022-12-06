const content = document.querySelector('#input');
const btn = document.querySelector('.btn');
const span1 = document.querySelector('.priorities');

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

btn.addEventListener('click', () => {
  const values = content.value;
  const bothItems = getBothItems(values);
  console.log(bothItems);
  const typeOccurences = findOccurences(bothItems);
  console.log('typeOccurences :', typeOccurences);
  const priorities = typeOccurences.reduce((mount, elemt) => mount += getPriorities(elemt), 0);
  span1.textContent = priorities;
});

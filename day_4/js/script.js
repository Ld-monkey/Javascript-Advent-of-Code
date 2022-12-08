const contentArea = document.querySelector('#input');
const btn = document.querySelector('.btn');
const span1 = document.querySelector('.total-contain');
const span2 = document.querySelector('.total-overlap');

function countRangeContain(mtx) {
  let count = 0;
  for (let i = 0; i < mtx.length; i++) {
    if ((mtx[i][0] >= mtx[i][2] && mtx[i][1] <= mtx[i][3]) || (mtx[i][0] <= mtx[i][2] && mtx[i][1] >= mtx[i][3])) {
      count += 1;
    }
  }
  return count;
}

function countOverlap(mtx) {
  let count = 0;
  for (let i = 0; i < mtx.length; i++) {
    if ((mtx[i][0] >= mtx[i][2] && mtx[i][0] <= mtx[i][3]) ||
        (mtx[i][1] >= mtx[i][2] && mtx[i][1] <= mtx[i][3]) ||
        (mtx[i][2] >= mtx[i][0] && mtx[i][2] <= mtx[i][1]) ||
        (mtx[i][3] >= mtx[i][0] && mtx[i][3] <= mtx[i][1])) {
      count += 1;
    }
  }
  return count;
}

function getMatrixValues(str) {
  let lines = str.trim().split('\n')
  return mtx = lines.map((line) => {
    let array = line.split(',').map((a) => a.split('-'));
    return [Number(array[0][0]), Number(array[0][1]), Number(array[1][0]), Number(array[1][1])];
  });
}

btn.addEventListener('click', () => {
  const matrix = getMatrixValues(contentArea.value);

  /** Part 1. */
  const countContain = countRangeContain(matrix);
  span1.textContent = countContain;

  /** Part 2. */
  const overlap = countOverlap(matrix);
  span2.textContent = overlap;
});

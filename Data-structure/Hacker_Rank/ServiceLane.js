function serviceLane(n, width, cases) {
  let result = [];

  for (let i = 0; i < cases.length; i++) {
    let [start, end] = cases[i];
    let min = Infinity;
    for (let j = start; j <= end; j++) {
      if (width[j] < min) {
        min = width[j];
      }
    }
    result.push(min);
  }
  return result;
}

const width = [2, 3, 1, 2, 3, 2, 3, 3];
const n = 8;
const cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];
console.log(serviceLane(n, width, cases));

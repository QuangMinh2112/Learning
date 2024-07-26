function findTarget(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

const arr = [3, 2, 2, 3];
const target = 2;

console.log(findTarget(arr, target));

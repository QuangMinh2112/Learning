var search = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let pivot = Math.floor((last + first) / 2);

    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      first = pivot + 1;
    } else {
      last = pivot - 1;
    }
  }

  return -1;
};

const result = search([-1, 0, 3, 5, 9, 12], 9);
console.log(result);

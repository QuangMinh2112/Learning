var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Bỏ qua phần tử trùng lặp và di chuyển con trỏ sang phải: nums[1] (-1) === nums[2] (-1) thì sẽ bỏ qua
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;

        // tương tự như trên
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

const example1 = [-1, 0, 1, 2, -1, -4]; // length:6

console.log(threeSum(example1));

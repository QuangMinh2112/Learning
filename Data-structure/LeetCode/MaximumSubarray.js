// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  // keep track of the max value
  let maxValue = nums[0];
  let accValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], accValue + nums[i]);
    accValue = calc;
    if (calc > maxValue) maxValue = calc;
  }

  return maxValue;
};
// 1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

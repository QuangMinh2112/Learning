// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

var findIndexTwoSum = (nums, target) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashMap[target - num] !== undefined) {
      return [hashMap[target - num], i];
    }
    hashMap[num] = i;
  }
};

const result = findIndexTwoSum([2, 7, 11, 15], 9);
console.log("🚀 ~ result:", result);

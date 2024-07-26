var containsDuplicate = function (nums) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hashMap[num] = (hashMap[num] || 0) + 1;
  }
  return Object.values(hashMap).some((n) => n > 1);
};

const result = containsDuplicate([1, 2, 3, 1]);
console.log(result);

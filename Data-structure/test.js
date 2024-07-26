function longestDecreasingSequence(prices) {
  const n = prices.length;
  if (n === 0) return 0;

  let maxLength = 0;
  let currentLength = 1;

  for (let i = 1; i < n; i++) {
    if (prices[i] < prices[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      currentLength = 1;
    }
  }
  if (currentLength > maxLength) {
    maxLength = currentLength;
  }

  return maxLength;
}

// Example usage
const prices = [10, 120, 110, 105, 115, 112, 108, 100];
// const prices = [100, 90, 80, 85, 70]; // i = 1   i  - 1 = 0
const result = longestDecreasingSequence(prices);
console.log(result); // Output: 4

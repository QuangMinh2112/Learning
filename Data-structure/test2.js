function longestDominoChain(length, height, position) {
  let maxChainLength = 0;

  for (let i = 0; i < length; i++) {
    let currentChainLength = 1; // Start chain length with the current domino
    let reach = position[i] + height[i]; // The furthest position this domino can knock over

    for (let j = i + 1; j < length; j++) {
      if (position[j] <= reach) {
        currentChainLength++;
        reach = Math.max(reach, position[j] + height[j]); // Update the reach
        console.log("🚀 ~ longestDominoChain ~ reach:", reach);
      } else {
        break; // If a domino is out of reach, stop the chain
      }
    }
    maxChainLength = Math.max(maxChainLength, currentChainLength); // Update the maximum chain length
  }

  return maxChainLength;
}

// // Example usage
// const length1 = 5;
// const height1 = [1, 2, 3, 4, 5];
// const position1 = [0, 5, 6, 8, 50];
// console.log(longestDominoChain(length1, height1, position1)); // Should output 3

const length2 = 4;
const height2 = [10, 1, 2, 3];
const position2 = [2, 4, 7, 8];
console.log(longestDominoChain(length2, height2, position2)); // Should output 4

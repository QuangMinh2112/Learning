// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = (s) => {
  const matches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (matches[ch] !== top) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const result = isValid("()[]{}");
console.log(result);

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  const hashMap = {};

  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    hashMap[t[i]] = (hashMap[t[i]] || 0) - 1;
  }

  return Object.values(hashMap).every((c) => c === 0);
};

function appendAndDelete(s, t, k) {
  let commonLetters = 0;

  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLetters++;
    } else {
      break;
    }
  }

  let totalOperations = s.length - commonLetters + (t.length - commonLetters);

  if (totalOperations > k) {
    return "No";
  } else if ((k - totalOperations) % 2 === 0) {
    return "Yes";
  } else if (k >= s.length + t.length) {
    return "Yes";
  } else {
    return "No";
  }
}

const s = "ashley";
const t = "ash";
const k = 2;

const result = appendAndDelete(s, t, k);
console.log("🚀 ~ result:", result);

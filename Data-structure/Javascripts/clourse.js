const subArray = (arr, n) => {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = subArray(arr, 3); // output:[[1,2,3],[4,5,6],[7,8,9]]

const infors = [
  {
    name: "quang minh",
    major: "AI",
    address: "ho xa",
  },
  {
    name: "",
    major: "AI",
    address: "ho xa",
  },
  {
    name: "dasdasdsa",
    major: "",
    address: "da nang",
  },
];

const output = infors.filter((info) => {
  const isCheck = Object.keys(info).some((k) => !info[k]);
  return !isCheck;
});

const sumOfFinbonaci = (n) => {
  if (n === 0 || n === 1) return n;
  let asw = [0, 1];
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    asw[i] = asw[i - 2] + asw[i - 1];
    sum += asw[i];
  }

  return sum;
};

const resultFibonaci = sumOfFinbonaci(6);
console.log(resultFibonaci);

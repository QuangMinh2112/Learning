function workbook(n, k, arr) {
  let specialCount = 0;
  let page = 1;

  for (let i = 0; i < n; i++) {
    let problemInChapter = arr[i];
    let pageInChapter = Math.ceil(problemInChapter / k);
    let startPoblem = 1;

    for (let currentPage = 1; currentPage <= pageInChapter; currentPage++) {
      let endProblem = Math.min(startPoblem + k - 1, problemInChapter);

      if (page >= startPoblem && page <= endProblem) {
        specialCount++;
      }
      startPoblem = endProblem + 1;
      page++;
    }
  }
  return specialCount;
}
const n = 5;
const k = 3;
const arr = [4, 2, 6, 1, 10];
console.log(workbook(n, k, arr));

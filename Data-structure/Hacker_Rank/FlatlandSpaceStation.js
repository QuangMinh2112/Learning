function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b);
  let maxDistance = 0;

  for (let i = 0; i < c.length - 1; i++) {
    let distance = Math.floor((c[i + 1] - c[i]) / 2);
    maxDistance = Math.max(maxDistance, distance);
  }

  maxDistance = Math.max(maxDistance, c[0], n - 1 - c[c.length - 1]);
  return maxDistance;
}
const n = 5;
const c = [0, 4];
console.log(flatlandSpaceStations(n, c));

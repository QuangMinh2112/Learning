export const leftMove = (a: number[], b: number[]) => {
  return a.filter((item) => b.indexOf(item) !== -1);
};

export const removeItemMoved = (a: number[], b: number[]) => {
  return a.filter((item) => b.indexOf(item) === -1);
};

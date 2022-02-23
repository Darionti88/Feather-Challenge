export const getTotalPages = (pages: number) => {
  const dividedByFive = Math.ceil(pages / 5);
  let totalPages = [];
  for (let i = 1; i <= dividedByFive; i++) {
    totalPages.push(JSON.stringify(i));
  }
  return totalPages;
};

const simulatedReturnedDataCount = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
];

export const getTrending = () => {
  return simulatedReturnedDataCount;
};

export const getComputerParts = () => {
  return simulatedReturnedDataCount;
};

export const getRTWCategoryItem = () => {
  return simulatedReturnedDataCount;
};

export const getNewArrivals = (indeces: number) => {
  const data = [];
  if (indeces <= simulatedReturnedDataCount.length) {
    console.log(indeces);
    console.log(indeces - 5);
    console.log(simulatedReturnedDataCount.length);
    for (let i = indeces; i > indeces - 5; i--) {
      data.push(simulatedReturnedDataCount[i - 1]);
    }
  }

  return { data, indeces };
};

export const getBestSellers = () => {
  return simulatedReturnedDataCount;
};

export const createWelcomeBanner = (tier, cols) => {
  let startRow, startCol;

  // pixel dot list of "HELLO WORLD" with first pixel starting from [0, 0]
  const dotList = [
    [0, 0], [0, 2], [0, 4], [0, 5], [0, 6], [0, 8], [0, 12], 
    [0, 16], [0, 17], [0, 18], [0, 19], [1, 0], [1, 2], [1, 4], 
    [1, 8], [1, 12], [1, 16], [1, 19], [2, 0], [2, 1], [2, 2], 
    [2, 4], [2, 5], [2, 8], [2, 12], [2, 16], [2, 19], [3, 0], 
    [3, 2], [3, 4], [3, 8], [3, 12], [3, 16], [3, 19], [4, 0], 
    [4, 2], [4, 4], [4, 5], [4, 6], [4, 8], [4, 9], [4, 10], 
    [4, 12], [4, 13], [4, 14], [4, 16], [4, 17], [4, 18], [4, 19], 
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], 
    [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], 
    [6, 15], [6, 16], [6, 17], [6, 18], [6, 19], [8, 0], [8, 4], 
    [8, 6], [8, 7], [8, 8], [8, 10], [8, 11], [8, 12], [8, 14], 
    [8, 17], [8, 18], [9, 0], [9, 4], [9, 6], [9, 8], [9, 10], 
    [9, 12], [9, 14], [9, 17], [9, 19], [10, 0], [10, 2], [10, 4], 
    [10, 6], [10, 8], [10, 10], [10, 11], [10, 14], [10, 17], [10, 19], 
    [11, 0], [11, 2], [11, 4], [11, 6], [11, 8], [11, 10], [11, 12], 
    [11, 14], [11, 17], [11, 19], [12, 1], [12, 3], [12, 6], [12, 7], 
    [12, 8], [12, 10], [12, 12], [12, 14], [12, 15], [12, 17], [12, 18]
  ];

  // actual "HELLO WORLD" starting position in grid depending on resolution tier
  switch (tier) {
    case 'S':
      startRow = 8;
      startCol = 3;
      break;
    case 'M':
      startRow = 7;
      startCol = 6;
      break;
    case 'L':
      startRow = 7;
      startCol = 9
      break;
    default:
      startRow = 7;
      startCol = 9;
  }

  
  
  return new Set(dotList.map((d) => (d[0] + startRow-1) * cols + d[1] + startCol));
};
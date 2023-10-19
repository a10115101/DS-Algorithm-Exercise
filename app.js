// 1) Linear Search
// const numbers = [
//   33, 99, 97, 28, 87, 72, 48, 72, 18, 89, 18, 45, 85, 13, 70, 80, 10, 88, 92,
//   65, 23, 73, 88, 55, 1, 79, 95, 69, 30, 31, 88, 13, 32, 86, 15, 51, 69, 29, 11,
//   26, 62, 0, 45, 32, 21, 4, 73, 10, 88, 23, 93, 34, 91, 68, 8, 36, 66, 19, 45,
//   12, 15, 29, 68, 59, 53, 76, 42, 81, 27, 30, 69, 15, 18, 0, 12, 2, 28, 79, 49,
//   15, 70, 4, 34, 48, 40, 28, 55, 73, 18, 37, 10, 65, 95, 11, 49, 7, 22, 24, 19,
//   33,
// ];

// const linearSearch = (arr, n) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === n) {
//       console.log(`Find ${n} at index ${i}`);
//       return i;
//     }
//   }

//   console.log(`Can't find ${n}`);
//   return -1;
// };

// linearSearch(numbers, 24);

// 2) Binary Search
let numbers = [
  9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60,
  68, 80, 87, 90, 98, 100, 103, 108, 109, 109, 116, 120, 120, 124, 127, 128,
  131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
  173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201,
  203, 204, 207, 213, 217, 222, 222, 222, 227, 228, 233, 235, 237, 239, 239,
  243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284,
  285, 295, 297, 298,
];

const binarySearch = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;
  let middle;
  let step = 0;

  while (min <= max) {
    step++;
    middle = Math.floor((min + max) / 2);
    if (n > arr[middle]) min = middle + 1;
    if (n < arr[middle]) max = middle - 1;
    if (n === arr[middle]) {
      console.log(`Find ${n} at index ${middle}`);
      console.log(`Find ${n} after ${step} steps`);
      return middle;
    }
  }

  console.log(`Can't find ${n}`);
  return -1;
};

binarySearch(numbers, 213);

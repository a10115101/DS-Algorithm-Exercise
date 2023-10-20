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
// const numbers = [
//   9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60,
//   68, 80, 87, 90, 98, 100, 103, 108, 109, 109, 116, 120, 120, 124, 127, 128,
//   131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
//   173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201,
//   203, 204, 207, 213, 217, 222, 222, 222, 227, 228, 233, 235, 237, 239, 239,
//   243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284,
//   285, 295, 297, 298,
// ];

// const binarySearch = (arr, n) => {
//   let min = 0;
//   let max = arr.length - 1;
//   let middle;
//   let step = 0;

//   while (min <= max) {
//     step++;
//     middle = Math.floor((min + max) / 2);
//     if (n > arr[middle]) min = middle + 1;
//     if (n < arr[middle]) max = middle - 1;
//     if (n === arr[middle]) {
//       console.log(`Find ${n} at index ${middle}`);
//       console.log(`Find ${n} after ${step} steps`);
//       return middle;
//     }
//   }

//   console.log(`Can't find ${n}`);
//   return -1;
// };

// binarySearch(numbers, 213);

// 3) Intersection
// const arr1 = [1, 2, 3, 7, 9, 19, 25];
// const arr2 = [19, 5, 16, 10, 3, 1];

// const intersection = (arr1, arr2) => {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) result.push(arr1[i]);
//     }
//   }

//   console.log(result);
//   return result;
// };

// // O(n^2)
// intersection(arr1, arr2);

// 3) Intersection (by counter)
// const arr1 = [1, 2, 3, 7, 9, 19, 25];
// const arr2 = [19, 5, 16, 10, 3, 1];

// const intersection = (arr1, arr2) => {
//   let result = [];
//   let arr3 = [...arr1, ...arr2];
//   let counter = {};

//   for (i = 0; i < arr3.length; i++) {
//     if (!counter[arr3[i]]) {
//       counter[arr3[i]] = 1;
//     } else {
//       counter[arr3[i]]++;
//     }
//   }

//   for (let prop in counter) {
//     if (counter[prop] > 1) result.push(prop);
//   }

//   console.log(result);
//   return result;
// };

// intersection(arr1, arr2);

// 4) Frequency
// const str1 = "aasdebasdf";
// const str2 = "adfeebed";

// const sameFrequency = (str1, str2) => {
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");

//   let counter1 = {};
//   let counter2 = {};

//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (!counter1[arr1[i]]) {
//       counter1[arr1[i]] = 1;
//     } else {
//       counter1[arr1[i]]++;
//     }
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     if (!counter2[arr2[j]]) {
//       counter2[arr2[j]] = 1;
//     } else {
//       counter2[arr2[j]]++;
//     }
//   }

//   for (let prop in counter1) {
//     if (!counter2[prop] || counter1[prop] !== counter2[prop]) return false;
//   }

//   return true;
// };

// console.log(sameFrequency(str1, str2));

// 5) Average Pair
// const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
// const avg = 1.5;

// const averagePair = (arr, avg) => {
//   let result = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) / 2 === avg) result.push([arr[i], arr[j]]);
//     }
//   }

//   return result;
// };

// // O(n^2)
// console.log(averagePair(arr, avg));

// 5) Average Pair(by pointer)
const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
const avg = 1.5;

const averagePair = (arr, avg) => {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > avg) right--;
    if (temp_avg < avg) left++;
    if (temp_avg === avg) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }

  return result;
};

// O(n)
console.log(averagePair(arr, avg));

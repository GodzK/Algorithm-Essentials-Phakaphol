const array1 = [
  23, 87, 12, 45, 9, 67, 38, 94, 51, 6, 78, 32, 89, 14, 60, 73, 21, 55, 40, 99,
];
const array2 = [
  11, 68, 27, 35, 84, 7, 92, 46, 18, 59, 33, 76, 88, 5, 61, 29, 70, 16, 81, 43,
];

//bubble sort = comparison base sort O(n^2)
function bubbleSort(array) {
  const arrayLength = array.length;
  //รอบใหญ่
  for (let i = 0; i < arrayLength; i++) {
    //รอบเล็ก
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(array1));
console.log(bubbleSort(array2));
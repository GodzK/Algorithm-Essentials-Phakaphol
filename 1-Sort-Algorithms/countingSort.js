//CountingSort = Non Comparison based

const array1 = [
  23, 87, 12, 45, 9, 67, 38, 94, 51, 6, 78, 32, 89, 14, 60, 73, 21, 55, 40, 99,
];
const array2 = [
  11, 68, 27, 35, 84, 7, 92, 46, 18, 59, 33, 76, 88, 5, 61, 29, 70, 16, 81, 43,
];

function countingSort(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) {
      return array ;
  }
  
  // find the range of value in array
  const min = Math.min(...array);
  const max = Math.max(...array);
  // ตัวที่บอก size ของ counting array
  const rangeSize = max - min + 1;

  // make a counting array
  const count = new Array(rangeSize).fill(0);


  for (const num of array) {
    //เพิ่มค่าไปหนึ่งค่า
    count[num-min] ++ ; 
  }

  //cal cumulative counts
  for (let i = 1; i < rangeSize; i++) {
    count[i] += count[i - 1] ;
  }
  
 //generate the sorted output
  const output = new Array(arrayLength);
  for (let i = 0; i < array.length; i++) {
    output[count[array[i] - min] - 1] =  array[i];
    count[array[i] - min]--;
    
  }
  return output
}
console.log(countingSort(array1));
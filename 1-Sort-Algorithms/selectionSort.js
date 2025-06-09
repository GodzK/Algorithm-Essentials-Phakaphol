//เป็นการหยิบตัวที่มีค่ามากเอาไปไว้ตำเเหน่งท้าย
// Step 1 : ตั้ง swap-index ไว้ตัวท้ายของ Array
// Step 2 : หาค่าตั้งเเต่ Index 0 => swap-index
// Step 3 : ถ้าเจอค่ามากสุด ถอยswap index  ลงมาหนึ่งตำเเหน่ง
const array1 = [
  23, 87, 12, 45, 9, 67, 38, 94, 51, 6, 78, 32, 89, 14, 60, 73, 21, 55, 40, 99,
];
const array2 = [
  11, 68, 27, 35, 84, 7, 92, 46, 18, 59, 33, 76, 88, 5, 61, 29, 70, 16, 81, 43,
];
function selectionSort(arrays) {
  const arrayLength = arrays.length;
  for (let i = 0; i < arrayLength; i++) {
    let shouldEnd = true;

    let maxValue = -Infinity;
    let maxIndex = 0;
    for (let j = 0; j < arrayLength - i; j++) {
      //ถ้ามีค่ามากกว่า max_value
      if (maxValue < arrays[j]) {
        //set maxValue
        maxValue = arrays[j];
        maxIndex = j;
      }
    }
    //swap with unsorted section
    const temp = arrays[arrayLength - 1 - i];
    arrays[arrayLength - 1 - i] = maxValue;
    arrays[maxIndex] = temp;
    console.log(arrays);
    for (let j = 0; j < arrayLength - 1; j++) {
      if (arrays[j] > arrays[j + 1]) {
        shouldEnd = false;
      }
    }
    if (shouldEnd) {
      return arrays;
    }
  }
  return arrays;
}
console.log(selectionSort(array1));

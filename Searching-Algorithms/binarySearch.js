//Binary search ต้องเป็นข้อมูลที่ sort มา ถ้า ถ้าไม่sort จะไม่การันตีว่าจะได้
//ซึ่งนั่นไม่ใช่หน้าที่ของ binarySearch
const array1 = [
  1,2,3,4,5,6,7,8,9,10
];

// เรียงข้อมูลก่อนใช้ binary search
array1.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let leftindex = 0;
  let rightindex = arr.length - 1;

  while (leftindex <= rightindex) {
    const middleIndex = Math.floor((leftindex + rightindex) / 2);
    const value = arr[middleIndex];

    if (value === target) {
      return middleIndex; // คืน index ที่เจอ
    }
    if (value < target) {
      leftindex = middleIndex + 1;
    } else {
      rightindex = middleIndex - 1;
    }
  }

  return -1; // ไม่เจอ
}

console.log(binarySearch(array1, 9));

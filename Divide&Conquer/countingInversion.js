// ต่อมาจาก mergeSort
//inversion = หน่วยที่ใกล้ ความsortมากกว่า เป็นการบวกจำนวนที่น้อยกว่านั้นเเหละ 
//arrayถูก sort น้อยไปมากจะมี inversion = 0
const array1 = [42, 17, 89, 3, 56, 77, 25, 64, 12, 90, 38, 5, 71, 49, 28, 94, 8, 66, 33, 81];
const array2 = [15, 62, 47, 9, 84, 30, 51, 96, 22, 79, 11, 36, 99, 45, 60, 7, 26, 70, 19, 58];

function naiveCountingInversion(array) {
    let inversion = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1 ; j < array.length; j++) {
        if (array[i] > array[j]) {
            console.log(array[i],array[j]);
            inversion++;
        }
      }
    }
    return inversion
}

console.log(naiveCountingInversion(array1));
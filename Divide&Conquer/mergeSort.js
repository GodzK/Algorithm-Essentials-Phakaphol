//Sorting เเนว comparison ที่เร็วที่สุดเท่าที่เป็นไปได้เเล้ว O(n log n)
//ทำเป็น 2 func
//time complexity = O(n)

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr; // base case ถ้ามี 1 ตัวหรือว่างก็ไม่ต้องจัดเรียง
  }

  // แบ่ง array ออกเป็นซ้ายและขวา
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // เรียก mergeSort แบบ recursive กับซ้ายและขวา แล้วรวมกัน
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // เปรียบเทียบค่าจากทั้งสองฝั่ง แล้วใส่ตัวที่น้อยกว่าลง result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // ถ้าฝั่งไหนเหลือ ให้นำมาต่อท้ายได้เลย
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// ทดลองใช้
const array = [5, 2, 9, 1, 3, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [1, 2, 3, 5, 6, 9]

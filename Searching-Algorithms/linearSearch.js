// ง่ายที่สุด หาจากซ้ายไปขวา เเต่โคตรช้า
// Time complexity = Big(O^n)
const array1 = [
  23, 87, 12, 45, 9, 67, 38, 94, 51, 6, 78, 32, 89, 14, 60, 73, 21, 55, 40, 99,
];

function linearSearch(arr,target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return arr[i],`อยู่ที่ตำเเหน่ง ${i}`
        };
    }return "not Found!!"
}
console.log(linearSearch(array1,38));
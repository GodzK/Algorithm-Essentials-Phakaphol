const array1 = [
  23, 87, 12, 45, 9, 67, 38, 94, 51, 6, 78, 32, 89, 14, 60, 73, 21, 55, 40, 99,
];
const array2 = [
  11, 68, 27, 35, 84, 7, 92, 46, 18, 59, 33, 76, 88, 5, 61, 29, 70, 16, 81, 43,
];
//Insertion sort = O(n^2) เเละเป็น comparison based
//Trick คือ มองจากมุมซ้ายเป็นตัวเริ่ม ถ้าขวาน้อยกว่า จะไปซ้ายเเละจะไปสุดทาง เเละเขยิบไปเช็คตัวขวาต่อ ทำเเบบนี้จนครบทุกตัว
//ยิ่งผ่านไปหลายรอบ ก็ยิ่งเทียบนาน เพราะมันจะเทียบสุดทาง ไปเรื่อยๆจนกว่าจะเจออันที่น้อยกว่า
function insertionSort(array) {
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        //หยิบค่าไปเก็บในmemory
        const currentValue = array[i];
        let j = i - 1 ;
        //ไล่check 
        while(j >= 0 && array[j] > currentValue){
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = currentValue;
        console.log(array);
    }
    return array
}
console.log(insertionSort(array1));
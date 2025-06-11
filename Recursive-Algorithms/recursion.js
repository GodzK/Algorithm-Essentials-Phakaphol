//recursion = algorithm ที่เรียกใช้ตัวเอง
//focusที่ base case เเละ recursive case
//ทำไมควรใช้ recursion = บาง algorithm เขียน loop ยากกว่าเยอะ เค้าเลยเลือกใช้recursionมากกว่า
//recursion เป็นจุดเริ่มต้นของ divide and conqeur
//จัดการ memoryดีกว่า : โดยใช้ stack core 
//Example 1 เเดกจนกว่าจะหมด !!: 
function eat(n) {
    if(n <= 0){
        console.log("done eating");
        return ;
    }
    console.log(`eat 1 , ${n-1} left`);
    return eat(n-1)
}
console.log(eat(5));

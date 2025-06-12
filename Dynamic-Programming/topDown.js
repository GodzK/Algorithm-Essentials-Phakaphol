//Fibonacci With Dynamic Programmin 
//1. Topdown solution (recursion with cache)
// เก็บค่าใส่ในarray ไม่ต้องคำนวณใหม่ 
//ทุกอย่างเหมือน Fibonacci ปกติ เราใส่ array memoสองตัวเเรกคือ 1กับ1เหมือนกับโค้ดfibonacci ปกติเลย'
//ต่างกับอันก่อน คือ อันก่อนคือมันต้อง ไล่tree ก็เกิด stack เกิด overheap ขึ้นเรื่อยๆ บางภาษาเเม่ง crashได้เลย
//space complexity = O(n) เพราะยิ่งเยอะ arrayยิ่งใหญ่ตาม
function fiboTopDown(n, memo = [1,1]) {
    //มีค่าก็คืนซะ
    if (memo[n]) {
        return memo[n];
    }
    //ผลลัพธ์ ถูกเก็บไว้ใน result เเละนำresultไปใส่ใน array memo
    const result = fiboTopDown(n- 1 , memo ) + fiboTopDown(n - 2 , memo);
    memo[n] = result;
    return result;
}
//loop run function
for (let i = 0; i < 100; i++) {
    console.log(fiboTopDown(i));
}


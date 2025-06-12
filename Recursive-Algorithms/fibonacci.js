// 🔬 Fibonacci
// time complexity = O(2^n)
function fibo(num) {
    if (num == 0 || num == 1) {
        return 1 ;
    }
   return fibo(num - 1 ) + fibo(num - 2)
}
//loop run function
for (let i = 0; i < 36; i++) {
    console.log(fibo(i));
}
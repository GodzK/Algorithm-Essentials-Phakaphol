// ใช้การ loop เเทน recursion ซึ่งอย่างที่รู้กัน loopไวกว่าrecursion
function fiboBottomUp(n) {
    const memo = [1,1]
    for (let i = 2; i <= n; i++) {
        memo.push(memo[i - 1] + memo[i-2]);
        
    }return memo[n];
}


for (let i = 0; i < 50; i++) {
   console.log(fiboBottomUp(i));;
    
}
// console.log(fiboBottomUp(50));
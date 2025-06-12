//Problem : ATM
//greedy จะบอกให้ทอนเเบงค์ใหญ่ เพื่อให้ได้เเบงค์ละน้อยๆ
//time comlexity = O(n)
function withdrawMoney(amount,coinList) {
    let result = 0;
    for (const coin of coinList) {
        const count = Math.floor(amount / coin);
        if (count > 0) {
            result += count;
            //เงินที่ใช้ทอนใหม่
            amount = amount % coin;
        }
    }
    return result;
}
const amount = 6;
const cointList = [4,3,1];
console.log(withdrawMoney(amount,cointList));
//บางครั้งคำตอบ จะไม่ใช่ The best answer ซึ่งเราอาจจะต้องทำdynamic programming ทำarray ขึ้นมาอะไรประมาณนั้น
//ซึ่ง Array ก็จะใหญ่ เเละ time complexityก็เยอะเช่นกัน
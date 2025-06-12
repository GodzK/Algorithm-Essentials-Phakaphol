//Problem : ATM
//greedy จะบอกให้ทอนเเบงค์ใหญ่ เพื่อให้ได้เเบงค์ละน้อยๆ
function withdrawMoney(amount,coinList) {
    let result = 0;
    for (const coin of coinList) {
        const count = Math.floor(amount / coin);
        if (count > 0) {
            result += count;
            amount = amount % coin;
        }
    }
    return result;
}
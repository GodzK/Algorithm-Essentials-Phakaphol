//Problem : // 🎒 0/1 Knapsack Problem
// ---------------------------
// โจทย์:
// คุณมีรายการของ items แต่ละชิ้นมี "น้ำหนัก" และ "มูลค่า" (value)
// คุณมีเป้ (knapsack) ที่รับน้ำหนักได้สูงสุด W หน่วย
// ให้เขียนโปรแกรมเพื่อหาว่า ควรเลือก item ไหนบ้าง (ห้ามแบ่ง) เพื่อให้ได้ "มูลค่ารวมมากที่สุด"
// โดยที่น้ำหนักรวมของ item ที่เลือก ต้องไม่เกินความจุของเป้

// ข้อมูลอินพุต (items แต่ละชิ้นมี weight และ value)
const weights = [2, 1, 3, 2]; // น้ำหนักของแต่ละ item
const values = [12, 10, 20, 15]; // มูลค่าของแต่ละ item
const capacity = 5; // ความจุสูงสุดของเป้
const n = weights.length;

// ฟังก์ชันแก้ปัญหา 0/1 Knapsack ด้วย Dynamic Programming
function knapsack(values, weights, capacity) {
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // สร้างตาราง dp[i][w] = มูลค่าสูงสุดเมื่อมี item 0..i-1 และกระเป๋าความจุ w
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // ถ้าใส่ item นี้ได้ → พิจารณา: เอา vs ไม่เอา
                dp[i][w] = Math.max(
                    dp[i - 1][w], // ไม่เอา item นี้
                    values[i - 1] + dp[i - 1][w - weights[i - 1]] // เอา item นี้
                );
            } else {
                // ใส่ไม่ได้ ก็ข้ามไป
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // ดึงมูลค่าสูงสุดออกมา
    return dp[n][capacity];
}

// เรียกใช้ฟังก์ชัน
const maxValue = knapsack(values, weights, capacity);
console.log("มูลค่าสูงสุดที่สามารถใส่ในเป้ได้คือ:", maxValue);

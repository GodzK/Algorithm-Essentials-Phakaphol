// 🧩 Longest Common Subsequence (LCS)
// -----------------------------------
// โจทย์:
// ให้ string 2 ตัว เช่น "ABCBDAB" และ "BDCAB"
// จงหาความยาวของ subsequence ที่เหมือนกันมากที่สุด (ไม่จำเป็นต้องติดกัน)
// เช่น LCS ของ "ABCBDAB" และ "BDCAB" คือ "BCAB" → ยาว 4

function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // สร้างตาราง dp ขนาด (m+1) x (n+1) เริ่มต้นด้วย 0
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // กรอกตาราง dp
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                // ถ้าตัวอักษรตรงกัน ให้เพิ่ม 1 จากค่าก่อนหน้า (i-1, j-1)
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // ถ้าไม่ตรง ให้เลือก max จากด้านบนหรือซ้าย
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // คำตอบคือความยาวของ LCS
    return dp[m][n];
}

// 🔍 ทดสอบ
const str1 = "ABCBDAB";
const str2 = "BDCAB";
const lcsLength = longestCommonSubsequence(str1, str2);
console.log("ความยาวของ LCS คือ:", lcsLength); // คำตอบ: 4

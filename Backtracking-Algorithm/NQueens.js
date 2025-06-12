// โจทย์: ให้เขียนโปรแกรมหาวิธีการวางควีน (Queen) ลงบนกระดานหมากรุกขนาด N x N
// โดยที่ควีนแต่ละตัวจะต้องไม่สามารถโจมตีกันได้ (ห้ามอยู่แถวเดียวกัน คอลัมน์เดียวกัน หรือแนวทแยงเดียวกัน)
// จงหาวิธีการวางทั้งหมดที่เป็นไปได้ และแสดงผลลัพธ์แต่ละวิธี (ในรูปแบบ array ของตำแหน่งควีนในแต่ละแถว)
function solveNQueens(n) {
    const solutions = [];

    // ใช้ recursive function เพื่อวางควีนในแต่ละแถว
    function backtrack(row, cols, diag1, diag2, board) {
        // ถ้าถึงแถวสุดท้ายแล้ว แปลว่าได้คำตอบหนึ่งชุด
        if (row === n) {
            solutions.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            // ตรวจสอบว่า col, แนวทแยงหลัก (row - col), แนวทแยงรอง (row + col) มีควีนอยู่ไหม
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

            // ถ้าไม่ซ้ำ เพิ่มตำแหน่งนี้ลงไป
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);
            const rowStr = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
            board.push(rowStr);

            // ไปแถวถัดไป
            backtrack(row + 1, cols, diag1, diag2, board);

            // ย้อนกลับ (Backtrack)
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
            board.pop();
        }
    }

    backtrack(0, new Set(), new Set(), new Set(), []);
    return solutions;
}

// ทดสอบกับกระดานขนาด 4x4
const result = solveNQueens(4);
console.log("จำนวนคำตอบทั้งหมด:", result.length);
result.forEach((sol, index) => {
    console.log(`คำตอบที่ ${index + 1}:`);
    sol.forEach(row => console.log(row));
    console.log("");
});

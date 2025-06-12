//Question : เราจะทำยังไงให้เราทำกิจกรรม ได้หลายอย่างที่สุด
//solution:
//อันดับเเรก เรียง activity ตามเวลาที่ใช้ จากน้อยไปมาก ตาม n time
// เริ่มทำactivityเเรก ก่อน 
//อันต่อมา ถ้ามันเริ่มก่อนที่ 1 จะจบ เราจะไม่เลือกสอง 
//ก็ไปดูอันต่อมา เลือกได้เพราะไม่ถึง เเละถ้าต่อจากมันทับมัน ก็ไม่เลือกอันต่อมา ทำงี้ไปเรื่อยๆ นะ
// ไม่ว่าinput๗ะยาวขนาดไหน ก็ไม่ต้องประกาศตัวเเปร เพิ่ม loop ก็เพิ่มตามจำนวณacitivity
//time complexity เลยเป็น O(n)
function activitySelection(activities) {   
  //บังคับเลือก
    const result = [activities[0]];
    //iเเทนตัวเเรก
    let i = 0
    for (let j = 1; j < activities.length; j++) {
        if(activities[j].start >= activities[i].end){
            result.push(activities[j])
            i = j
        }
        
    }return result
}

// 🔍 ทดสอบ
const activities = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 3, end: 9 },
  { start: 5, end: 9 },
  { start: 6, end: 10 },
  { start: 8, end: 11 },
  { start: 8, end: 12 },
  { start: 2, end: 14 },
  { start: 12, end: 16 }
];

console.log(activitySelection(activities));

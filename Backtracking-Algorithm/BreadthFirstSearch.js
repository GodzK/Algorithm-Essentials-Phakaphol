//ไม่ต้องลงไปลึกสุดเหมือนbreath first search 
//ต่างเเค่การเข้าออก นอกนั้นเหมือน dfs หมดเลย
//Queue Main !!
//ex 1 => 2,3 => 4,5 | 6
// visited [1] queue [2,3]
//dequeue 2 || visited [1 ,2 ] queue [3,4,5] 4,5เป็นลูกของ สอง
// visited [1 ,2 ,3] queue [4,5,6] เพิ่ม3เเละเพิ่มchile๘องมันคือ 6
//เเละได้เพิ่ม 4 ,5 , 6 ไล่จากบนลงล่าง 
// ควาามเร็วของ BFS ขึ้นอยู่กับบางภาษา เเต่หลักๆจะเร็วพอๆกับDFS
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
function bfs(start) {
  const visited = new Set();      // เก็บ node ที่เยี่ยมแล้ว
  const queue = [start];          // คิวสำหรับเก็บ node ที่จะเยี่ยม

  while (queue.length > 0) {
    const node = queue.shift();   // ดึง node แรกออกจากคิว

    if (!visited.has(node)) {
      console.log(node);          // เยี่ยม node
      visited.add(node);         // บันทึกว่าเยี่ยมแล้ว

      // ใส่เพื่อนบ้านลงท้ายคิว
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// ใช้งาน
console.log("BFS traversal:");
bfs('A');

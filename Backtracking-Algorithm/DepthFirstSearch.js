//มีความสำคัญกับทฤษฎี tree
//Cocept = เดินไปให้ลึกที่สุด 
//วิธีคร่าวๆ
//root node เเล้วนำไปใส่ในvisited-listเพื่อบอกว่าเรามาเหยียบเเล้ว
//เเล้วเราจะเอาnodeลูกของnodeนั้นมาใส่ในstackให้หมด เเล้วเราก็จะpopลูกคนท้ายออกมา เพื่อ ไปเริ่มเป็น visitedตัวต่อมา เเล้วทำอย่างงั้นวนไปเรื่อยๆ
//ex 1 => 2,3 => 4,5 | 6
// เริ่มมาเราอยู่ที่ 1 ใส่ visited [1] เเละ stack [2,3]
// ต่อมาเราใส่ เอาอันหลังคือสาม visited [1,3] เเละ stack [2,6] เพราะ 6 คือลูกของสาม
// ต่อมาเรา popอันท้ายของstackนั่นคือ 6 มันไม่มีลูกเเล้ว visited [1,3,6] เราไป node 2 visited[1,3,6,2] stack[4,5] สี่ห้าคือลูกของสอง ทำเเบบนี้วนไป
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

function dfsRecursive(node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // เยี่ยม node นี้
  visited.add(node);

  for (const neighbor of graph[node]) {
    dfsRecursive(neighbor, visited);
  }
}

function dfsIterative(start) {
  const visited = new Set();
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      // ใส่เพื่อนบ้านเข้า stack ย้อนลำดับเพื่อให้ DFS ถูกต้อง
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// ใช้งาน
console.log("DFS (Recursive):");
dfsRecursive('A');

console.log("\nDFS (Iterative):");
dfsIterative('A');
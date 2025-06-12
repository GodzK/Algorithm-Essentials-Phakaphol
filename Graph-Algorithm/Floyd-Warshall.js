//GPS In Code !!!
//Shortest Path คือ edgeน้อยที่สุด อาจจะอ้อมก็ได้ เเต่ขอเเค่ค่ารวมของ edgeน้อยกว่า
//หนึ่งในนั้นคือ Floyd-Warshall 
//หลักการ 
//1. สร้าง adjacency matrix ให้ทุก Node K ให้loop ทุกคู่ i j 


// Question: หาเส้นทางที่สั้นที่สุดระหว่างทุกคู่ของจุด (All Pairs)
// ใช้ Floyd-Warshall Algorithm
function floydWarshall(graph) {
  const dist = [];
  const V = graph.length;

  // 1. คัดลอกค่าเริ่มต้นจาก graph
  for (let i = 0; i < V; i++) {
    dist[i] = [];
    for (let j = 0; j < V; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // 2. อัปเดตค่า dist โดยพิจารณาจุดผ่านกลาง k
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// 🔍 ทดสอบ
const INF = Infinity;
const graphFW = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0]
];

console.log("Floyd-Warshall:");
console.log(floydWarshall(graphFW));

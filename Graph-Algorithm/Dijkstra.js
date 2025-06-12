//สั้นสุดเลือกทางนั้น 
// Question: หาเส้นทางที่สั้นที่สุดจากจุดเริ่มต้นไปยังจุดอื่นๆ (Single Source)
// ใช้ Dijkstra's Algorithm
function dijkstra(graph, start) {
  const V = graph.length;
  const dist = new Array(V).fill(Infinity);
  const visited = new Array(V).fill(false);

  dist[start] = 0;

  for (let i = 0; i < V - 1; i++) {
    // 1. หา vertex ที่ยังไม่ถูกเยี่ยมและมี dist น้อยสุด
    let min = Infinity;
    let u = -1;
    for (let v = 0; v < V; v++) {
      if (!visited[v] && dist[v] < min) {
        min = dist[v];
        u = v;
      }
    }

    // 2. เยี่ยม vertex u
    visited[u] = true;

    // 3. อัปเดตระยะทางไปยังเพื่อนบ้านของ u
    for (let v = 0; v < V; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }

  return dist;
}

// 🔍 ทดสอบ
const graphDijkstra = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

console.log("Dijkstra from node 0:");
console.log(dijkstra(graphDijkstra, 0));

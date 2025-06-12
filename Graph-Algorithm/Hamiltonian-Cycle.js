// Hamiltonian Path = คล้ายๆกับ dfs 
// Question: Does a Hamiltonian Cycle exist in the given graph?

function isSafe(v, graph, path, pos) {
    // Check if current vertex is adjacent to the previous one
    if (graph[path[pos - 1]][v] === 0) return false;

    // Check if the vertex has already been included
    for (let i = 0; i < pos; i++) {
        if (path[i] === v) return false;
    }

    return true;
}

function hamiltonianCycleUtil(graph, path, pos) {
    const V = graph.length;

    // Base case: If all vertices are in the path
    if (pos === V) {
        // Check if there is a link from the last vertex to the first
        return graph[path[pos - 1]][path[0]] === 1;
    }

    // Try different vertices as next candidate
    for (let v = 1; v < V; v++) {
        if (isSafe(v, graph, path, pos)) {
            path[pos] = v;

            if (hamiltonianCycleUtil(graph, path, pos + 1)) return true;

            // Backtrack
            path[pos] = -1;
        }
    }

    return false;
}

function hamiltonianCycle(graph) {
    const V = graph.length;
    const path = new Array(V).fill(-1);

    // Start at vertex 0
    path[0] = 0;

    if (!hamiltonianCycleUtil(graph, path, 1)) {
        console.log("No Hamiltonian Cycle exists");
        return null;
    }

    console.log("Hamiltonian Cycle found:");
    console.log([...path, path[0]]); // Include return to start
    return [...path, path[0]];
}

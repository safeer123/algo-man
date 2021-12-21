/*

========= PROBLEM =====
Given edges (Draw this a graph on a piece of paper to visualize)
It is an undirected graph
[
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'd'],
    ['d', 'f'],
    ['f', 'g'],
    ['g', 'b'],
    ['c', 'm'],
    ['c', 'h'],
    ['m', 'h'],
    ['h', 'i'],
    ['h', 'k'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'n'],
]

1. Shortest path between b and k, each edge has a cost of 1 ?

==================

-> BFS can solve this problem

*/

const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [a, b] = edge;
        graph[a] = graph[a] || [];
        graph[b] = graph[b] || [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

// Iterative approach - DFS
const shortestPath = (edges, src, dst) => {
    const visited = new Set();
    const graph = buildGraph(edges);
    const queue = [[src, 0]];

    while(queue.length > 0) {
        const current = queue.shift();
        const [node, distance] = current;
        visited.add(node);
        for(let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                if(neighbor === dst) return distance + 1;
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}

const edgs = [
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'd'],
    ['d', 'f'],
    ['f', 'g'],
    ['g', 'b'],
    ['c', 'm'],
    ['c', 'h'],
    ['m', 'h'],
    ['h', 'i'],
    ['h', 'k'],
    ['n', 'o'],
    ['o', 'p'],
    ['p', 'n'],
];

console.log(shortestPath(edgs, 'b', 'k'));
console.log(shortestPath(edgs, 'h', 'p'));
console.log(shortestPath(edgs, 'a', 'f'));

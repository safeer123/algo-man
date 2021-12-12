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

1. Is there a path between b and k ?
2. Is there a path between h and p ?
3. Is there a path between a and f ?

==================
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
const hasPath = (edges, src, dst) => {
    const visited = new Set();
    const graph = buildGraph(edges);
    const stack = [src];

    while(stack.length > 0) {
        const current = stack.pop();
        if(dst === current) return true;
        if(visited.has(current)) continue;
        visited.add(current);
        // console.log(current);
        
        const unvisitedNeighbors = graph[current].filter(n => !visited.has(n));
        stack.push(...unvisitedNeighbors);
    }
    return false;
}

// Recursive approach - DFS
const hasPath_recursive = (edges, src, dst, graph = null, visited = new Set()) => {
    graph = graph || buildGraph(edges);

    if(src === dst) return true;
    visited.add(src);
    const unvisitedNeighbors = graph[src].filter(n => !visited.has(n));
    return unvisitedNeighbors.some(n => hasPath_recursive(edges, n, dst, graph, visited));
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

console.log(hasPath(edgs, 'b', 'k'));
console.log(hasPath(edgs, 'h', 'p'));
console.log(hasPath(edgs, 'a', 'f'));

console.log(hasPath_recursive(edgs, 'b', 'k'));
console.log(hasPath_recursive(edgs, 'h', 'p'));
console.log(hasPath_recursive(edgs, 'a', 'f'));
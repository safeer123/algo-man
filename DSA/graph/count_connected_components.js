/*

========= PROBLEM =====
Given edges (Draw this graph on a piece of paper to visualize it)
It is an undirected graph
nodes: a,b,c,d,e,f
edges:
[
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'c'],
    ['e', 'f'],
]

1. Count number of connected components (islands)

==================
*/

const buildGraph = (nodes, edges) => {
    const graph = {};
    for(let n of nodes) {
        graph[n] = [];
    }
    for(let e of edges) {
        const [n1, n2] = e;
        graph[n1].push(n2);
        graph[n2].push(n1);
    }
    return graph;
}

const count_connected_comps = (nodes, edges) => {
    const graph = buildGraph(nodes, edges);
    const visited = new Set();

    const BFS = (src) => {
        const stack = [src];
        while (stack.length > 0) {
            const current = stack.pop();
            if(visited.has(current)) continue;
            visited.add(current);
            stack.push(...graph[current]);
        }
    }

    let count = 0;
    for(let n of nodes) {
        if(!visited.has(n)) {
            BFS(n);
            count += 1;
        }
    }
    return count;
}

/**** Complexity Analysis ***********
 * e ==> Edges
 * n ==> Nodes
 * Edges can repeat, a -> c and b -> c are possible
 * Time O(e) ==> We might have to revisit same nodes
 * Space O(n) ==> Queue or stack size
 * 
 * 
 * Worst case, graphs can take n^2 edgest, e = n^2
 */

const nodes = ['a','b','c','d','e','f'];
const edges =
[
    ['a', 'b'],
    ['b', 'c'],
    ['a', 'c'],
    ['e', 'f'],
];

console.log(count_connected_comps(nodes, edges));
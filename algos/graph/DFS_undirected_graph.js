//============ DFS - Depth First Search - undirected graph ============//

/*
A list of edges are provides
First we can build the edge lookup table
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


const depthFirstPrint_undirected = (edges, source) => {
    const visited = new Set();
    const graph = buildGraph(edges);
    const stack = [source];

    const visitOrder = [];
    while(stack.length > 0) {
        const current = stack.pop();
        if(visited.has(current)) continue;
        visited.add(current);
        // console.log(current);
        visitOrder.push(current);
        
        const unvisitedNeighbors = graph[current].filter(n => !visited.has(n));
        stack.push(...unvisitedNeighbors);
    }
    console.log(visitOrder.join(' , '));
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

const graph = [
    ['a', 'b'],
    ['b', 'h'],
    ['a', 'c'],
    ['c', 'f'],
    ['f', 'g'],
    ['g', 'c']
];

depthFirstPrint_undirected(graph, 'a');
depthFirstPrint_undirected(graph, 'b');
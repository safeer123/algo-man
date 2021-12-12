//============ DFS - Depth First Search ============//

const depthFirstPrint = (graph, source) => {
    const stack = [source];

    const visitOrder = [];
    while(stack.length > 0) {
        const current = stack.pop();
        // console.log(current);
        visitOrder.push(current);
        stack.push(...graph[current]);
    }
    console.log(visitOrder.join(' , '));
}

// This can be done recursively as well
// We can make use of the function call stack for DFS
const depthFirstPrint_Recursive = (graph, source) => {
    console.log(source);
    for(let neighbour of graph[source]) {
        depthFirstPrint_Recursive(graph, neighbour);
    }
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

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

depthFirstPrint(graph, 'a');
depthFirstPrint(graph, 'b');
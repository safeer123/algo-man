//============ BFS - Breadth First Search ============//

const breadthFirstPrint = (graph, source) => {
    const queue = [source];

    const visitOrder = [];
    while(queue.length > 0) {
        const current = queue.shift();
        // console.log(current);
        visitOrder.push(current);
        queue.push(...graph[current]);
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

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};

breadthFirstPrint(graph, 'a');
breadthFirstPrint(graph, 'b');
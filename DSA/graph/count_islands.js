/*

========= PROBLEM =====
Given a 2D array of W (water) and L (land) 
[
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

1. Count number of islands ?

==================

-> DFS/BFS can solve this problem, count number of connected components

*/



const countIslands = (input) => {
    const Width = input[0] ? input[0].length : 0;
    const Height = input.length;
    const visited = new Set();

    const getKey = (i, j) => `${i}-${j}`;

    const depthFirstVisit = (i, j) => {
        if(visited.has(getKey(i, j)) ||
        i < 0 || j < 0 || i > (Height-1) || j > (Width-1) ||
        input[i][j] === 'W'
        ) {
            return;
        }
        visited.add(getKey(i, j));
        depthFirstSearch(i-1, j);
        depthFirstSearch(i+1, j);
        depthFirstSearch(i, j-1);
        depthFirstSearch(i, j+1);
    }

    let islandCount = 0;

    for(let i = 0; i < Height; i+=1) {
        for(let j = 0; j < Width; j+=1) {
            if(!visited.has(getKey(i, j)) && input[i][j] === 'L') {
                depthFirstVisit(i, j);
                islandCount += 1;
            }
        } 
    }

    return islandCount;
}

const input = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

const input2 = [
    ['L', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'W', 'W'],
    ['L', 'W', 'W', 'W', 'L'],
    ['L', 'W', 'W', 'W', 'W'],
];

console.log(countIslands(input));
console.log(countIslands(input2));

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

1. Find out the size of biggest island ?

==================

-> DFS/BFS can solve this problem, count number of connected components

*/



const maxIslandSize = (input) => {
    const Width = input[0] ? input[0].length : 0;
    const Height = input.length;
    const visited = new Set();

    const getKey = (i, j) => `${i}-${j}`;

    const depthFirstVisit = (i, j, prop) => {
        if(visited.has(getKey(i, j)) ||
        i < 0 || j < 0 || i > (Height-1) || j > (Width-1) ||
        input[i][j] === 'W'
        ) {
            return 0;
        }
        visited.add(getKey(i, j));
        prop.count += 1;
        depthFirstVisit(i-1, j, prop);
        depthFirstVisit(i+1, j, prop);
        depthFirstVisit(i, j-1, prop);
        depthFirstVisit(i, j+1, prop);
    }

    let islandSizeMax = 0;

    for(let i = 0; i < Height; i+=1) {
        for(let j = 0; j < Width; j+=1) {
            if(!visited.has(getKey(i, j)) && input[i][j] === 'L') {
                let prop = { count: 0 };
                depthFirstVisit(i, j, prop);
                islandSizeMax = Math.max(islandSizeMax, prop.count);
            }
        } 
    }

    return islandSizeMax;
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

console.log(maxIslandSize(input));
console.log(maxIslandSize(input2));

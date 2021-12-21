//=============== Heap (as a Complete Binary tree) ==========
/* 
Heap can be represented as a binary tree using an array - 
Here we deal with  "Complete BT" 
*/

class Heap {
    constructor(comparator) {
        // Array that holds the heap DS
        this.arr = [];
        // Comparator function: defines how two items in the heap are compared
        this.comparator = comparator;
    }

    // How to compare two items
    // This allows to support any type of item in the heap
    compare = (a, b) => {
        if(this.comparator) {
            return this.comparator(a, b);
        }
        return a > b;
    }

    // Get parent and child indices, for a given index (node)
    parentIndex = (i) => Math.floor((i+1)/2)-1;
    childrenIndices = (i) => [2 * (i+1) - 1, 2 * (i+1)];

    // index: out of order item index
    // isBottomUp(boolean) : direction of the process, bottom to top OR top to bottom
    // Complexity O(log N)
    // A single item is out of order in the heap, we adjust the heap downwards/upwards
    adjust(index, isBottomUp) {
        if(isBottomUp) { // Bottom-up approach
            let currIndex = index;
            while(currIndex > 0) {
                const parentIndex = this.parentIndex(currIndex);
                const parent = this.arr[parentIndex];
                const node = this.arr[currIndex];
                if(this.compare(node, parent)) {
                    this.arr[parentIndex] = node;
                    this.arr[currIndex] = parent;
                } else {
                    break;
                }
                currIndex = parentIndex;
            }
        } else { // Top-down approach
            let currIndex = index;
            while(currIndex < this.arr.length) {
                const [a, b] = this.childrenIndices(currIndex);
                const node = this.arr[currIndex];
                const leftChildBigger = this.arr[a] && this.compare(this.arr[a], node);
                const rightChildBigger = this.arr[b] && this.compare(this.arr[b], node);
                const swap_a = (leftChildBigger && rightChildBigger && this.compare(this.arr[a], this.arr[b])) ||
                                (leftChildBigger && !rightChildBigger);
                const swap_b = (leftChildBigger && rightChildBigger && !this.compare(this.arr[a], this.arr[b])) ||
                                (!leftChildBigger && rightChildBigger);
                if(swap_a) {
                    const tmp = this.arr[a];
                    this.arr[a] = node;
                    this.arr[currIndex] = tmp;
                    currIndex = a;
                } else if(swap_b) {
                    const tmp = this.arr[b];
                    this.arr[b] = node;
                    this.arr[currIndex] = tmp;
                    currIndex = b;
                } else {
                    break;
                }
            }
        }
    }

    // insert O(log N) for 1 item, O(NlogN) for creating a heap
    // Add the item to end of the array(tree) and adjust the heap from bottom to top
    // by comparing parents and swapping
    insert(...list) {
        while(list.length > 0) {
            const a = list.pop();
            this.arr.push(a);
            this.adjust(this.arr.length - 1, true);
        }
    }

    // pop O(log N)
    // Remove the item from its position and adjust the heap upwards and downwards
    // by comparing parents and children, swap accordingly
    pop(i = 0) {
        if(0 <= i && i < this.arr.length) {
            if(this.arr.length-1 === i) { // last index
                return this.arr.pop();
            }
            const res = this.arr[i];
            const lastItem = this.arr.pop();            
            this.arr[i] = lastItem;
            this.adjust(i, true);
            this.adjust(i, false);
            return res;
        }
        return undefined;
    }
}

//========== Heapify =================
/*
PROBLEM:  Given an array representing a complete binary tree
          Heapify this binary tree
*/
const heapify = (arr = []) => {
    const tempHeap = new Heap();
    tempHeap.arr = arr; // This is no more a heap now
    // We start from the end of the array and adjust the item downwards
    // This makes sure, we are building sub-heaps from the bottom
    // When we move to the left side, right side of it is already heapified
    for(let i=tempHeap.arr.length - 1; i >= 0; i -= 1) {
        tempHeap.adjust(i, false);
    }
    return tempHeap.arr;
}


//========== Heap Sort =================
/*
PROBLEM:  Sort an array
*/
const heapSort = (arr = []) => {
    const tempHeap = new Heap();
    tempHeap.arr = arr;
    heapify(tempHeap.arr);
    const sorted = [];
    while(tempHeap.arr.length > 0) {
        // console.log(tempHeap.arr)
        sorted.push(tempHeap.pop());
    }
    return sorted;
}

// =================== Example Usage ===============

const hp = new Heap();
hp.insert(1, 2, 5, 3, 4, 10, 8);
console.log(hp.arr);

console.log(heapify([2,3,4,1,2]));

console.log(heapSort([10, 2, 4, 1, 5]));

const hpObj = new Heap((a, b) => a.height > b.height);
hpObj.insert({ height: 1}, { height: 10}, { height: 3}, { height: 11});
console.log(hpObj.arr);
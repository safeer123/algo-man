//=============== Binary tree as array ==========
/* Represent binary tree as an array - Here we deal with  "Complete BT" */

export default class BT {
    constructor() {
        this.arr = [];
    }

    // inserted from left to right order, at each level of the tree
    // This kind of BT is called Complete BT
    insert(...a) {
        this.arr.push(...a);
    }

    // O(1)
    parentOf(i) {
        const parentIndex = Math.floor((i+1)/2) - 1;
        return parentIndex;
    }

    // O(1)
    childrenOf(i) {
        return [ (i+1)*2 - 1, (i+1) * 2 ];
    }

    // O(1)
    getNodeDetails(a) {
        const index = this.arr.indexOf(a);
        if(index >= 0) {
            console.log(`Node title: ${a}, parent: ${this.arr[this.parentOf(index)]}, children: ${this.childrenOf(index).map(i => this.arr[i])}`);
        } else {
            console.log("Node doesn't exist");
        }
    }
}
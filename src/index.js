// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

class BinarySearchTree {
    constructor(value){
        this.rooot = value
        this.left = null;
        this.right = null;
    }

    root() {
        return this.rooot
    }
}

let test = new BinarySearchTree(6)
console.log(test.root());

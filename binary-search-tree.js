class Node {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {

    // создает само дерево(пустое, без корня)
    constructor(){

        this.root = null


    }
    root() {
        return this.data
    }


    add(node) {
        if (this.root === null){
            this.root = new Node(node)
        }
        let current = this.root
        
        do{
            if (node > current.value && current.right){               
                current = current.right
             } else if (node < current.value && current.left){                
                current = current.left
             } else {
                current = current
             }
        } while ((node > current.value && current.right) || (node < current.value && current.left) && node != current.value)

        if (node > current.value && !current.right){               
            current.right = new Node(node)
        } else if (node < current.value && !current.left){                
            current.left = new Node(node)
        }
    }


    has(data) {
        if (this.root === null && data != null){
            return false
        }
        if (data === null && this.root === null){
            return true
        }
        let current = this.root

        do{
            if (data > current.value && !current.right){               
                return false
             } else if (data < current.value && !current.left){                
                return false
             } else if (data === current.value){
                return true
             } else if (data > current.value && current.right){
                current = current.right
             } else if (data < current.value && current.left){
                current = current.left
             }
             
        } while ((data > current.value && current.right) || (data < current.value && current.left) || data === current.value)
        return false
    } 

    
}






const tree = new BinarySearchTree()
tree.add(7)
tree.add(5)
tree.add(8)
tree.add(6)


console.log(tree.has(10));

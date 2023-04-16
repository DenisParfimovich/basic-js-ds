class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    // создает само дерево(пустое, без корня)
    constructor(){
        this.rooot = null
        this.head = null

    }

    add(node) {
        if (this.head === null){
            this.head = new Node(node)
        }
        let current = this.head


        
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

    root() {
        return this.head.value
    }
}




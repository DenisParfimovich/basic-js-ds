const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value){
      this.data = value;
      this.left = null;
      this.right = null;

  }
}
class BinarySearchTree {

  root() {
    if (this.data === undefined){
      return null
    } else {
      return this.data
    }

  }

  add(node) {
    if (this.data === undefined){
      this.data = new Node(node)
  }
  let current = this.data
  
  do{
      if (node > current.data && current.right){               
          current = current.right
       } else if (node < current.data && current.left){                
          current = current.left
       } else {
          current = current
       }
  } while ((node > current.data && current.right) || (node < current.data && current.left) && node != current.data)

  if (node > current.data && !current.right){               
      current.right = new Node(node)
  } else if (node < current.data && !current.left){                
      current.left = new Node(node)
  }
  }

  has(data) {
    if (this.root() === null && data != null){
      return false
    }
    if (data === null && this.root() === null){
      return true
    }
    let current = this.root()
 

    do{
      if (data > current.data && !current.right){ 
            
          return false
       } else if (data < current.data && !current.left){  
            
          return false
       } else if (data === current.data){
          return true
       } else if (data > current.data && current.right){
          current = current.right
          console.log(current);
       } else if (data < current.data && current.left){
          current = current.left
          console.log(current);
       }
       
    } while ((data > current.data && current.right) || (data < current.data && current.left) || data === current.data)
    
    return false
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // if (this.data === undefined){
    //   return null
    // }       
    // let current = this.data
    //   do {
    //     current = current.left
    //   } while(current.left)
    //   return current.data
    if (this.data === undefined){
      return null
    }       
    if (this.data.left){
      let current = this.data
      do {
        current = current.left
      } while(current.left)
      return current.data
    }
    return this.data
    
  }

  max() {
    if (this.data === undefined){
      return null
    }       
    if (this.data.right){
      let current = this.data
      do {
        current = current.right
      } while(current.right)
      return current.data
    }
    return this.data

      
  }
}

module.exports = {
  BinarySearchTree
};
// const tree = new BinarySearchTree
// tree.add(9);
//       tree.add(14);
//       tree.add(54);
//       tree.add(2);
//       tree.add(6);
//       tree.add(8);
//       tree.add(31);
//       tree.add(1);
//       console.log(tree);
// console.log(tree.has(54));
class Node {
  constructor(data) {
    if (data === undefined){
      this.data = null;
    } else {
      this.data = data;
    }
    
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  Node
};
class BinaryTree {
  constructor(root = null){
    this.root= root;
  }

  preOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  inOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;

  }

  postOrder(){
    const results = [];
    if (!this.root){return null;}
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;

  }
}

module.exports = BinaryTree;

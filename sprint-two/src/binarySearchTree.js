var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {

  var leftOrRight = function(binaryTree) {

    if (binaryTree.value < value) {
      if (binaryTree.right === null) {
        binaryTree.right = new BinarySearchTree(value);
      } else {
        leftOrRight(binaryTree.right);        
      }
    } else {
      if (binaryTree.left === null) {
        binaryTree.left = new BinarySearchTree(value);
      } else {
        leftOrRight(binaryTree.left);  
      } 
    }
  };

  leftOrRight(this);

};

BinarySearchTree.prototype.contains = function(value) {
  var wasFound = false;

  var findMatch = function(binaryTree) {
    if(binaryTree ===  null){return;}

    if (binaryTree.value === value) {
      wasFound = true;
    } else {
      if(binaryTree.value < value){
        findMatch(binaryTree.right);
      }else{
        findMatch(binaryTree.left);
      }
    }
  };

  findMatch(this);
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function(iterator) {

  var applyCallback = function(binaryTree) {
    if (binaryTree === null) { return; }
    iterator(binaryTree.value);
    if (binaryTree.left !== null) {
      applyCallback(binaryTree.left);
    }
    if (binaryTree.right !== null) {
      applyCallback(binaryTree.right);
    }
  };

  applyCallback(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

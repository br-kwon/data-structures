var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newTree = Tree(value);
  newTree.children = null;  // fix me

  if(this.children === null){
    this.children = [newTree];
  }else{
    this.children.push(newTree);
  }
  
};

treeMethods.contains = function(target) {

  var wasFound = false;

  var check = function(node) {
    if (node.value === target) {
      wasFound = true;
    }
    if (node.children !== null) {
      _.each(node.children, function(child) {
        check(child);
      })
    }
  };

  check(this);

  return wasFound;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

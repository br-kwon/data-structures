var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if(list.head === null){
      list.head = node;
    }else{
      list.tail.next = node;
    }

    list.tail = node;
    
  };

  list.removeHead = function() {

    var returnValue = list.head.value;
    var tempNode = list.head.next;
    list.head.next = null;
    list.head = tempNode;
    return returnValue;

  };

  list.contains = function(target) {
    var wasFound = false;

    var check = function(node){
      if(node === null){
        return;
      }
      if(node.value === target){
        wasFound = true;
      }
      check(node.next);
    }
    check(list.head);

    return wasFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

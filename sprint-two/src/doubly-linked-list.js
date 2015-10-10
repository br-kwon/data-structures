var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
}

var DoublyLinkedNode = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = new DoublyLinkedNode(value);

  if(this.head === null) {
    this.head = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
  }

  this.tail = node;
};

DoublyLinkedList.prototype.insert = function(value) {

};

DoublyLinkedList.prototype.remove = function(value) {

};

DoublyLinkedList.prototype.contains = function(value) {
  var wasFound = null;

  this.each(function(val) {
    if (value === val) {
      wasFound = true;
    }
  });

  return wasFound;
};

DoublyLinkedList.prototype.each = function(iterator) {

  var traverse = function(node){
    iterator(node.value);
    if(node.next !== null){
      traverse(node.next);
    }
  };
  traverse(this.head);

};
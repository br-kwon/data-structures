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

DoublyLinkedList.prototype.insert = function(value, index) {
  
  var newNode = new DoublyLinkedNode(value);
  var counter = 0;
  var prevNode;

  if (index === 0) {
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  } else {
    this.each(function(val, node){
      if(counter === index - 1){
        prevNode = node;
      } else if (counter === index){
        node.previous = newNode;
        prevNode.next = newNode;
        newNode.next = node;
        newNode.previous = prevNode;
      }
      counter++;
    });
  }


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
    iterator(node.value, node);
    if(node.next !== null){
      traverse(node.next);
    }
  };
  traverse(this.head);

};

DoublyLinkedList.prototype.retrieve = function(index) {
  var counter = 0;
  var result = null;
  this.each(function(value){
    //check current count for when equal to index
    if(counter === index){
      result = value;
    }
    counter++;
  });
  return result;
};
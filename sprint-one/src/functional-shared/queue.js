var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = {};
  object.storage = {};
  object.length = 0;
  object.offset = 0;

  _.extend(object, queueMethods);

  return object;
};

var queueMethods = {
  size: function(){
    return this.length;
  },
  enqueue: function(value){
    this.storage[this.length + this.offset] = value;
    this.length++;
  },
  dequeue: function(){
    var result;
    if(this.length > 0){
      result = this.storage[this.offset];
      delete this.storage[this.offset];
      this.length--;
      this.offset++;
    }
    return result;
  }
};



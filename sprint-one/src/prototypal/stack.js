var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  object.length = 0;
  object.storage = {};

  return object;
};

var stackMethods = {
  size: function(){
    return this.length;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    var result;
    if(this.length > 0){
      result = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
    }
    return result;
  }
};



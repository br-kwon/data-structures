var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.offset = 0;

};

Queue.prototype.size = function(){
  return this.length;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.length + this.offset] = value;
  this.length++;
}

Queue.prototype.dequeue = function(){
  var result;
  if(this.length > 0){
    result = this.storage[this.offset];
    delete this.storage[this.offset];
    this.offset++;
    this.length--;
  }
  return result;
}



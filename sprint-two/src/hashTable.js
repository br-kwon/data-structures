

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.numTuples = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  var previous;
  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      previous = tuple[1];
      tuple[1] = v;
    }
  });
  if(!previous){
    bucket.push([k,v]);
  }

  this._storage.set(index, bucket);
  this.numTuples++;
  
  if(this.needsDoubling()){
    this._limit *= 2;
    this.reHashStorage();
  }

  return previous || true;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  var bucket = this._storage.get(index);
  var result = null;

  _.each(bucket, function(tuple){
    if(tuple[0] === k){
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //could use .get
  this._storage.each(function(bucket, i, storage){
    if(i === index){
      _.each(bucket, function(tuple, bucketIndex) {
        if (tuple[0] === k) {
          bucket.splice(bucketIndex, 1);
        }
      });
    }
  });
};

HashTable.prototype.needsDoubling = function(){
  return this.numTuples / this._limit > 0.75;
}

HashTable.prototype.reHashStorage = function(){
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  this.numTuples = 0;
  var self = this;
  oldStorage.each(function(bucket, i, storage){
    _.each(bucket, function(tuple) {
      self.insert(tuple[0], tuple[1]);
    })
  })
}



/*
 * Complexity: What is the time complexity of the above functions?
 */



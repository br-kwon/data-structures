

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(!bucket){
    bucket = [];
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */





var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log('insert called');
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = this._storage.get(index);

  if(!value){
    value = {};
  }
  value[k] = v;
  console.log(value);
  this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (!this._storage.get(index)) {
    return null;
  }
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, i, array){
    if(i === index){
      array[i] = undefined;
    }
  });
};

var storages = {

}


/*
 * Complexity: What is the time complexity of the above functions?
 */



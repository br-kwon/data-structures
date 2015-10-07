var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;
  var removeCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length+removeCount] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var result;
    if (length > 0) {
      result = storage[removeCount];
      delete storage[removeCount];
      removeCount++;
      length--;  
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

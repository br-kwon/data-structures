

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

var NodeObject = function(value){
  this.value = value;
  this.edges = [];
}

var findIndex = function(nodeArray, value) {
  var nodeIndex = -1;

  _.each(nodeArray, function(node, index){
    if(node.value === value){
      nodeIndex = index;
    }
  });

  return nodeIndex;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new NodeObject(node);
  this.nodes.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return findIndex(this.nodes, node) > -1;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removeIndex = findIndex(this.nodes, node);

  if (removeIndex > -1) {
    this.nodes.splice(removeIndex, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIndex = findIndex(this.nodes, fromNode);
  var edges = this.nodes[fromIndex].edges;

  return findIndex(edges, toNode) > -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex = findIndex(this.nodes, fromNode);
  var toIndex = findIndex(this.nodes, toNode);

  this.nodes[fromIndex].edges.push(this.nodes[toIndex]);
  this.nodes[toIndex].edges.push(this.nodes[fromIndex]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var fromIndex = findIndex(this.nodes, fromNode);
  var toIndex = findIndex(this.nodes, toNode);

  var fromEdgeIndex = findIndex(this.nodes[fromIndex].edges, toNode);
  var toEdgeIndex = findIndex(this.nodes[toIndex].edges, fromNode);

  this.nodes[fromIndex].edges.splice(fromEdgeIndex, 1);
  this.nodes[toIndex].edges.splice(toEdgeIndex, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  // for each node at index i
  //   cb(node[i].value)
  _.each(this.nodes, function(node) {
    cb(node.value);
  });


};

/*
 * Complexity: What is the time complexity of the above functions?
 */



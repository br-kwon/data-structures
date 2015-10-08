

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

var NodeObject = function(value){
  this.value = value;
  this.edges = [];
}

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new NodeObject(node);
  this.nodes.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var wasFound = false;

  _.each(this.nodes, function(nodeInGraph){
    if(nodeInGraph.value === node){
      wasFound = true;
    }
  });
  return wasFound;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removeIndex; 
  _.each(this.nodes, function(nodeInGraph, index) {
    if (nodeInGraph.value === node) {
      removeIndex = index;
    }
  });
  if (removeIndex !== undefined) {
    this.nodes.splice(removeIndex, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasEdge = false;

  _.each(this.nodes, function(nodeInGraph){
    if(nodeInGraph.value === fromNode){
      _.each(nodeInGraph.edges, function(edge){
        if(edge.value === toNode){
          hasEdge = true;
        }
      });
    }
  });

  return hasEdge;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIndex;
  var toIndex;

  if(this.contains(fromNode) && this.contains(toNode)){
    _.each(this.nodes, function(nodeInGraph, index){
      if(nodeInGraph.value === fromNode){
        fromIndex = index;
      }else if (nodeInGraph.value === toNode){
        toIndex = index;
      }
    });
    this.nodes[fromIndex].edges.push(this.nodes[toIndex]);
    this.nodes[toIndex].edges.push(this.nodes[fromIndex]);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var fromIndex;
  var toIndex;

  _.each(this.nodes, function(nodeInGraph, index) {
    
  })

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



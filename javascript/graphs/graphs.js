'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor( vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
  }

  // {
  //   Node: []
  // }

  // add a new vertex to this graph
  addVertex(value){
    let vertex = new Vertex(value);
    this.adjacencyList.set( vertex, [] );
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    // error checking: we MUST have a starting and ending node
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('error: need a start or end vertex');
    }

    // get startVertex from the Map (all of verticies)
    // push a new Edge that will connect the start to the end into the array along with the weight
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)){
      throw new Error('error - invalid vertex', vertex);
    }

    return this.adjacencyList.get(vertex);
  }

  // breadth first search
  bfs(startNode) {
    const queue = [];

    // a set is an object that will only store unique keys
    const visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    while(queue.length) {
      // remove the first item from the queue
      const currentNode = queue.shift();

      // get all the neighbors of the node that I took off of the queuq
      const neighbors = this.getNeighbors(currentNode);

      // loop over all of the neighbors
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;

        // if the Set has the node that I'm looking for
        if(visitedNodes.has(neighborNode)){
          // stop looking at this node and go to the next one
          continue;
        } else {
          // otherwise, I haven't been there. I need to add it to the Set
          visitedNodes.add(neighborNode);
        }

        // put it into the queuq
        queue.push(neighborNode);
      }
    }
    // return the Set so I have a list of nodes of where I've been
    return visitedNodes;
  }

  // Depth first search
  dfs(startNode) {
    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      // first things first, add the node to the Set
      visitedNodes.add(node);

      // get all the neighbors
      const neighbors = this.getNeighbors(node);

      // loop over those neighbors
      for(let edge of neighbors){
        // if the set doesn't have the node
        if(!visitedNodes.has(edge.vertex)){
          // then I want to run this function again which will add it to the set and get the neighbor nodes and loop and run the whole thing again...
          _traverseNeighbors(edge.vertex);
        }
      }
    };

    _traverseNeighbors(startNode);
    return visitedNodes;
  }

  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while(stack.length) {
      // remove the top/last thing from the stack
      const currentNode = stack.pop();

      // make sure that our currentNode is not our end
      if(currentNode === endNode){
        return parentPath;
      }

      // get all the neighbors
      const neighbors = this.getNeighbors(currentNode);

      //loop over the edges
      for(let neighbor of neighbors){
        // find the vertex node
        const neighborNode = neighbor.vertex;

        // check if the Set contains that node
        if(visitedNodes.has(neighborNode)){
          // stop looking at this node and move along
          continue;
        } else {
          // otherwise add the node to the Set
          visitedNodes.add(neighborNode);
        }

        // add it to the stack
        stack.push(neighborNode);

        // in the parentPath Map, set a path with this as the key adn currentNode as the value
        parentPath.set(neighborNode, currentNode);
      }
    }

    return parentPath;
  }
}
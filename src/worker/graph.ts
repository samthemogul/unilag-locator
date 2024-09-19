import {locationOnMap} from '../constants/locations'

interface UnilagLocation {
  name: string;
  x: number;
  y: number;
}

function createGraph(): Map<string, Map<string, number>> {
  return new Map();
}

function addNodeToGraph(
  graph: Map<string, Map<string, number>>,
  location: UnilagLocation
) {
  const { name } = location;
  graph.set(name, new Map());
}

function addEdgeToGraph(
  graph: Map<string, Map<string, number>>,
  node1: string,
  node2: string,
  distance: number
) {
  graph.get(node1)!.set(node2, distance);
  graph.get(node2)!.set(node1, distance); // Assuming the graph is undirected
}

function calculateDistance(location1: string, location2: string): number {
  const loc1 = locationOnMap.find((loc) => loc.name === location1);
  const loc2 = locationOnMap.find((loc) => loc.name === location2);
  if (!loc1 || !loc2) {
    throw new Error("Location not found");
  }
  const dx = loc2.x - loc1.x;
  const dy = loc2.y - loc1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function findShortestPath(
  graph: Map<string, Map<string, number>>,
  start: string,
  end: string
): UnilagLocation[] {
  const distances = new Map<string, number>();
  const previous = new Map<string, string>();
  const queue: [string, number][] = [];

  for (const node of graph.keys()) {
    distances.set(node, Infinity);
    previous.set(node, "");
  }

  distances.set(start, 0);
  queue.push([start, 0]);

  while (queue.length > 0) {
    const [current, currentDistance] = queue.shift()!;

    if (current === end) {
      const path: UnilagLocation[] = [];
      let node = end;
      while (node !== "") {
        const prevLocation = locationOnMap.find((loc) => loc.name == node)!
        path.unshift(prevLocation)
        node = previous.get(node)!;
      }
      return path;
    }

    for (const [neighbor, neighborDistance] of graph.get(current)!) {
      const alternativeDistance = currentDistance + neighborDistance;
      if (alternativeDistance < distances.get(neighbor)!) {
        distances.set(neighbor, alternativeDistance);
        previous.set(neighbor, current);
        queue.push([neighbor, alternativeDistance]);
      }
    }
  }

  return [];
}

const graph = createGraph();
for (const location of locationOnMap) {
  addNodeToGraph(graph, location);
}


function setUpGraph(){
    addEdgeToGraph(
        graph,
        "Unilag Gate",
        "Wema Bank",
        calculateDistance("Unilag Gate", "Wema Bank")
      );
      addEdgeToGraph(
        graph,
        "Wema Bank",
        "Unilag Sports center",
        calculateDistance("Wema Bank", "Unilag Sports center")
      );
      addEdgeToGraph(
        graph,
        "Unilag Sports center",
        "New hall filling Station",
        calculateDistance("Unilag Sports center", "New hall filling Station")
      );
      addEdgeToGraph(
        graph,
        "New hall filling Station",
        "New hall",
        calculateDistance("New hall", "New hall filling Station")
      );
      addEdgeToGraph(
        graph,
        "New hall filling Station",
        "Nithub Unilag",
        calculateDistance("New hall filling Station", "Nithub Unilag")
      );
      addEdgeToGraph(
        graph,
        "Nithub Unilag",
        "Faculty of Social Sciences",
        calculateDistance("Nithub Unilag", "Faculty of Social Sciences")
      );
      addEdgeToGraph(
        graph,
        "Faculty of Social Sciences",
        "Unilag DLI",
        calculateDistance("Faculty of Social Sciences", "Unilag DLI")
      );
      addEdgeToGraph(
        graph,
        "Unilag DLI",
        "Unilag Second Gate",
        calculateDistance("Unilag DLI", "Unilag Second Gate")
      );
      addEdgeToGraph(
        graph,
        "Unilag DLI",
        "Staff Quarters",
        calculateDistance("Unilag DLI", "Staff Quarters")
      );
      addEdgeToGraph(
        graph,
        "Staff Quarters",
        "Faculty of Education",
        calculateDistance("Staff Quarters", "Faculty of Education")
      );
      addEdgeToGraph(
        graph,
        "Faculty of Education",
        "Unilag Gate",
        calculateDistance("Faculty of Education", "Unilag Gate")
      );
      addEdgeToGraph(
        graph,
        "Wema Bank",
        "Faculty of Environmental Sciences",
        calculateDistance("Wema Bank", "Faculty of Environmental Sciences")
      );
      addEdgeToGraph(
        graph,
        "Unilag Sports center",
        "Faculty of Environmental Sciences",
        calculateDistance("Unilag Sports center", "Faculty of Environmental Sciences")
      );
}
export function findPath(location1: string, location2: string) {
    setUpGraph()
    return findShortestPath(graph, location1, location2);
}


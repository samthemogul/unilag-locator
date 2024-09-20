import { locationOnMap } from "../constants/locations";

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
  const loc1 = locationOnMap.find((loc) => loc.name.toLowerCase() === location1.toLowerCase());
  const loc2 = locationOnMap.find((loc) => loc.name.toLowerCase() === location2.toLowerCase());
  if (!loc1 || !loc2) {
    console.log(location1, location2)
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
        const prevLocation = locationOnMap.find((loc) => loc.name == node)!;
        path.unshift(prevLocation);
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

function setUpGraph() {
  // Unilag Gate
  addEdgeToGraph(
    graph,
    "Unilag Gate",
    "Wema Bank",
    calculateDistance("Unilag Gate", "Wema Bank")
  );
  addEdgeToGraph(
    graph,
    "Unilag Gate",
    "Faculty of Education",
    calculateDistance("Unilag Gate", "Faculty of Education")
  );

  // Unilag Second Gate
  addEdgeToGraph(
    graph,
    "Unilag Second Gate",
    "Unilag DLI",
    calculateDistance("Unilag Second Gate", "Unilag DLI")
  );
  addEdgeToGraph(
    graph,
    "Unilag Second Gate",
    "Unilag Staff School",
    calculateDistance("Unilag Second Gate", "Unilag Staff School")
  );


  // Faculty of Education
  addEdgeToGraph(
    graph,
    "Faculty of Education",
    "Wema Bank",
    calculateDistance("Faculty of Education", "Wema Bank")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Education",
    "Unilag Gate",
    calculateDistance("Faculty of Education", "Unilag Gate")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Education",
    "Femi Gbaj. Hostel",
    calculateDistance("Faculty of Education", "Femi Gbaj. Hostel")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Education",
    "Education Garden",
    calculateDistance("Faculty of Education", "Education Garden")
  );



  // Faculty of Environmental Sciences
  addEdgeToGraph(
    graph,
    "Faculty of Environmental Sciences",
    "Wema Bank",
    calculateDistance("Faculty of Environmental Sciences", "Wema Bank")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Environmental Sciences",
    "Unilag Sports Center",
    calculateDistance("Faculty of Environmental Sciences", "Unilag Sports Center")
  );


  // Faculty of Social Sciences
  addEdgeToGraph(
    graph,
    "Faculty of Social Sciences",
    "Nithub Unilag",
    calculateDistance("Faculty of Social Sciences", "Nithub Unilag")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Social Sciences",
    "First Bank",
    calculateDistance("Faculty of Social Sciences", "First Bank")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Social Sciences",
    "Unilag DLI",
    calculateDistance("Faculty of Social Sciences", "Unilag DLI")
  );


  // Faculty of Arts
  addEdgeToGraph(
    graph,
    "Faculty of Arts",
    "Faculty of Law",
    calculateDistance("Faculty of Arts", "Faculty of Law")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Arts",
    "Faculty of Mngmt Scs.",
    calculateDistance("Faculty of Arts", "Faculty of Mngmt Scs.")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Arts",
    "Love Garden",
    calculateDistance("Faculty of Arts", "Love Garden")
  );

  // Faculty of Mass Com.
  addEdgeToGraph(
    graph,
    "Faculty of Mass Com.",
    "Ecobank",
    calculateDistance("Faculty of Mass Com.", "Ecobank")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Mass Com.",
    "CITS",
    calculateDistance("Faculty of Mass Com.", "CITS")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Mass Com.",
    "Faculty of Arts",
    calculateDistance("Faculty of Mass Com.", "Faculty of Arts")
  );


  // Faculty of Mngmt Scs.
  addEdgeToGraph(
    graph,
    "Faculty of Mngmt Scs.",
    "Faculty of Law",
    calculateDistance("Faculty of Mngmt Scs.", "Faculty of Law")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Mngmt Scs.",
    "Faculty of Arts",
    calculateDistance("Faculty of Mngmt Scs.", "Faculty of Arts")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Mngmt Scs.",
    "Love Garden",
    calculateDistance("Faculty of Mngmt Scs.", "Love Garden")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Mngmt Scs.",
    "Unilag Main Library",
    calculateDistance("Faculty of Mngmt Scs.", "Unilag Main Library")
  );

  // Faculty of Law
  addEdgeToGraph(
    graph,
    "Faculty of Law",
    "Faculty of Mngmt Scs.",
    calculateDistance("Faculty of Law", "Faculty of Mngmt Scs.")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Law",
    "Love Garden",
    calculateDistance("Faculty of Law", "Love Garden")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Law",
    "Faculty of Arts",
    calculateDistance("Faculty of Law", "Faculty of Arts")
  );

  // Faculty of Engineering
  addEdgeToGraph(
    graph,
    "Faculty of Engineering",
    "Lagoon Front",
    calculateDistance("Faculty of Engineering", "Lagoon Front")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Engineering",
    "Mariere Hostel",
    calculateDistance("Faculty of Engineering", "Mariere Hostel")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Engineering",
    "Senate Building",
    calculateDistance("Faculty of Engineering", "Senate Building")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Engineering",
    "Faculty of Science",
    calculateDistance("Faculty of Engineering", "Faculty of Science")
  );

  // Faculty of Science
  addEdgeToGraph(
    graph,
    "Faculty of Science",
    "Faculty of Engineering",
    calculateDistance("Faculty of Science", "Faculty of Engineering")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Science",
    "Jaja Hostel",
    calculateDistance("Faculty of Science", "Jaja Hostel")
  );
  addEdgeToGraph(
    graph,
    "Faculty of Science",
    "Unilag Medical Center",
    calculateDistance("Faculty of Science", "Unilag Medical Center")
  );

  // Wema Bank
  addEdgeToGraph(
    graph,
    "Wema Bank",
    "Faculty of Environmental Sciences",
    calculateDistance("Wema Bank", "Faculty of Environmental Sciences")
  );
  addEdgeToGraph(
    graph,
    "Wema Bank",
    "Faculty of Education",
    calculateDistance("Wema Bank", "Faculty of Education")
  );
  addEdgeToGraph(
    graph,
    "Wema Bank",
    "Unilag Sports Center",
    calculateDistance("Wema Bank", "Unilag Sports Center")
  );
  addEdgeToGraph(
    graph,
    "Wema Bank",
    "Unilag Gate",
    calculateDistance("Wema Bank", "Unilag Gate")
  );

  // Access Bank
  addEdgeToGraph(
    graph,
    "Access Bank",
    "New Hall",
    calculateDistance("Access Bank", "New Hall")
  );
  addEdgeToGraph(
    graph,
    "Access Bank",
    "New Hall Filling Station",
    calculateDistance("Access Bank", "New Hall Filling Station")
  );
  addEdgeToGraph(
    graph,
    "Access Bank",
    "Nithub Unilag",
    calculateDistance("Access Bank", "Nithub Unilag")
  );
  addEdgeToGraph(
    graph,
    "Access Bank",
    "CITS",
    calculateDistance("Access Bank", "CITS")
  );

  // First Bank
  addEdgeToGraph(
    graph,
    "First Bank",
    "Faculty of Social Sciences",
    calculateDistance("First Bank", "Faculty of Social Sciences")
  );
  addEdgeToGraph(
    graph,
    "First Bank",
    "Staff Quarters",
    calculateDistance("First Bank", "Staff Quarters")
  );
  addEdgeToGraph(
    graph,
    "First Bank",
    "Unilag DLI",
    calculateDistance("First Bank", "Unilag DLI")
  );

  // GTBank
  addEdgeToGraph(
    graph,
    "GTBank",
    "Mariere Hostel",
    calculateDistance("GTBank", "Mariere Hostel")
  );
  addEdgeToGraph(
    graph,
    "GTBank",
    "Zenith Bank",
    calculateDistance("GTBank", "Zenith Bank")
  );
  addEdgeToGraph(
    graph,
    "GTBank",
    "Moremi Hostel",
    calculateDistance("GTBank", "Moremi Hostel")
  );

  // Zenith Bank
  addEdgeToGraph(
    graph,
    "Zenith Bank",
    "GTBank",
    calculateDistance("Zenith Bank", "GTBank")
  );
  addEdgeToGraph(
    graph,
    "Zenith Bank",
    "Jaja Hostel",
    calculateDistance("Zenith Bank", "Jaja Hostel")
  );
  addEdgeToGraph(
    graph,
    "Zenith Bank",
    "Unilag Medical Center",
    calculateDistance("Zenith Bank", "Unilag Medical Center")
  );


  // Ecobank
  addEdgeToGraph(
    graph,
    "Ecobank",
    "Faculty of Mass Com.",
    calculateDistance("Ecobank", "Faculty of Mass Com.")
  );
  addEdgeToGraph(
    graph,
    "Ecobank",
    "Faculty of Arts",
    calculateDistance("Ecobank", "Faculty of Arts")
  );
  addEdgeToGraph(
    graph,
    "Ecobank",
    "Senate Building",
    calculateDistance("Ecobank", "Senate Building")
  );
  addEdgeToGraph(
    graph,
    "Ecobank",
    "Moremi Hostel",
    calculateDistance("Ecobank", "Moremi Hostel")
  );
  addEdgeToGraph(
    graph,
    "Ecobank",
    "Mariere Hostel",
    calculateDistance("Ecobank", "Mariere Hostel")
  );

  // Elkanemi Hostel
  addEdgeToGraph(
    graph,
    "Elkanemi Hostel",
    "Femi Gbaj. Hostel",
    calculateDistance("Elkanemi Hostel", "Femi Gbaj. Hostel")
  );
  addEdgeToGraph(
    graph,
    "Elkanemi Hostel",
    "Kofo Hostel",
    calculateDistance("Elkanemi Hostel", "Kofo Hostel")
  );
  addEdgeToGraph(
    graph,
    "Elkanemi Hostel",
    "Amina Hostel",
    calculateDistance("Elkanemi Hostel", "Amina Hostel")
  );

  // Femi Gbaj. Hostel
  addEdgeToGraph(
    graph,
    "Femi Gbaj. Hostel",
    "Faculty of Education",
    calculateDistance("Femi Gbaj. Hostel", "Faculty of Education")
  );
  addEdgeToGraph(
    graph,
    "Femi Gbaj. Hostel",
    "Elkanemi Hostel",
    calculateDistance("Femi Gbaj. Hostel", "Elkanemi Hostel")
  );

  // Biobaku Hostel
  addEdgeToGraph(
    graph,
    "Biobaku Hostel",
    "Staff Quarters",
    calculateDistance("Biobaku Hostel", "Staff Quarters")
  );
  addEdgeToGraph(
    graph,
    "Biobaku Hostel",
    "Amina Hostel",
    calculateDistance("Biobaku Hostel", "Amina Hostel")
  );
  addEdgeToGraph(
    graph,
    "Biobaku Hostel",
    "Kofo Hostel",
    calculateDistance("Biobaku Hostel", "Kofo Hostel")
  );

  // Amina Hostel
  addEdgeToGraph(
    graph,
    "Amina Hostel",
    "Elkanemi Hostel",
    calculateDistance("Amina Hostel", "Elkanemi Hostel")
  );
  addEdgeToGraph(
    graph,
    "Amina Hostel",
    "Kofo Hostel",
    calculateDistance("Amina Hostel", "Kofo Hostel")
  );
  addEdgeToGraph(
    graph,
    "Amina Hostel",
    "Biobaku Hostel",
    calculateDistance("Amina Hostel", "Biobaku Hostel")
  );
  addEdgeToGraph(
    graph,
    "Amina Hostel",
    "Staff Quarters",
    calculateDistance("Amina Hostel", "Staff Quarters")
  );

  // Kofo Hostel
  addEdgeToGraph(
    graph,
    "Kofo Hostel",
    "Biobaku Hostel",
    calculateDistance("Kofo Hostel", "Biobaku Hostel")
  );
  addEdgeToGraph(
    graph,
    "Kofo Hostel",
    "Amina Hostel",
    calculateDistance("Kofo Hostel", "Amina Hostel")
  );
  addEdgeToGraph(
    graph,
    "Kofo Hostel",
    "Elkanemi Hostel",
    calculateDistance("Kofo Hostel", "Elkanemi Hostel")
  );
  addEdgeToGraph(
    graph,
    "Kofo Hostel",
    "Staff Quarters",
    calculateDistance("Kofo Hostel", "Staff Quarters")
  );
  addEdgeToGraph(
    graph,
    "Kofo Hostel",
    "Education Garden",
    calculateDistance("Kofo Hostel", "Education Garden")
  );


  // Honors Hostel
  addEdgeToGraph(
    graph,
    "Honors Hostel",
    "Women's Society Hostel",
    calculateDistance("Honors Hostel", "Women's Society Hostel")
  );
  addEdgeToGraph(
    graph,
    "Honors Hostel",
    "Unilag DLI",
    calculateDistance("Honors Hostel", "Unilag DLI")
  );

  // Women's Society Hostel
  addEdgeToGraph(
    graph,
    "Women's Society Hostel",
    "Honors Hostel",
    calculateDistance("Women's Society Hostel", "Honors Hostel")
  );
  addEdgeToGraph(
    graph,
    "Women's Society Hostel",
    "Unilag DLI",
    calculateDistance("Women's Society Hostel", "Unilag DLI")
  );

  // Makama Hostel
  addEdgeToGraph(
    graph,
    "Makama Hostel",
    "Eninjoku Hostel",
    calculateDistance("Makama Hostel", "Eninjoku Hostel")
  );
  addEdgeToGraph(
    graph,
    "Makama Hostel",
    "Sodeinde Hostel",
    calculateDistance("Makama Hostel", "Sodeinde Hostel")
  );
  addEdgeToGraph(
    graph,
    "Makama Hostel",
    "New Hall",
    calculateDistance("Makama Hostel", "New Hall")
  );


  // Eninjoku Hostel
  addEdgeToGraph(
    graph,
    "Eninjoku Hostel",
    "Makama Hostel",
    calculateDistance("Eninjoku Hostel", "Makama Hostel")
  );
  addEdgeToGraph(
    graph,
    "Eninjoku Hostel",
    "Sodeinde Hostel",
    calculateDistance("Eninjoku Hostel", "Sodeinde Hostel")
  );


  // Sodeinde Hostel
  addEdgeToGraph(
    graph,
    "Sodeinde Hostel",
    "Makama Hostel",
    calculateDistance("Sodeinde Hostel", "Makama Hostel")
  );
  addEdgeToGraph(
    graph,
    "Sodeinde Hostel",
    "Eninjoku Hostel",
    calculateDistance("Sodeinde Hostel", "Eninjoku Hostel")
  );
  addEdgeToGraph(
    graph,
    "Sodeinde Hostel",
    "New Hall",
    calculateDistance("Sodeinde Hostel", "New Hall")
  );



  // Jaja Hostel
  addEdgeToGraph(
    graph,
    "Jaja Hostel",
    "Zenith Bank",
    calculateDistance("Jaja Hostel", "Zenith Bank")
  );
  addEdgeToGraph(
    graph,
    "Jaja Hostel",
    "Faculty of Science",
    calculateDistance("Jaja Hostel", "Faculty of Science")
  );
  addEdgeToGraph(
    graph,
    "Jaja Hostel",
    "Unilag Medical Center",
    calculateDistance("Jaja Hostel", "Unilag Medical Center")
  );



  // Mariere Hostel
  addEdgeToGraph(
    graph,
    "Mariere Hostel",
    "Faculty of Engineering",
    calculateDistance("Mariere Hostel", "Faculty of Engineering")
  );
  addEdgeToGraph(
    graph,
    "Mariere Hostel",
    "GTBank",
    calculateDistance("Mariere Hostel", "GTBank")
  );
  addEdgeToGraph(
    graph,
    "Mariere Hostel",
    "Ecobank",
    calculateDistance("Mariere Hostel", "Ecobank")
  );
  addEdgeToGraph(
    graph,
    "Mariere Hostel",
    "Moremi Hostel",
    calculateDistance("Mariere Hostel", "Moremi Hostel")
  );


  // Moremi Hostel
  addEdgeToGraph(
    graph,
    "Moremi Hostel",
    "Zenith Bank",
    calculateDistance("Moremi Hostel", "Zenith Bank")
  );
  addEdgeToGraph(
    graph,
    "Moremi Hostel",
    "Ecobank",
    calculateDistance("Moremi Hostel", "Ecobank")
  );
  addEdgeToGraph(
    graph,
    "Moremi Hostel",
    "GTBank",
    calculateDistance("Moremi Hostel", "GTBank")
  );


  // Senate Building
  addEdgeToGraph(
    graph,
    "Senate Building",
    "Unilag Main Library",
    calculateDistance("Senate Building", "Unilag Main Library")
  );
  addEdgeToGraph(
    graph,
    "Senate Building",
    "Faculty of Mngmt Scs.",
    calculateDistance("Senate Building", "Faculty of Mngmt Scs.")
  );
  addEdgeToGraph(
    graph,
    "Senate Building",
    "Faculty of Engineering",
    calculateDistance("Senate Building", "Faculty of Engineering")
  );
  addEdgeToGraph(
    graph,
    "Senate Building",
    "Ecobank",
    calculateDistance("Senate Building", "Ecobank")
  );
  addEdgeToGraph(
    graph,
    "Senate Building",
    "Love Garden",
    calculateDistance("Senate Building", "Love Garden")
  );


  // New Hall
  addEdgeToGraph(
    graph,
    "New Hall",
    "Access Bank",
    calculateDistance("New Hall", "Access Bank")
  );
  addEdgeToGraph(
    graph,
    "New Hall",
    "New Hall Filling Station",
    calculateDistance("New Hall", "New Hall Filling Station")
  );
  addEdgeToGraph(
    graph,
    "New Hall",
    "CITS",
    calculateDistance("New Hall", "CITS")
  );



  // New Hall Filling Station
  addEdgeToGraph(
    graph,
    "New Hall Filling Station",
    "Access Bank",
    calculateDistance("New Hall Filling Station", "Access Bank")
  );
  addEdgeToGraph(
    graph,
    "New Hall Filling Station",
    "Nithub Unilag",
    calculateDistance("New Hall Filling Station", "Nithub Unilag")
  );
  addEdgeToGraph(
    graph,
    "New Hall Filling Station",
    "Unilag Sports Center",
    calculateDistance("New Hall Filling Station", "Unilag Sports Center")
  );
  addEdgeToGraph(
    graph,
    "New Hall Filling Station",
    "Amphitheatre",
    calculateDistance("New Hall Filling Station", "Amphitheatre")
  );

  // Nithub Unilag
  addEdgeToGraph(
    graph,
    "Nithub Unilag",
    "Faculty of Social Sciences",
    calculateDistance("Nithub Unilag", "Faculty of Social Sciences")
  );
  addEdgeToGraph(
    graph,
    "Nithub Unilag",
    "New Hall Filling Station",
    calculateDistance("Nithub Unilag", "New Hall Filling Station")
  );
  addEdgeToGraph(
    graph,
    "Nithub Unilag",
    "Access Bank",
    calculateDistance("Nithub Unilag", "Access Bank")
  );

  // Unilag Sports Center
  addEdgeToGraph(
    graph,
    "Unilag Sports Center",
    "Wema Bank",
    calculateDistance("Unilag Sports Center", "Wema Bank")
  );
  addEdgeToGraph(
    graph,
    "Unilag Sports Center",
    "New Hall Filling Station",
    calculateDistance("Unilag Sports Center", "New Hall Filling Station")
  );
  addEdgeToGraph(
    graph,
    "Unilag Sports Center",
    "Amphitheatre",
    calculateDistance("Unilag Sports Center", "Amphitheatre")
  );
  addEdgeToGraph(
    graph,
    "Unilag Sports Center",
    "Faculty of Environmental Sciences",
    calculateDistance("Unilag Sports Center", "Faculty of Environmental Sciences")
  );

  // DLI

  // Unilag DLI
  addEdgeToGraph(
    graph,
    "Unilag DLI",
    "Faculty of Social Sciences",
    calculateDistance("Unilag DLI", "Faculty of Social Sciences")
  );
  addEdgeToGraph(
    graph,
    "Unilag DLI",
    "Honors Hostel",
    calculateDistance("Unilag DLI", "Honors Hostel")
  );
  addEdgeToGraph(
    graph,
    "Unilag DLI",
    "Women's Society Hostel",
    calculateDistance("Unilag DLI", "Women's Society Hostel")
  );
  addEdgeToGraph(
    graph,
    "Unilag DLI",
    "First Bank",
    calculateDistance("Unilag DLI", "First Bank")
  );
  addEdgeToGraph(
    graph,
    "Unilag DLI",
    "Unilag Second Gate",
    calculateDistance("Unilag DLI", "Unilag Second Gate")
  );


  // Staff Quarters
  addEdgeToGraph(
    graph,
    "Staff Quarters",
    "Biobaku Hostel",
    calculateDistance("Staff Quarters", "Biobaku Hostel")
  );
  addEdgeToGraph(
    graph,
    "Staff Quarters",
    "Amina Hostel",
    calculateDistance("Staff Quarters", "Amina Hostel")
  );
  addEdgeToGraph(
    graph,
    "Staff Quarters",
    "Kofo Hostel",
    calculateDistance("Staff Quarters", "Kofo Hostel")
  );
  addEdgeToGraph(
    graph,
    "Staff Quarters",
    "First Bank",
    calculateDistance("Staff Quarters", "First Bank")
  );

  // Love Garden
  addEdgeToGraph(
    graph,
    "Love Garden",
    "Faculty of Law",
    calculateDistance("Love Garden", "Faculty of Law")
  );
  addEdgeToGraph(
    graph,
    "Love Garden",
    "Faculty of Arts",
    calculateDistance("Love Garden", "Faculty of Arts")
  );
  addEdgeToGraph(
    graph,
    "Love Garden",
    "Senate Building",
    calculateDistance("Love Garden", "Senate Building")
  );
  addEdgeToGraph(
    graph,
    "Love Garden",
    "Unilag Main Library",
    calculateDistance("Love Garden", "Unilag Main Library")
  );
  addEdgeToGraph(
    graph,
    "Love Garden",
    "Faculty of Mngmt Scs.",
    calculateDistance("Love Garden", "Faculty of Mngmt Scs.")
  );





  // Main Library
  addEdgeToGraph(
    graph,
    "Unilag Main Library",
    "Faculty of Engineering",
    calculateDistance("Unilag Main Library", "Faculty of Engineering")
  );
  addEdgeToGraph(
    graph,
    "Unilag Main Library",
    "Senate Building",
    calculateDistance("Unilag Main Library", "Senate Building")
  );
  addEdgeToGraph(
    graph,
    "Unilag Main Library",
    "Faculty of Mngmt Scs.",
    calculateDistance("Unilag Main Library", "Faculty of Mngmt Scs.")
  );
  addEdgeToGraph(
    graph,
    "Unilag Main Library",
    "Faculty of Arts",
    calculateDistance("Unilag Main Library", "Faculty of Arts")
  );




  // CITS
  addEdgeToGraph(
    graph,
    "CITS",
    "Access Bank",
    calculateDistance("CITS", "Access Bank")
  );
  addEdgeToGraph(
    graph,
    "CITS",
    "Faculty of Mass Com.",
    calculateDistance("CITS", "Faculty of Mass Com.")
  );
  addEdgeToGraph(
    graph,
    "CITS",
    "New Hall",
    calculateDistance("CITS", "New Hall")
  );


  // Unilag Medical Center
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Faculty of Science",
    calculateDistance("Unilag Medical Center", "Faculty of Science")
  );
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Jaja Hostel",
    calculateDistance("Unilag Medical Center", "Jaja Hostel")
  );
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Zenith Bank",
    calculateDistance("Unilag Medical Center", "Zenith Bank")
  );
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Scholars Suite",
    calculateDistance("Unilag Medical Center", "Scholars Suite")
  );
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Unilag Printing Press",
    calculateDistance("Unilag Medical Center", "Unilag Printing Press")
  );
  addEdgeToGraph(
    graph,
    "Unilag Medical Center",
    "Moremi Hostel",
    calculateDistance("Unilag Medical Center", "Moremi Hostel")
  );


  

  // Scholar's suite
  addEdgeToGraph(
    graph,
    "Scholars Suite",
    "Unilag Medical Center",
    calculateDistance("Scholars Suite", "Unilag Medical Center")
  );
  addEdgeToGraph(
    graph,
    "Scholars Suite",
    "Unilag Printing Press",
    calculateDistance("Scholars Suite", "Unilag Printing Press")
  );

  // Unilag Printing Press
  addEdgeToGraph(
    graph,
    "Unilag Printing Press",
    "Scholars Suite",
    calculateDistance("Unilag Printing Press", "Scholars Suite")
  );
  addEdgeToGraph(
    graph,
    "Unilag Printing Press",
    "Unilag DLI",
    calculateDistance("Unilag Printing Press", "Unilag DLI")
  );

 
  //Lagoon
  addEdgeToGraph(
    graph,
    "Lagoon Front",
    "Faculty of Engineering",
    calculateDistance("Lagoon Front", "Faculty of Engineering")
  );
  addEdgeToGraph(
    graph,
    "Lagoon Front",
    "Unilag Main Library",
    calculateDistance("Lagoon Front", "Unilag Main Library")
  );

  // Education Garden
  addEdgeToGraph(
    graph,
    "Education Garden",
    "Kofo Hostel",
    calculateDistance("Education Garden", "Kofo Hostel")
  );
  addEdgeToGraph(
    graph,
    "Education Garden",
    "Faculty of Education",
    calculateDistance("Education Garden", "Faculty of Education")
  );

  // Unilag Staff School
  addEdgeToGraph(
    graph,
    "Unilag Staff School",
    "Unilag DLI",
    calculateDistance("Unilag Staff School", "Unilag DLI")
  );
  addEdgeToGraph(
    graph,
    "Unilag Staff School",
    "Unilag Second Gate",
    calculateDistance("Unilag Staff School", "Unilag Second Gate")
  );

  // Amphitheatre
  addEdgeToGraph(
    graph,
    "Amphitheatre",
    "Unilag Sports Center",
    calculateDistance("Amphitheatre", "Unilag Sports Center")
  );
  addEdgeToGraph(
    graph,
    "Amphitheatre",
    "New Hall Filling Station",
    calculateDistance("Amphitheatre", "New Hall Filling Station")
  );

  
}

export function findPath(location1: string, location2: string) {
  setUpGraph();
  return findShortestPath(graph, location1, location2);
}

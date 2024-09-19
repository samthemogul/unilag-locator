import { useRef, useEffect } from "react";
import { IPath } from '../App'


interface PathProp {
  paths: IPath[]
}
const Path = ({ paths } : PathProp) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      // Clear existing lines before drawing new ones
      svg.innerHTML = "";

      paths.forEach((path) => {
        const { start, stop } = path;
        const x1 = start.x + 30; // Adjust for circle radius
        const y1 = start.y + 30;
        const x2 = stop.x + 30;
        const y2 = stop.y + 30;

        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );

        
        line.setAttribute("x1", x1.toString());
        line.setAttribute("y1", y1.toString());
        line.setAttribute("x2", x2.toString());
        line.setAttribute("y2", y2.toString());
        line.setAttribute("stroke-width", "13");
        line.setAttribute("stroke", "#24C752");
        line.setAttribute("stroke-linecap", "round");
        line.setAttribute("stroke-linejoin", "round");
        svg.appendChild(line);
      });
    }
  }, [paths]); // Update lines when paths array changes

  return (
    <svg ref={svgRef} width="10000" height="30000">
      {/* No need to render a single line here */}
    </svg>
  );
};

export default Path;
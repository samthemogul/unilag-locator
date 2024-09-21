import { useRef, useEffect, useState } from "react";
import { IPath } from "../App";

interface PathProp {
  paths: IPath[];
  onResultsPage: boolean;
}
const Path = ({ paths, onResultsPage }: PathProp) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const animateLine = (index: number) => {
        const { start, stop } = paths[index];
        const x1 = start.x + 50; 
        const y1 = start.y + 50;
        const x2 = stop.x + 50;
        const y2 = stop.y + 50;

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

        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        line.setAttribute("stroke-dasharray", length.toString());
        line.setAttribute("stroke-dashoffset", length.toString());

        svg.appendChild(line);
        const animation = line.animate(
          [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
          {
            duration: 2000, 
            fill: "forwards" as FillMode,
            easing: "ease-in-out",
          }
        );
        animation.addEventListener("finish", () => {
          if (index < paths.length - 1) {
            setCurrentLineIndex(index + 1); 
          }
        });
      };
      if (paths.length > 0) {
        animateLine(currentLineIndex);
      }
    }
  }, [paths, currentLineIndex]);

  useEffect(() => {
    if (!onResultsPage) {
      const svg = svgRef.current;
      if (svg) {
        while (svg.lastChild) {
          svg.removeChild(svg.lastChild);
        }
      }
      setCurrentLineIndex(0);
    }
  }, [onResultsPage])

  return <svg ref={svgRef} width="10000" height="30000"></svg>;
};

export default Path;

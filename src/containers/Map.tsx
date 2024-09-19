import { useState, useRef, useEffect } from "react";
import { locations } from "../constants";
import { locationOnMap } from "../constants/locations";
import "../styles/canvas.css";

interface CirclePosition {
  x: number;
  y: number;
}

const Map = () => {
  const [circle1Position, setCircle1Position] = useState<CirclePosition>({
    x: 0,
    y: 0,
  });
  const [circle2Position, setCircle2Position] = useState<CirclePosition>({
    x: 1000,
    y: 550,
  });
  const lineRef = useRef<SVGSVGElement>(null);

  // Calculate line coordinates based on circle positions
  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const x1 = circle1Position.x + 10; // Adjust for circle radius
      const y1 = circle1Position.y + 10;
      const x2 = circle2Position.x + 10;
      const y2 = circle2Position.y + 10;

      line.setAttribute("x1", x1.toString());
      line.setAttribute("y1", y1.toString());
      line.setAttribute("x2", x2.toString());
      line.setAttribute("y2", y2.toString());
    }
  }, [circle1Position, circle2Position]);

  return (
    <div className="canvas">
        {locationOnMap.map((location, index) => (
            <div
            key={index}
            className="location"
            style={{
              position: "absolute",
              top: location.y,
              left: location.x,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "black",
              }}
            />
            <p className='location-description'>{location.name}</p>
          </div>
        ))}
    </div>
  );
};

{
  /* <svg width="10000" height="30000">
        <line
          ref={lineRef}
          x1="0"
          y1="0"
          x2="0"
          y2="0"
          stroke="green"
          strokeWidth="10"
        />
      </svg> */
}

export default Map;

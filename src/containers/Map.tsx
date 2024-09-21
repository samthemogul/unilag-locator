import { useRef, useState, useEffect } from "react";
import Path from "../components/Path"; // Import the Path component
import { locationOnMap } from "../constants/locations";
import "../styles/canvas.css";
import { IPath } from "../App";
import { useGesture } from "react-use-gesture";
import { locationIcon } from "../constants";

interface MapProp {
  paths: IPath[];
  onResultsPage: boolean;
}

const Map = ({ paths, onResultsPage }: MapProp) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapCenter, setMapCenter] = useState({ x: 0, y: 100, scale: 0.7 });
  const [isFollowingPath, setIsFollowingPath] = useState(false); // Track if following path

  // Gesture handling for dragging and zooming
  useGesture(
    {
      onDrag: ({ offset }) => { // Stop following the path on manual drag
        setMapCenter((prevCenter) => ({
          ...prevCenter,
          x: offset[0],
          y: offset[1],
        }));
      },
      onPinch: ({ offset: [d] }) => { // Stop following the path on manual pinch
        setMapCenter((prevCenter) => ({ ...prevCenter, scale: 1 + d / 200 }));
      },
    },
    { domTarget: mapRef, eventOptions: { passive: false } }
  );

  // Function to zoom into a specific location
  const zoomToLocation = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMapCenter((prevCenter) => ({ ...prevCenter, x: x, y: y, scale: 2 }));
  };

  // Effect to handle path-following logic
  useEffect(() => {
    let animationTimeout: string | number | NodeJS.Timeout | undefined;
    if (onResultsPage && paths.length > 0 && !isFollowingPath) {
      const followPath = async () => {
        setIsFollowingPath(true); // Start following path
        for (let i = 0; i < paths.length; i++) {
          const { start, stop } = paths[i];
          // Calculate midpoint of the current path segment
          const midX = (start.x + stop.x) / 2;
          const midY = (start.y + stop.y) / 2;

          console.log("midX: " + start.x, "midY" + start.y)


          // Move the map to the start of the path
          setMapCenter({
            x: -start.x + window.innerWidth / 1.5,
            y: -start.y + window.innerHeight / 1.5,
            scale: 1.2, // Adjust scale based on preference
          });

          // Wait for a short duration before moving to the next segment
          await new Promise((resolve) => {
            animationTimeout = setTimeout(resolve, 2000); // 500ms delay between movements
          });
        }
      };

      followPath();
    }
    if(!onResultsPage) {
      setIsFollowingPath(false);
      clearTimeout(animationTimeout);
    }

    
  }, [onResultsPage, isFollowingPath]);

  // Reset the map when leaving the results page
  useEffect(() => {
    if (!onResultsPage) {
      setMapCenter({ x: 0, y: 0, scale: 1 });
      setIsFollowingPath(false);
    }
  }, [onResultsPage]);

  return (
    <div
      ref={mapRef}
      style={{
        position: "relative",
        width: "200%",
        height: "200%",
        left: mapCenter.x,
        top: mapCenter.y,
        touchAction: "none",
        transition: "0.5s all", // Smooth transition for map movement
        transform: `scale(${mapCenter.scale})`,
      }}
    >
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
          <img
            src={locationIcon}
            alt={location.name}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <p className="location-description">{location.name}</p>
        </div>
      ))}
      {/* Pass all paths to the Path component for dynamic line rendering */}
      <Path onResultsPage={onResultsPage} paths={paths} />
    </div>
  );
};

export default Map;

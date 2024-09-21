import { useRef, useState, useEffect } from "react";
import Path from "../components/Path"; 
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
  const [isFollowingPath, setIsFollowingPath] = useState(false); 


  useGesture(
    {
      onDrag: ({ offset }) => { 
        setMapCenter((prevCenter) => ({
          ...prevCenter,
          x: offset[0],
          y: offset[1],
        }));
      },
      onPinch: ({ offset: [d] }) => { 
        setMapCenter((prevCenter) => ({ ...prevCenter, scale: 1 + d / 200 }));
      },
    },
    { domTarget: mapRef, eventOptions: { passive: false } }
  );



  useEffect(() => {
    let animationTimeout: string | number | NodeJS.Timeout | undefined;
    if (onResultsPage && paths.length > 0 && !isFollowingPath) {
      const followPath = async () => {
        setIsFollowingPath(true);
        for (let i = 0; i < paths.length; i++) {
          const { start } = paths[i];

          console.log("midX: " + start.x, "midY" + start.y)

          setMapCenter({
            x: -start.x + window.innerWidth / 1.5,
            y: -start.y + window.innerHeight / 1.5,
            scale: 1.2, 
          });
          await new Promise((resolve) => {
            animationTimeout = setTimeout(resolve, 2000); 
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
        transition: "0.5s all",
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
      <Path onResultsPage={onResultsPage} paths={paths} />
    </div>
  );
};

export default Map;

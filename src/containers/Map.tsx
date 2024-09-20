import Path from "../components/Path"; // Import the Path component
import { locationOnMap } from "../constants/locations";
import "../styles/canvas.css";
import { IPath } from '../App'

interface MapProp {
  paths: IPath[];
  onResultsPage: boolean;
}

const Map = ({ paths, onResultsPage} : MapProp) => {
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
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "black",
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
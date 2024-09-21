import "./App.css";
import { useState } from "react";
import { unilagLogo, locations } from "./constants";
import SuggestionBox from "./components/SuggestionBox";
import Map from "./containers/Map";
import LocationResults from "./containers/LocationResults";
import { findPath } from "./worker/graph";
import generatePathDesc from "./worker/pathDescriptionGen";

interface UnilagLocation {
  name: string;
  x: number;
  y: number;
}

export interface IPath {
  desc: string;
  start: UnilagLocation;
  stop: UnilagLocation;
}

function App() {
  const [focusedLocation, setFocusedLocation] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] =
    useState<boolean>(false);
  const [location, setLocation] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [onResultsPage, setOnResultsPage] = useState<boolean>(false);
  const [showMobileDirections, setShowMobileDirections] =
    useState<boolean>(false);
  const [paths, setPaths] = useState<IPath[]>([]);

  const handleSelectLocation = (location: string) => {
    setLocation(location);
    setFocusedLocation(false);
  };

  const handleSelectDestination = (destination: string) => {
    setDestination(destination);
    setSelectedDestination(false);
  };

  const handleBlur = () => {
    if (!focusedLocation) {
      setFocusedLocation(false);
    }
    if (!selectedDestination) {
      setSelectedDestination(false);
    }
  };

  const handleSubmit = () => {
    const locationResults = findPath(location, destination);
    const genPaths = locationResults.map((location, i) => {
      const start = location;
      const stop = locationResults[i + 1]
        ? locationResults[i + 1]
        : locationResults[i];
      const desc = locationResults[i + 1]
        ? generatePathDesc(location.name, locationResults[i + 1].name)!
        : generatePathDesc(location.name, location.name)!;
      return { start: start!, stop: stop!, desc };
    });
    if (genPaths) {
      setPaths(genPaths);
    }
    setOnResultsPage(true);
  };

  const backToHome = () => {
    setPaths([]);
    setLocation("");
    setDestination("");
    setFocusedLocation(false);
    setSelectedDestination(false);
    setOnResultsPage(false);
  };

  return (
    <main className="main-body">
      {/* Section to enter where you are and where you are going to */}
      <div className="infosection">
        <div className="logo">
          <div className="logo-imagecontainer">
            <img className="logo-image" src={unilagLogo} alt="Unilag Logo" />
          </div>
          <h3 className="logo-text">Unilag Locator</h3>
        </div>
        <div className="info">
          {!onResultsPage ? (
            <>
              <h3 className="header-text">Where are you?</h3>
              <input
                className="input-field"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setFocusedLocation(true)}
                onBlur={handleBlur}
              />
              {focusedLocation ? (
                <SuggestionBox
                  locations={locations}
                  currentLocationValue={location}
                  selectLocation={handleSelectLocation}
                />
              ) : null}
              <h3 className="header-text">Where are you going to?</h3>
              <input
                className="input-field"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination"
                onFocus={() => setSelectedDestination(true)}
                onBlur={handleBlur}
              />
              {selectedDestination ? (
                <SuggestionBox
                  locations={locations}
                  currentDestinationValue={destination}
                  selectDestination={handleSelectDestination}
                />
              ) : null}
              <button onClick={handleSubmit} className="button">
                Get Directions
              </button>
            </>
          ) : (
            <>
              <LocationResults
                paths={paths}
                location={location}
                destination={destination}
              />
              <button onClick={backToHome} className="button">
                Back to home
              </button>
            </>
          )}
        </div>
      </div>

      {/* Section to display the map */}
      <div className="mapsection">
        <Map onResultsPage={onResultsPage} paths={paths} />
      </div>

      {/* MObile Section */}
      <div className="mobile-sec">
        {!onResultsPage ? (
          <div className="mobile-form-section">
            <div className="logo">
              <div className="logo-imagecontainer">
                <img
                  className="logo-image"
                  src={unilagLogo}
                  alt="Unilag Logo"
                />
              </div>
              <h3 className="logo-text">Unilag Locator</h3>
            </div>
            <div className="info">
              {!onResultsPage ? (
                <>
                  <h3 className="header-text">Where are you?</h3>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setFocusedLocation(true)}
                    onBlur={handleBlur}
                  />
                  {focusedLocation ? (
                    <SuggestionBox
                      locations={locations}
                      currentLocationValue={location}
                      selectLocation={handleSelectLocation}
                    />
                  ) : null}
                  <h3 className="header-text">Where are you going to?</h3>
                  <input
                    className="input-field"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter your destination"
                    onFocus={() => setSelectedDestination(true)}
                    onBlur={handleBlur}
                  />
                  {selectedDestination ? (
                    <SuggestionBox
                      locations={locations}
                      currentDestinationValue={destination}
                      selectDestination={handleSelectDestination}
                    />
                  ) : null}
                </>
              ) : (
                <>
                  <LocationResults
                    paths={paths}
                    location={location}
                    destination={destination}
                  />
                  <button onClick={backToHome} className="button">
                    Back to home
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="logo">
              <div className="logo-imagecontainer">
                <img
                  className="logo-image"
                  src={unilagLogo}
                  alt="Unilag Logo"
                />
              </div>
              <h3 className="logo-text">Unilag Locator</h3>
            </div>
            <div className="mobilemap">
              <Map onResultsPage={onResultsPage} paths={paths} />
            </div>
            {showMobileDirections ? (
              <div className="mobile-directions">
                <button
                  onClick={() => setShowMobileDirections(false)}
                  className="close-pop"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
                <LocationResults
                  paths={paths}
                  location={location}
                  destination={destination}
                />
              </div>
            ) : null}
          </>
        )}
        <div className="action-buttons">
          {!onResultsPage ? (
            <button onClick={handleSubmit} className="mobile-btn">
              Get directions
            </button>
          ) : (
            <div className="map-buttons">
              <button
                onClick={() => (backToHome(), setShowMobileDirections(false))}
                className="mobile-btn"
              >
                Home
              </button>
              <button
                onClick={() => setShowMobileDirections(true)}
                className="mobile-btn"
              >
                Directions
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;

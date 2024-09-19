import "./App.css";
import { useState } from "react";
import { unilagLogo, locations } from "./constants";
import SuggestionBox from "./components/SuggestionBox";
import Map from "./containers/Map";

function App() {
  const [focusedLocation, setFocusedLocation] = useState<boolean>(false);
  const [selectedDestination, setSelectedDestination] = useState<boolean>(false)
  const [ location, setLocation] = useState<string>("");
  const [ destination, setDestination] = useState<string>("");


  const handleSelectLocation = (location: string) => {
    setLocation(location);
    setFocusedLocation(false);
  }

  const handleSelectDestination  = (destination: string) => {
    setDestination(destination);
    setSelectedDestination(false)
  }

  const handleBlur = () => {
    if(!focusedLocation){
      setFocusedLocation(false);
    }
    if(!selectedDestination){
      setSelectedDestination(false)
    }
    }

    const handleSubmit = () => {
      alert(`Location: ${location}, Dest: ${destination}`);
    }


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
          {focusedLocation ? <SuggestionBox locations={locations} currentLocationValue={location} selectLocation={handleSelectLocation}  /> : null}
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
          {selectedDestination ? <SuggestionBox locations={locations} currentDestinationValue={destination} selectDestination={handleSelectDestination} /> : null}
          <button onClick={handleSubmit} className="button">Get Directions</button>
        </div>
      </div>

      {/* Section to display the map */}
      <div className="mapsection">
        <Map />
      </div>
    </main>
  );
}

export default App;

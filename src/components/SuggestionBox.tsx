import React from "react";
import '../styles/suggestionbox.css';

interface SuggestionBoxProps {
  locations: string[];
  currentLocationValue?: string;
  currentDestinationValue?: string;
  selectLocation?: (location: string) => void;
  selectDestination?: (destination: string) => void;
}

const SuggestionBox = ({
  locations,
  currentLocationValue,
  currentDestinationValue,
  selectDestination,
  selectLocation,
}: SuggestionBoxProps) => {
  return (
    <div className='suggest-box-con'>
      <ul>
        {locations.map((location, index) => {
          if (currentLocationValue && currentLocationValue.length > 0) {
            if (
              location
                .toLowerCase()
                .includes(currentLocationValue.toLowerCase())
            ) {
              return (
                <li
                  key={index}
                  onClick={() => selectLocation && selectLocation(location)}
                >
                  {location}
                </li>
              );
            }
          } else if (
            currentDestinationValue &&
            currentDestinationValue.length > 0
          ) {
            if (
              location
                .toLowerCase()
                .includes(currentDestinationValue.toLowerCase())
            ) {
              return (
                <li
                  key={index}
                  onClick={() =>
                    selectDestination && selectDestination(location)
                  }
                >
                  {location}
                </li>
              );
            }
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default SuggestionBox;

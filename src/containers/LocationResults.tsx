import { IPath } from '../App'
import '../styles/directions.css'

interface LocResultsProp {
  paths: IPath[];
  location: string;
  destination: string;
}

const LocationResults = ({ paths, location, destination } : LocResultsProp) => {
  return (
    <div>
      <h2 className='results-header'>This is how you get to <span className='hightlight-local'>{destination}</span> from <span className='hightlight-local'>{location}</span></h2>
      <div className='results-con'>
        {paths.map((path, index) => (
          <div className='direction' key={index}>
           { path.desc.length > 0 ? <>
            <div className="green-point-con">
              <div className='green-point'></div>
            </div>
            <p className='direction-text'>{path.desc}</p>
           </> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocationResults
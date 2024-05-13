import "./TrackSearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




const TrackSearch = ({ onFilterChange }) => {

    return(
        <div className="track_">
            <button className="glass-btn btn"><FontAwesomeIcon icon={faMagnifyingGlass} className="glass-icon"/></button>
            <input className="filter-inp " placeholder="Filter..." />
        </div>
    )
}

export default TrackSearch;
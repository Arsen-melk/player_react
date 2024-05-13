import "./TrackNum.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

const TrackNum = () => {

    function listShow (){
        alert("List not available, sorry")
    }
    return (
                <div className="trackNum">
                    <button className="form-btn btn" onClick={listShow}>
                        <FontAwesomeIcon icon={faArrowsTurnToDots} className="reverse-icon"/>
                        <span className="track-str">Track Nu...</span>
                        <FontAwesomeIcon icon={faCircleDown}  className="down-icon"/>
                    </button>
                </div>
    )
}

export default TrackNum;
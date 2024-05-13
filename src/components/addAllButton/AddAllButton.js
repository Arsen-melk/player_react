import "./AddAllButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';


//Create the playallbutton to show the songs
const AddAllButton = () => {

    const showSongs = () => {
        var promptShow = window.confirm("Do you want to show all songs list ?");

        if (promptShow === true){
            alert("Sorry, this is a simulation")
        }
        else{alert("Ok")}
    }
    // return (
    //     <div className="add-all_" >
    //         <button className="add-all-button btn">
    //         <FontAwesomeIcon icon={faPlus} className="plus-icon"/>
    //          <span className="add-all">Add All</span>
    //         </button>
    //         <button className="down-button btn" onClick={showSongs}>
    //         <FontAwesomeIcon icon={faCircleDown} className="down-icon"/>
    //         </button>
    //     </div>
    // )
}

export default AddAllButton
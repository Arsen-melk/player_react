import "./PlayJoinAll.css"
import PlayAllButton from "../playAllButton/PlayAllButton";
import AddAllButton from "../addAllButton/AddAllButton";

const PlayJoinAll = () => {
    return(
        <div className="play-and-add">
            <PlayAllButton/>
            <AddAllButton/>
        </div>
    )
}


export default PlayJoinAll;
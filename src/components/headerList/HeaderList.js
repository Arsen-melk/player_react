import "./HeaderList.css";


//Component for the top of the playlist
const HeaderList = () => {
    return (
        <div className="header-list">
            <div className="header-list-item empty"></div>
            <div className="header-list-item song"><h4 className="song-str">Song Name</h4></div>
            <div className="header-list-item artist"><h4>Artist Name</h4></div>
            <div className="header-list-item track"><h4>Track</h4></div>
            <div className="header-list-item empty_"></div>
        </div>
    )
}

export default HeaderList
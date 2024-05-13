import React from 'react';
import songs from '../../data/DataSong';
import SongRow from '../songRow/SongRow';
import "./SongList.css"

const SongList = () => {
  return (
    <div className="song-list">
      
      {songs.map((song) => (
        <SongRow key={song.id} song={song} />
      ))}  
    </div>

    //We use the map 0method to display each row of data on the screen
    
  );
}

export default SongList;
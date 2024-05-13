import React from 'react';
import "./SongRow.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';


const SongRow = ({ song }) => {
  return (
       <div className="song-row">
          <span className='data-item first-item'><FontAwesomeIcon icon={faList} className='list-icon'/><FontAwesomeIcon icon={faCircleRight} className='circle-icon'/></span>
          <span className='data-item' ><h4>{song.songName}</h4></span>
          <span className='data-item'><h4>{song.artistName}</h4></span>
          <span className='data-item'><h4>{song.trackNumber}</h4></span>
          <span className='data-item'>
            <FontAwesomeIcon icon={faHeart} className='heart-icon icon-data'/>
            <FontAwesomeIcon icon={faCheck} className='check-icon icon-data'/>
            <FontAwesomeIcon icon={faArrowRotateRight} className='rot-icon icon-data'/>
            <FontAwesomeIcon icon={faArrowDownLong} className='long-icon '/>
            </span>
            
      
      
    </div>

    //We create the sorted data one by one to pass it to the SongList component
    
    
   
  );
}

export default SongRow;
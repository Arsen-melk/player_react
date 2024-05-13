import "./PlayAllButton.css"
import React ,{useEffect, useRef, useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay , faPause} from '@fortawesome/free-solid-svg-icons';
import { faStepBackward,faStepForward } from '@fortawesome/free-solid-svg-icons';

import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import songs from '../../data/DataSong';

//Create the playallbutton to play the songs
const PlayAllButton = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef=useRef(null);

  const handlePlayNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false); 
  };

  const handlePlayPrev = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);  
  };
  
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevState) => !prevState); // Toggle play/pause state
  };

  useEffect(() => {
    const handleEnded = () => {
      handlePlayNext();
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  
  
  return (
    <div className="play-music">
      <button className="prev-button btn" onClick={handlePlayPrev}>
        <FontAwesomeIcon icon={faStepBackward} className="prev-icon" />
      </button>
        <button className="play-all-button btn" onClick={handlePlayPause}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="play-icon"/>
                <span className="play-all">{isPlaying ? 'Pause' : 'Play All'}</span>
                
        </button>
        <button className="next-button btn" onClick={handlePlayNext}>
        <FontAwesomeIcon icon={faStepForward} className="next-icon" />
      </button>
        <button className="down-button btn" >
        <FontAwesomeIcon icon={faCircleDown} className="down-icon-first"/>
        </button>
          <div className="sudioDiv">
          <audio className="audio" ref={audioRef} src={songs[currentSongIndex].audioSrc} controls></audio>

          </div>
    </div>
    
  );
};

export default PlayAllButton;

import './App.css';
import MusicUploadForm from './components/musicUploadForm/MusicUploadForm';
import HeaderList from './components/headerList/HeaderList';
import SongList from './components/songList/SongList';
import PlayJoinAll from './components/playJoinAll/PlayJoinAll';
import Upload from './components/Upload/Upload';

function App() {

  

  return (
    <div className="App">
      <h1 className='project-title'>React Music Player</h1>
      <header className="App-header">
       <div className='headers-btn'>
       <PlayJoinAll/>
       <MusicUploadForm />
       </div>
       
      </header>
       <HeaderList/>
       <SongList />
       <Upload/>
    </div>
  );
}

export default App;



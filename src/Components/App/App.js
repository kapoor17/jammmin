import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';

const App = () => {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar/>
        <div class="App-playlist">
          <SearchResult/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;

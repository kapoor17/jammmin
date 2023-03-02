import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar searchResult = {searchResult}/>
        <div class="App-playlist">
          <SearchResult/>
          <Playlist/>
        </div>
      </div>
    </div>
  );
}

export default App;

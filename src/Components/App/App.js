import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify';
import { useState } from 'react';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTracks = (track) => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prev => [...prev, track]);
  }

  const removeTrack = (track) => {
    const newPlaylistTrack = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    setPlaylistTracks(newPlaylistTrack);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const tracksURI = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(tracksURI);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);  
  }

  const search = (term) => {
    Spotify.search(term).then(res => setSearchResult(res))
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch = {search}/>
        <div className="App-playlist">
          <SearchResult searchResult = {searchResult} onAdd = {addTracks}/>
          <Playlist onSave = {savePlaylist} playlistName = {playlistName} playlistTracks = {playlistTracks} onRemove = {removeTrack} onNameChange = {updatePlaylistName}/>
        </div>
      </div>
    </div>
  );
}

export default App;

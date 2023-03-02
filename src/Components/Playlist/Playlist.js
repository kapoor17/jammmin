import React from 'react';
import "./Playlist.css"
import TrackList from '../TrackList/TrackList';

const Playlist = ({playlistName, playlistTracks, onRemove, onNameChange, onSave}) => {
    const handleNameChange = ({target}) => {        
        onNameChange(target.value)
    }
    return (
        <div className="Playlist">
            <input value="New Playlist" onChange={handleNameChange}/>
            <TrackList tracks = {playlistTracks} isRemove = {true} onRemove = {onRemove}/>
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;
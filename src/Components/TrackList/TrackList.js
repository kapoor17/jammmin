import React from 'react';
import "./TrackList.css"
import Track from '../Track/Track';

const TrackList = ({tracks}) => {
    return (
        <div class="TrackList">
            {tracks.map(track => <Track key={track.id} track={track}/>)}
        </div>
    );
};

export default TrackList;
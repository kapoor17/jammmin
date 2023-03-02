import React from 'react';
import "./TrackList.css"
import Track from '../Track/Track';

const TrackList = () => {
    return (
        <div class="TrackList">
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </div>
    );
};

export default TrackList;
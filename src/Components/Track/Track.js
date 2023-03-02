import React from 'react';
import "./Track.css"

const Track = () => {
    return (
        <div class="Track">
            <div class="Track-information">
                <h3>TrackName</h3>
                <p>Artist Name | TrackAlbum</p>
            </div>
            <button class="Track-action">+/-</button>
        </div>
    );
};

export default Track;
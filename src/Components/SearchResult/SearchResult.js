import React from 'react';
import "./SearchResult.css"
import TrackList from '../TrackList/TrackList';

const SearchResult = () => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList/>
        </div>
    );
};

export default SearchResult;
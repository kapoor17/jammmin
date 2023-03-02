import React from 'react';
import "./SearchResult.css"
import TrackList from '../TrackList/TrackList';

const SearchResult = ({searchResult, onAdd}) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks = {searchResult} onAdd = {onAdd} isRemoval = {false}/>
        </div>
    );
};

export default SearchResult;
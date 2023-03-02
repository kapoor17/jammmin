import React, { useState } from 'react';
import "./SearchBar.css"

const SearchBar = ({onSearch}) => {
    const [searhTerm, setSearchTerm] = useState("");

    const search = () => {
        onSearch(searhTerm);
    }

    const handleTermChange = ({target}) => {
        setSearchTerm(target.value);
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>
    );
};

export default SearchBar;
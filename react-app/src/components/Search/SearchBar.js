import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = ({ className, fill }) => {
    const [searchItem, setSearchItem] = useState('');
    const history = useHistory();

    const submitSearch = (e) => {
        e.preventDefault();

        history.push(`/search/${searchItem}`)
    }

    return (
        <div className={className}>
            <form className={`search-bar ${fill ? 'search-bar-fill' : ''}`} onSubmit={submitSearch}>
                <input
                    placeholder='Search for food trucks by name, city, or cuisine...'
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className={`search-bar-input ${fill ? 'search-bar-fill' : ''}`}>
                </input>
                <button type='submit' className={'search-bar-button'}>
                    <i className={'fa-solid fa-magnifying-glass'}></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;

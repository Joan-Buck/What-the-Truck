import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { searchFoodTrucksThunk } from '../../store/foodTrucks';
import './SearchBar.css';

const SearchBar = ({ className, fill }) => {
    const [searchItem, setSearchItem] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const submitSearch = (e) => {
        e.preventDefault();

        // TO DO: add in dispatch search thunk
        // dispatch(searchFoodTrucksThunk(searchItem))
        // redirectto results page
        // return <Redirect to='/search' />
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

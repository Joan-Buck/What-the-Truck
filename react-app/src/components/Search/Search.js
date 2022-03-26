import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import FoodTruckCard from '../FoodTrucks/FoodTruckCard';
import { searchFoodTrucksThunk } from '../../store/foodTrucks';
import './Search.css'

const Search = () => {
    const params = useParams();
    const paramsSearchItem = params.searchItem;
    const dispatch = useDispatch();
    // TO DO: load search results on this page
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    // // TO DO: filter food trucks by search parameter matching

    const foodTrucks = Object.values(foodTrucksObj).filter(foodTruck => foodTruck.name.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    console.log(foodTrucks)
    
    useEffect(() => {
        dispatch(searchFoodTrucksThunk(paramsSearchItem))
    }, [dispatch, paramsSearchItem])


    return (
        <div className={'search-results-container'}>
               {foodTrucks.map((foodTruck, i) => (
                <div className='food-trucks-card-container' key={i}>
                    <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
            {/* RESULTS */}
        </div>
    )
}

export default Search;

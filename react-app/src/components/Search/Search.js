import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import FoodTruckCard from '../FoodTrucks/FoodTruckCard';
import { searchFoodTrucksThunk } from '../../store/foodTrucks';
import './Search.css'

const Search = () => {
    const params = useParams();
    const paramsSearchItem = params.searchItem;
    const dispatch = useDispatch();
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    // sorting trucks by name matching
    const foodTruckNames = Object.values(foodTrucksObj).filter(foodTruck =>
            foodTruck.name.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    // sorting trucks by city matching
    const foodTruckCities = Object.values(foodTrucksObj).filter(foodTruck =>
            foodTruck.city.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    // sorting trucks by cuisine matching
    const foodTruckCuisines = Object.values(foodTrucksObj).filter(foodTruck =>
        foodTruck.cuisine.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    // useEffect(() => {
    //     dispatch(searchFoodTrucksThunk(paramsSearchItem))
    // }, [dispatch, paramsSearchItem])

    //  TO DO: limit food trucks if they've already been filtered
    
    return (
        <div className={'search-results-container'}>
            <div className={'search-results-name'}>
                {foodTruckNames.map((foodTruck, i) => (
                    <div className='food-trucks-card-container' key={i}>
                        <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                            <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className={'search-results-city'}>
                {foodTruckCities.map((foodTruck, i) => (
                    <div className='food-trucks-card-container' key={i}>
                        <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                            <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className={'search-results-cuisine'}>
                {foodTruckCuisines.map((foodTruck, i) => (
                    <div className='food-trucks-card-container' key={i}>
                        <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                            <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;

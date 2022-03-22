import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import { NavLink } from 'react-router-dom';
import FoodTruckCard from './FoodTruckCard';
import './FoodTruckListing.css';

const FoodTruckListing = () => {
    const dispatch = useDispatch();
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    const foodTrucks = Object.values(foodTrucksObj).sort((a, b) => {
        const aDate = new Date(a.createdAt)
        const bDate = new Date(b.createdAt)
        return (bDate - aDate)
    })


    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div className='food-trucks-container'>
            {foodTrucks.map((foodTruck, i) => (
                <div className='food-trucks-card-container' key={i}>
                    <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default FoodTruckListing;

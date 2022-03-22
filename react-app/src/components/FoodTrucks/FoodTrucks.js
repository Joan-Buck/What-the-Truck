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
        <div className='food-truck-listing-component'>
            {foodTrucks.map((foodTruck) => (
                <div className='food-trucks-component-truck-card'>
                    <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default FoodTruckListing;

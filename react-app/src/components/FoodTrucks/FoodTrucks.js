import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import { NavLink } from 'react-router-dom';

import FoodTruckCard from './FoodTruckCard';
import './FoodTruckListing.css';

const FoodTruckListing = () => {
    const dispatch = useDispatch();
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    const foodTrucks = Object.values(foodTrucksObj)


    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div className='food-truck-listing-component'>
            {foodTrucks.map((foodTruck) => (
                <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${foodTruck.id}`}>
                     <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck}/>
                </NavLink>

            ))}
        </div>
    )
}

export default FoodTruckListing;

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
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
                // TO DO: link entire card to truck detail page
                <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck}/>
            ))}
        </div>
    )
}

export default FoodTruckListing;

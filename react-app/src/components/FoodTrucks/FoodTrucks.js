import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';

const FoodTruckListing = () => {
    const dispatch = useDispatch();
    const foodTrucksObj = useSelector(state => state.foodTrucks.foodTrucks);
    const foodTrucks = Object.values(foodTrucksObj)
    // console.log('foodtrucks', foodTrucks)


    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div>
            {/* TO DO: add in foodTruck card components */}
            {foodTrucks.map((foodTruck) => (
                <div key={foodTruck.id}>{foodTruck.name}</div>
            ))}
        </div>
    )
}

export default FoodTruckListing;

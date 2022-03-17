import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFoodTruckThunk } from '../../store/foodTrucks';

const FoodTruckDetail = () => {
    const dispatch = useDispatch();
    const foodTruckIdObj = useParams();
    const foodTruckId = foodTruckIdObj.foodTruckId
    console.log('foodTruckId====', foodTruckId)

    useEffect(() => {
        dispatch(getFoodTruckThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    console.log('foodTruck', foodTruck)
    if (!foodTruck) return null;

    return (


        <div>
            {foodTruck.name}
        </div>
    )
}

export default FoodTruckDetail;

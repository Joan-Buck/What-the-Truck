import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';

const FoodTruckListing = () => {
    const dispatch = useDispatch();

    // TO DO: add useEffect to dispatch thunk
    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div>
            TEST
        </div>
    )
}

export default FoodTruckListing;

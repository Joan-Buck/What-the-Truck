import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFoodTrucksThunk } from '../../store/foodTrucks';
import MyFoodTruckCard from './MyFoodTruckCard';

const MyFoodTruckListing = () => {
    const dispatch = useDispatch();
    const myFoodTrucksObj = useSelector(state => state.foodTrucks.foodTrucks);
    const foodTrucks = Object.values(myFoodTrucksObj);


    useEffect(() => {
        dispatch(getMyFoodTrucksThunk())
    }, [dispatch])

    return (
        <div>
             {foodTrucks.map((foodTruck) => (
               // TO DO: link entire card to truck detail page
                <MyFoodTruckCard key={foodTruck.id} foodTruck={foodTruck}/>
            ))}
        </div>
    )
}

export default MyFoodTruckListing;

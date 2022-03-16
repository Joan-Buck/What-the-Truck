import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFoodTrucksThunk } from '../../store/foodTrucks';
import MyFoodTruckCard from './MyFoodTruckCard';
import NewFoodTruckForm from './NewFoodTruckForm';

const MyFoodTruckListing = () => {
    const dispatch = useDispatch();
    const myFoodTrucksObj = useSelector(state => state.foodTrucks.foodTrucks);
    const foodTrucks = Object.values(myFoodTrucksObj);
    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getMyFoodTrucksThunk())
    }, [dispatch])

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }

    return (
        <div>
            <button onClick={showForm}>
                Add New Food Truck
            </button>
            {renderForm && (
                <NewFoodTruckForm />
            )}
            {foodTrucks.map((foodTruck) => (
               // TO DO: link entire card to truck detail page
                <MyFoodTruckCard key={foodTruck.id} foodTruck={foodTruck}/>
            ))}
        </div>
    )
}

export default MyFoodTruckListing;

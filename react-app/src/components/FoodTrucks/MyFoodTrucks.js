import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFoodTrucksThunk } from '../../store/foodTrucks';
import MyFoodTruckCard from './MyFoodTruckCard';
import NewFoodTruckForm from './NewFoodTruckForm';
import NewFoodTruckModal from './NewFoodTruckModal';
import './MyFoodTrucks.css';

const MyFoodTruckListing = () => {
    const dispatch = useDispatch();
    const myFoodTrucksObj = useSelector(state => state.foodTrucks.entities);
    const sessionUser = useSelector(state => state.session.user)
    const foodTrucks = Object.values(myFoodTrucksObj).filter(foodTruck => +foodTruck.ownerId === +sessionUser.id);
    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getMyFoodTrucksThunk())
    }, [dispatch])

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }

    return (
        <div className='my-food-trucks-component'>
            {/* <button onClick={showForm} className='my-food-trucks-component-add-truck-btn'>
                Add New Food Truck
            </button> */}
            {renderForm && (
                <NewFoodTruckModal />
            )}
            {foodTrucks.map((foodTruck) => (
               // TO DO: link entire card to truck detail page
                <MyFoodTruckCard key={foodTruck.id} foodTruck={foodTruck}/>
            ))}
        </div>
    )
}

export default MyFoodTruckListing;

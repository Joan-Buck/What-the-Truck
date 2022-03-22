import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getMyFoodTrucksThunk } from '../../store/foodTrucks';
import MyFoodTruckCard from './MyFoodTruckCard';
import NewFoodTruckForm from './NewFoodTruckForm';
import NewFoodTruckModal from './NewFoodTruckModal';
import './MyFoodTrucks.css';
import './NewFoodTruckForm.css';
import './MyFoodTruckCard.css';


const MyFoodTruckListing = () => {
    const dispatch = useDispatch();
    const myFoodTrucksObj = useSelector(state => state.foodTrucks.entities);
    const sessionUser = useSelector(state => state.session.user)
    const foodTrucks = Object.values(myFoodTrucksObj).filter(foodTruck => +foodTruck.ownerId === +sessionUser.id).sort((a, b) => {
        const aDate = new Date(a.createdAt)
        const bDate = new Date(b.createdAt)
        return (bDate - aDate)
    })
    // const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getMyFoodTrucksThunk())
    }, [dispatch])

    // const showForm = (e) => {
    //     e.preventDefault();
    //     setRenderForm(true)
    // }

    return (
        <div className='my-food-trucks-component'>
            {/* <button onClick={showForm} className='my-food-trucks-component-add-truck-btn'>
                Add New Food Truck
            </button> */}
            {/* {renderForm && ( */}
            <NewFoodTruckModal />
            {/* )} */}
            {foodTrucks.map((foodTruck) => (
                <div className='my-food-trucks-component-truck-card'>
                    <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${foodTruck.id}`}>

                        <MyFoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default MyFoodTruckListing;

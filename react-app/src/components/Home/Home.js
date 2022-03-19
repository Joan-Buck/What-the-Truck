import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    const foodTrucks = Object.values(foodTrucksObj)
    // TO DO: render random food trucks from DB
    // const foodTruck1 = foodTrucks[0]
    // const foodTruck2 = foodTrucks[1]
    // const foodTruck3 = foodTrucks[2]

    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div className='home-component-container'>
            <div className='home-component-banner-div'>
                <div className='home-component-banner-img-container'>
                    <img className='home-component-banner-img' src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg' alt='Food Truck'/>
                </div>
                <h1 className='home-component-banner-text'>
                    Find where to eat...
                </h1>
            </div>
        </div>
    )
}

export default Home;

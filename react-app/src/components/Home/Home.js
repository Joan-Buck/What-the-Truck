import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    // const foodTrucksObj = useSelector(state => state.foodTrucks.entities);
    // const foodTrucks = Object.values(foodTrucksObj)


    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div className='home-component-container'>
            <NavLink to='/food-trucks' exact={true} className='home-component-banner-div-link'>
                <div className='home-component-banner-div'>
                    <div className='home-component-banner-img-container'>
                        <img className='home-component-banner-img' src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg' alt='Food Truck' />
                    </div>
                    <h1 className='home-component-banner-text'>
                        Find where to eat...
                    </h1>
                </div>

            </NavLink>
        </div>
    )
}

export default Home;

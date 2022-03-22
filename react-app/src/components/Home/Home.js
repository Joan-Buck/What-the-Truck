import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        dispatch(getFoodTrucksThunk())
    }, [dispatch])

    return (
        <div className='home-component-container'>
            <div className='home-component-top-div'>
            {sessionUser ?
                <NavLink to='/food-trucks' exact={true} className='home-component-banner-div-link'>
                    <div className='home-component-banner-div'>
                        <div className='home-component-banner-img-container'>
                            <img className='home-component-banner-img'
                            src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg'
                            alt='Food Truck'
                            onError={(e) => (e.target.src='https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')}/>
                        </div>
                        <h1 className='home-component-banner-text'>
                            Find where to eat...
                        </h1>
                    </div>
                    {/* TO DO: add this in and position */}
                    {/* <div className='home-component-banner-description'>
                        A site for finding food trucks near you.
                    </div> */}
                </NavLink>
                :
                <NavLink to='/login-required' exact={true} className='home-component-banner-div-link'>
                <div className='home-component-banner-div'>
                    <div className='home-component-banner-img-container'>
                        <img className='home-component-banner-img'
                        src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg'
                        alt='Food Truck'
                        onError={(e) => (e.target.src='https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')}/>
                    </div>
                    <h1 className='home-component-banner-text'>
                        Find where to eat...
                    </h1>
                </div>
                {/* TO DO: add this in and position */}
                {/* <div className='home-component-banner-description'>
                    A site for finding food trucks near you.
                </div> */}
            </NavLink>
                }
            </div>
            {/* TO DO: add in footer */}
            {/* <div className='home-component-footer-container'>
                <div className='home-component-footer-menu-container'>
                    About
                    <div className='home-component-footer-git-container'>
                        GitHub
                    </div>
                    <div className='home-component-footer-git-container'>
                        LinkedIn
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;

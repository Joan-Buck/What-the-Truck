import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

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
                                    onError={(e) => (e.target.src = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')} />
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
                                    onError={(e) => (e.target.src = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')} />
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
            <div className='footer-container'>
                <div className='footer-button-group'>
                    <a href='https://www.linkedin.com/in/joan-buck/' className={'footer-link'}>
                        <BsLinkedin />
                    </a>
                    <a href='https://github.com/Joan-Buck' className={'footer-link'}>
                        <BsGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;

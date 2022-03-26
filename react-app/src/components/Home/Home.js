import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getFoodTrucksThunk } from '../../store/foodTrucks';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import './Home.css';
import SearchBar from '../Search/SearchBar';

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
                    <>
                        <NavLink to='/food-trucks' exact={true} className='home-component-banner-div-link'>
                            <div className='home-component-banner-div'>
                                <div className='home-component-banner-img-container'>
                                    <img className='home-component-banner-img'
                                        src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg'
                                        alt='Food Truck'
                                        onError={(e) => (e.target.src = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')} />
                                </div>
                                <div className={'home-component-banner-text-container'}>
                                    <h1 className='home-component-banner-welcome'>
                                        Welcome, {sessionUser.username}!
                                    </h1>
                                    <div className={'home-component-banner-description'}>
                                        Explore and rate other food trucks or add your own for others to discover.
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <div className={'home-search-bar-div'}>
                            <SearchBar className={'search-bar-container'} />
                        </div>
                    </>
                    :
                    <NavLink to='/login-required' exact={true} className='home-component-banner-div-link'>
                        <div className='home-component-banner-div'>
                            <div className='home-component-banner-img-container'>
                                <img className='home-component-banner-img'
                                    src='https://www.forafinancial.com/wp-content/uploads/2020/01/foodtruck.jpg'
                                    alt='Food Truck'
                                    onError={(e) => (e.target.src = 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')} />
                            </div>
                            <h1 className='unauth-home-component-banner-description'>
                                Explore food trucks and find your next meal...
                            </h1>
                        </div>
                    </NavLink>
                }
            </div>
            <div className='footer-container'>
                <div className='footer-button-group'>
                    <a href='https://www.linkedin.com/in/joan-buck/' className={'footer-link'}>
                        <BsLinkedin />
                    </a>
                    <a href='https://github.com/Joan-Buck/capstone-project' className={'footer-link'}>
                        <BsGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;

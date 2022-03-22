import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import logo from '../../images/favicon-32x32.png'
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  // const [onMyTrucks, setOnMyTrucks] = useState(false);

  // const path = window.location.pathname
  // useEffect(() => {
  //   if (path !== '/my-food-trucks') {
  //     setOnMyTrucks(false)
  //   }
  // }, [])

  const demoLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password';

    dispatch(sessionActions.login(email, password));
    return <Redirect to="/" />

  }




  return (
    <nav className='navbar-container'>
      <div className='navbar-button-group'>
        <div className='navbar-button'>
          {/* TO DO: fix logo and text */}
          <NavLink to='/' exact={true} className='navbar-link'>
            <div className='navbar-home'>Home</div>
            <img src={logo} alt='food-truck-logo' className='navbar-logo' />
          </NavLink>
        </div>
      </div>
      {(!sessionUser) ?
        <div className='navbar-button-group'>
          <button className='navbar-button' onClick={demoLogin}>
            Demo
          </button>
          <LoginFormModal className={'navbar-button'} />
          <div className='navbar-button'>
            <NavLink to='/sign-up' exact={true} className='navbar-link'>
              Sign Up
            </NavLink>
          </div>
        </div>
        :
        <div className='navbar-button-group'>
          <div className='navbar-button'>
            <NavLink to='/my-food-trucks' exact={true} className='navbar-link'>
              My Food Trucks
            </NavLink>
          </div>
          <LogoutButton className={'navbar-button'} />
        </div>
      }
      {/* {!sessionUser &&
        <div className='navbar-button-group'>
          <button className='navbar-button' onClick={demoLogin}>
            Demo
          </button>
          <LoginFormModal className={'navbar-button'} />
          <div className='navbar-button'>
            <NavLink to='/sign-up' exact={true} className='navbar-link'>
              Sign Up
            </NavLink>
          </div>
        </div>
      }
      {sessionUser && onMyTrucks &&
        <div className='navbar-button-group'>
          <div className='navbar-button'>
            <NavLink to='/food-trucks' exact={true} className='navbar-link'>
              All Food Trucks
            </NavLink>
          </div>
          <LogoutButton className={'navbar-button'} />
        </div>
      }

      {sessionUser && !onMyTrucks &&
        <div className='navbar-button-group'>
          <div className='navbar-button'>
            <NavLink to='/my-food-trucks' exact={true} className='navbar-link'>
              My Food Trucks
            </NavLink>
          </div>
          <LogoutButton className={'navbar-button'} />
        </div>
      } */}
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className='navbar-component-container'>
      <div className='navbar-component-home'>
        <div className='navbar-component-home-btn'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
      </div>
      {(!sessionUser) ?
      <div className='navbar-component-login-container'>
        <div className='navbar-component-demo-container'>
          Demo
        </div>
        <div className='navbar-component-login'>
          <div className='navbar-component-login-btn'>
            <LoginFormModal />
          </div>
        </div>
        <div className='navbar-component-signup'>
          <div className='navbar-component-signup-btn'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
      :
        <div className='navbar-component-logged-in-menu'>
        <div className='navbar-component-my-trucks'>
          <div className='navbar-component-my-trucks-btn'>
            <NavLink to='/my-food-trucks' exact={true} activeClassName='active'>
              My Food Trucks
            </NavLink>
          </div>
        </div>
        <div className='navbar-component-logout'>
          <div className='navbar-component-logout=btn'>
            <LogoutButton />
          </div>
        </div>
        </div>
      }
    </nav>
  );
}

export default NavBar;

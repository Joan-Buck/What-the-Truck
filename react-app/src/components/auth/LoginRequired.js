import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginFormModal from './LoginFormModal';
import './LoginRequired.css';

const LoginRequired = () => {

    return (
        <div className={'login-required-container'}>
            <h2 className={'login-required-title'}>Please Login or Sign Up Below to Explore the Site</h2>
            <div className={'login-required-button-group'}>
                <LoginFormModal className={'login-required-button'} />
                <p className={'login-required-text'}>OR</p>
                <NavLink to='/sign-up' exact={true} className={'login-required-link'}>Sign Up
                </NavLink>
            </div>
        </div>
    )
}

export default LoginRequired;

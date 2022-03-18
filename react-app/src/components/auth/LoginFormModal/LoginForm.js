import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import * as sessionActions from '../../../store/session';
import './LoginForm.css';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password';

    dispatch(sessionActions.login(email, password));
    // history.push('/');
    // TO DO: add redirect to whatever page makes sense on login
    return <Redirect to="/" />
  }

  return (
    <div className='login-form-component'>
      <div className='login-form-component-container'>
      <form onSubmit={onLogin} className='login-form-component-form-container'>
        <ul className='form-errors'>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
        {/* <div> */}
        <label htmlFor='email' className='form-label'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          className='form-input'
        />
        {/* </div> */}
        {/* <div> */}
        <label htmlFor='password' className='form-label'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          className='form-input'
        />
        <button type='submit' className='form-submit-btn'>Login</button>
        {/* </div> */}
      </form>
      <div className='login-form-component-demo-container'>
        <button className='login-form-component-demo-btn' onClick={demoLogin}>
          Login as Demo User
        </button>
      </div>
      <div className='login-form-component-signup-container'>
        <NavLink to='/sign-up' exact={true} className='login-form-component-signup-btn'>
          Sign up for an account...
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;

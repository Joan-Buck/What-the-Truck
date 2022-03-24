import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import * as sessionActions from '../../../store/session';
import './LoginForm.css';


const LoginForm = () => {
  const history = useHistory();
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
    return <Redirect to='/' />
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password';

    dispatch(sessionActions.login(email, password));
    history.push('/');
  }

  return (
    <div className={'login-form-container'}>
      <form onSubmit={onLogin} className={'login-form'}>
        <ul className={'auth-form-errors'}>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
        <label htmlFor='email' className={'auth-form-label'}>Email</label>
        <input
          name='email'
          type='text'
          // placeholder='Email'
          value={email}
          onChange={updateEmail}
          className={'auth-form-input'}
        />
        <label htmlFor='password' className='auth-form-label'>Password</label>
        <input
          name='password'
          type='password'
          // placeholder='Password'
          value={password}
          onChange={updatePassword}
          className={'auth-form-input'}
        />
        <button type='submit' className={'auth-form-button'}>Login</button>
        <button className={'auth-form-button'} onClick={demoLogin}>Login as Demo User</button>
        {/* <NavLink to='/sign-up' exact={true} className={'auth-form-link'}>
          Sign up for an account...
        </NavLink> */}
      </form>
    </div>
  );
};

export default LoginForm;

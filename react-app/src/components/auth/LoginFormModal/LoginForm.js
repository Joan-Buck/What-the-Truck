import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
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

  return (
    <div className='login-form-component'>
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
    </div>
  );
};

export default LoginForm;

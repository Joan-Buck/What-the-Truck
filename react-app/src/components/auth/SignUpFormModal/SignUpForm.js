import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {
      console.log(username, 'username')
      console.log('email', email)
      console.log('pass', password)
      console.log('confirm pass', confirmPassword)

      const newUser = {username, email, first_name: firstName, last_name: lastName, password, confirm_password: confirmPassword}
      const data = await dispatch(signUp(newUser));
      if (data) {
        setErrors(data)
      }
    // }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-form-component'>
      <div className='signup-form-component-container'>


    <form onSubmit={onSignUp} className='signup-form-component-container'>
        <ul className='form-errors'>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
         </ul>
      <div>
        <label className='form-label'>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          className='form-input'
        ></input>
      </div>
      <div>
        <label className='form-label'>First Name</label>
        <input
          type='text'
          name='first_name'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          className='form-input'
        ></input>
      </div>
      <div>
        <label className='form-label'>Last Name</label>
        <input
          type='text'
          name='last_name'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          className='form-input'
        ></input>
      </div>
      <div>
        <label className='form-label'>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className='form-input'
        ></input>
      </div>
      <div>
        <label className='form-label'>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className='form-input'
        ></input>
      </div>
      <div>
        <label className='form-label'>Confirm Password</label>
        <input
          type='password'
          name='confirm_password'
          onChange={updateConfirmPassword}
          value={confirmPassword}
          // required={true}
          className='form-input'
        ></input>
      </div>
      <button type='submit' className='form-submit-btn'>Sign Up</button>
    </form>
    </div>
    </div>
  );
};

export default SignUpForm;

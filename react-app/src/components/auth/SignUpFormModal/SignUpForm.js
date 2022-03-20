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
    // FROM STARTER: if (password === confirmPassword) {
    const newUser = { username, email, first_name: firstName, last_name: lastName, password, confirm_password: confirmPassword }
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
      <div className={'signup-form-container'}>
        <form onSubmit={onSignUp} className={'signup-form'}>
          <ul className={'auth-form-errors'}>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
            <label className={'auth-form-label'}>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              className={'auth-form-input'}
            ></input>
            <label className={'auth-form-label'}>First Name</label>
            <input
              type='text'
              name='first_name'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className={'auth-form-input'}
            ></input>
            <label className={'auth-form-label'}>Last Name</label>
            <input
              type='text'
              name='last_name'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className={'auth-form-input'}
            ></input>
            <label className={'auth-form-label'}>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              className={'auth-form-input'}
            ></input>
            <label className={'auth-form-label'}>Password</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              className={'auth-form-input'}
            ></input>
            <label className={'auth-form-label'}>Confirm Password</label>
            <input
              type='password'
              name='confirm_password'
              onChange={updateConfirmPassword}
              value={confirmPassword}
              // required={true}
              className={'auth-form-input'}
            ></input>
          <button type='submit' className={'auth-form-button'}>Sign Up</button>
        </form>
      </div>
  );
};

export default SignUpForm;

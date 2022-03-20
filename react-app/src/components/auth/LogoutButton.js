import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';


const LogoutButton = ({ className }) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className={className} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

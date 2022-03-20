import React, { useState } from 'react'
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import "./LoginForm.css"


function LoginFormModal({className}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className='login-container'>
        <button className={className} onClick={() => setShowModal(true)}>Login</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm className='Modal'/>
          </Modal>
        )}
      </div>
    );
  }

  export default LoginFormModal;

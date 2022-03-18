import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import NewFoodTruckForm from './NewFoodTruckForm';
import './NewFoodTruckForm.css';

function NewFoodTruckModal() {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()

    // const modalunauth = (e) => {
    //     e.stopPropagation()
    //     history.push('/unauthenticatedUser')
    // }

    return (
        <div className='new-food-truck-modal-component'>
            {/* TO DO: add plus icon or style at button again - css in NewFoodTruckForm.css */}
            <button className='new-food-truck-modal-btn' onClick={() => setShowModal(true)}>+ Add new food truck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewFoodTruckForm className='Modal' closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </div>
    )
}

export default NewFoodTruckModal;

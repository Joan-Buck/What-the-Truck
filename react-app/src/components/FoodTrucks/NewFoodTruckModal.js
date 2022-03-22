import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewFoodTruckForm from './NewFoodTruckForm';
import './NewFoodTruckForm.css';

function NewFoodTruckModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='food-truck-modal-container'>
            {/* TO DO: add plus icon or style at button again - css in NewFoodTruckForm.css */}
            <button className='food-truck-modal-button' onClick={() => setShowModal(true)}>+ Add new food truck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewFoodTruckForm className='Modal' closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </div>
    )
}

export default NewFoodTruckModal;

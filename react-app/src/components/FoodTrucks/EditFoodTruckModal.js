import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import EditFoodTruckForm from './EditFoodTruckForm';
import './EditFoodTruckForm.css';

function EditFoodTruckModal({foodTruck}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='edit-food-truck-modal-component'>
            {/* TO DO: add plus icon or style at button again - css in NewFoodTruckForm.css */}
            <button className='edit-food-truck-modal-btn' onClick={() => setShowModal(true)}>Edit Details</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditFoodTruckForm className='Modal' closeModal={() => setShowModal(false)} foodTruck={foodTruck}/>
                </Modal>
            )}
        </div>
    )
}

export default EditFoodTruckModal;

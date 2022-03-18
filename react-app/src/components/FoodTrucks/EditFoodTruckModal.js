import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import EditFoodTruckForm from './EditFoodTruckForm';

function EditFoodTruckModal({foodTruck}) {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()

    // const modalunauth = (e) => {
    //     e.stopPropagation()
    //     history.push('/unauthenticatedUser')
    // }

    return (
        <div className='edit-food-truck-modal-component'>
            {/* TO DO: add plus icon or style at button again - css in NewFoodTruckForm.css */}
            <button className='edit-food-truck-modal-btn' onClick={() => setShowModal(true)}>Edit Food Truck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditFoodTruckForm className='Modal' closeModal={() => setShowModal(false)} foodTruck={foodTruck}/>
                </Modal>
            )}
        </div>
    )
}

export default EditFoodTruckModal;

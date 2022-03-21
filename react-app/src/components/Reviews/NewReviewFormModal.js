import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import NewReviewForm from './NewReviewForm';
import './ReviewListing.css';

function NewReviewModal({foodTruckId, className}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='new-review-modal-component'>
            <button className={className} onClick={() => setShowModal(true)}>Review this food truck</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <NewReviewForm className='Modal' closeModal={() => setShowModal(false)} foodTruckId={foodTruckId}/>
                </Modal>
            )}
        </div>
    )
}

export default NewReviewModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';
import './ReviewCard.css';

function EditReviewModal({ review, foodTruckId, className }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='new-review-modal-component'>
            <button className={className} onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditReviewForm className='Modal' closeModal={() => setShowModal(false)} foodTruckId={foodTruckId} review={review}/>
                </Modal>
            )}
        </div>
    )
}

export default EditReviewModal;

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewModal({ review, foodTruckId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='new-review-modal-component'>
            <button className='new-review-modal-btn' onClick={() => setShowModal(true)}>Edit your review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} >
                    <EditReviewForm className='Modal' closeModal={() => setShowModal(false)} foodTruckId={foodTruckId} review={review}/>
                </Modal>
            )}
        </div>
    )
}

export default EditReviewModal;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ReviewCard.css';
import { deleteReviewThunk } from '../../store/reviews';
import EditReviewForm from './EditReviewForm';

const ReviewCard = ({review, foodTruckId}) => {
    const sessionUser = useSelector(state => state.session.user);
    const reviewOwner = review.userId;
    const dispatch = useDispatch();
    const userOwns = sessionUser.id === reviewOwner
    const [renderForm, setRenderForm] = useState(false);

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }
    return (
        <div className='review-card-component'>
            {userOwns && (
                 <div>
                     <button onClick={showForm}>
                        Edit
                     </button>
                     {renderForm && (
                         <EditReviewForm review={review} foodTruckId={foodTruckId}/>
                     )}
                     <button onClick={() => dispatch(deleteReviewThunk(review.id))} >
                        Delete
                     </button>
                 </div>
            )}
            <h3 className='review-card-component-username'>{review.username}</h3>
            <div className='review-card-component-rating'>{review.rating}</div>
            <div className='review-card-component-content'>{review.content}</div>
        </div>
    )
}

export default ReviewCard;

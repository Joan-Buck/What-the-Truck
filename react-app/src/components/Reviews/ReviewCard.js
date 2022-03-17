import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ReviewCard.css';
import { deleteReviewThunk } from '../../store/reviews';


const ReviewCard = ({review}) => {
    const sessionUser = useSelector(state => state.session.user);
    const reviewOwner = review.userId;
    const dispatch = useDispatch();
    const userOwns = sessionUser.id === reviewOwner

    return (
        <div className='review-card-component'>
            {userOwns && (
                 <div>
                     <button>
                        Edit
                     </button>
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

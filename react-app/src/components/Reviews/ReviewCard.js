import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({review}) => {

    return (
        <div className='review-card-component'>
            <h3 className='review-card-component-username'>{review.username}</h3>
            <div className='review-card-component-rating'>{review.rating}</div>
            <div className='review-card-component-content'>{review.content}</div>
        </div>
    )
}

export default ReviewCard;

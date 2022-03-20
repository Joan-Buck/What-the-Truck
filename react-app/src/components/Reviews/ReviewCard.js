import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ReviewCard.css';
import { deleteReviewThunk } from '../../store/reviews';
import EditReviewForm from './EditReviewForm';
import dayjs from 'dayjs';

const ReviewCard = ({ review, foodTruckId }) => {
    console.log({ review })
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
                        <EditReviewForm review={review} foodTruckId={foodTruckId} hideForm={() => setRenderForm(false)} />
                    )}
                    <button onClick={() => dispatch(deleteReviewThunk(review.id))} >
                        Delete
                    </button>
                </div>
            )}
            <div className='review-card-component-details'>
                <h5 className='review-card-component-username'>
                    <div>
                        Reviewed by
                    </div>
                    <div>
                        {review.username}
                    </div>
                </h5>
                <div className='review-card-component-review-details'>
                    <Rating rating={review.rating} />
                    <div className='review-card-component-content'>{review.content}</div>
                    {/* <div>{dayjs().format(review.updatedAt)}</div> */}
                </div>
            </div>
        </div>
    )
}

const Rating = ({ rating }) => {
    // TO DO: add in icons
    const icons = []
    for (let i = 0; i < rating; i++) {
        icons.push(<div key={i}>*</div>)
    }

    //  TO DO: add in empty icons
    // for (let i = rating; i < 5; i++) {
    //     icons.push(<div key={i}>-</div>)
    // }

    return (
        <div className='review-card-component-rating'>{icons}</div>
    )
}

export default ReviewCard;

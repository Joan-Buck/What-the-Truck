import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ReviewCard.css';
import { deleteReviewThunk } from '../../store/reviews';
import EditReviewForm from './EditReviewForm';
import EditReviewModal from './EditReviewFormModal';
import dayjs from 'dayjs';

const ReviewCard = ({ review, foodTruckId }) => {
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
            <div className='review-card-component-details'>
                <h5 className='review-card-component-username'>
                    <div>
                        Reviewed by
                    </div>
                    <div>
                        {review.username}
                    </div>
                </h5>
                <div className='outer-test'>
                    <div className='review-card-component-review-details'>
                        <Rating rating={review.rating} />
                        <div className='review-card-component-content'>{review.content}</div>
                        {/* <div>{dayjs().format(review.updatedAt)}</div> */}
                    </div>
                <div className='test'>
                    {userOwns && (
                        <div>
                            <EditReviewModal review={review} foodTruckId={foodTruckId} className={'review-button'}/>
                            <button onClick={() => dispatch(deleteReviewThunk(review.id))} className={'review-button'}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
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

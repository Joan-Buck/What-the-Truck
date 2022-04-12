import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ReviewCard.css';
import { deleteReviewThunk } from '../../store/reviews';
import EditReviewModal from './EditReviewFormModal';

const ReviewCard = ({ review, foodTruckId }) => {
    const sessionUser = useSelector(state => state.session.user);
    const reviewOwner = review.userId;
    const dispatch = useDispatch();
    const userOwns = sessionUser.id === reviewOwner

    return (
        <div className={'review-card-container'}>
                <h5 className={'review-card-username'}>
                    <div className={'review-card-reviewed-by'}>
                        Reviewed by
                    </div>
                    <div className={'review-card-user'}>
                        {review.username}
                    </div>
                </h5>
                <div className={'review-card-details-outer-container'}>

                    <div className='review-card-review-details'>
                        <Rating rating={review.rating} />
                        <div className='review-card-content'>{review.content}</div>

                    </div>
                <div className={'review-card-user-button-group'}>
                    {userOwns && (
                        <div>
                            <EditReviewModal review={review} foodTruckId={foodTruckId} className={'review-button'}/>
                            <button onClick={() => dispatch(deleteReviewThunk(review.id))} className={'review-button'}>
                            <i className={'fa-solid fa-trash'}></i>
                            </button>
                        </div>
                    )}
                </div>
                </div>
        </div>
    )
}

const Rating = ({ rating }) => {
    const icons = []
    for (let i = 0; i < rating; i++) {
        icons.push(<div key={i}><i className={'fa-solid fa-star'}></i></div>)
    }

    //  TO DO: add in empty icons
    // for (let i = rating; i < 5; i++) {
    //     icons.push(<div key={i}>-</div>)
    // }

    return (
        <div className={'review-card-rating'}>{icons}</div>
    )
}

export default ReviewCard;

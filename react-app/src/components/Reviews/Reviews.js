import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';
import { getReviewsThunk } from '../../store/reviews';
import './ReviewListing.css'
import NewReviewModal from './NewReviewFormModal';

const ReviewListing = ({ foodTruckId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +foodTruckId)
    const reviewerId = reviews.map(review => +review.userId)
    const userReviewed = reviewerId.includes(+sessionUser.id)

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    if (!foodTruck) return null;


    return (
        <div className='review-listing-component'>
            <div className='review-listing-title'>
                Reviews
            </div>
            <div className='review-listing-component-add-review-btn-container'>
                {foodTruck.ownerId !== sessionUser.id && !userReviewed && (
                    <NewReviewModal foodTruckId={foodTruckId} className={'review-button'}/>
                )}
            </div>
            <div className='review-listing-component-card-container'>
                {reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} foodTruckId={foodTruckId} />
                ))}
            </div>
        </div>
    )
}

export default ReviewListing;

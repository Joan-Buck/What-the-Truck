import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';
import { getReviewsThunk } from '../../store/reviews';

const ReviewListing = ( {foodTruckId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +foodTruckId)

    return (
        <div>
            {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} foodTruckId={foodTruckId}/>
            ))}
        </div>
    )
}

export default ReviewListing;

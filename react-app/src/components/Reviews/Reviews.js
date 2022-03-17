import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';
import { getReviewsThunk } from '../../store/reviews';

const ReviewListing = ( {foodTruckId}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    // TO DO: review why I need to filter these on the front end when I'm filtering on BE
    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +foodTruckId)

    return (
        <div>
            {reviews.map((review, i) => (
                <ReviewCard key={i} review={review}/>
            ))}
        </div>
    )
}

export default ReviewListing;

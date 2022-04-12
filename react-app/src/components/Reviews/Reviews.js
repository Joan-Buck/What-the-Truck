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
    reviews.sort((a, b) => {
        const aDate = new Date(a.updatedAt)
        const bDate = new Date(b.updatedAt)
        return (bDate - aDate)
    })
    const reviewerId = reviews.map(review => +review.userId)
    const userReviewed = reviewerId.includes(+sessionUser.id)

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    if (!foodTruck) return null;


    return (
        <div className='review-listing-container'>
            <div className='review-listing-title'>
                Read what people are saying...
            </div>
            <div className='review-listing-component-add-review-btn-container'>
                {foodTruck.ownerId !== sessionUser.id && !userReviewed && (
                    <NewReviewModal foodTruckId={foodTruckId} className={'review-button'}/>
                )}
            </div>
            <div className='review-listing-component-card-container'>
                {reviews.length > 0 ?
                <div>
                {reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} foodTruckId={foodTruckId} />
                ))}
                </div>
                :
                <div>No reviews for this food truck yet</div>
            }
            </div>
        </div>
    )
}

export default ReviewListing;

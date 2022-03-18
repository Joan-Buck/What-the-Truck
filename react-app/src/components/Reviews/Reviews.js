import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';
import { getReviewsThunk } from '../../store/reviews';
import NewReviewForm from './NewReviewForm';

const ReviewListing = ( {foodTruckId}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [renderForm, setRenderForm] = useState(false);
    // const foodTruckIdObj = useParams();
    // const foodTruckId = foodTruckIdObj.foodTruckId;

    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +foodTruckId)
    console.log('reviews', reviews)
    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    if (!foodTruck) return null;

    const reviewerId = reviews.map(review => +review.userId)
    const userReviewed = reviewerId.includes(+sessionUser.id)
    console.log('userReviewed', userReviewed)

    const showReviewForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }
    return (
        <div>
              REVIEWS
                <div>
                    {foodTruck.ownerId !== sessionUser.id && !userReviewed &&(
                        // TO DO: prevent user from reviewing a truck more than once
                        <button onClick={showReviewForm}>Review this food truck!</button>
                    )}
                </div>
                {renderForm && (
                    <NewReviewForm foodTruckId={foodTruckId} hideForm={() => setRenderForm(false)}/>
                )}
            {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} foodTruckId={foodTruckId}/>
            ))}
        </div>
    )
}

export default ReviewListing;

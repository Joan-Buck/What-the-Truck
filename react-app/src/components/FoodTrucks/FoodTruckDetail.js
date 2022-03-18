import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFoodTruckThunk } from '../../store/foodTrucks';
import { getReviewsThunk } from '../../store/reviews';
import ReviewListing from '../Reviews/Reviews';
import NewReviewForm from '../Reviews/NewReviewForm';
import './FoodTruckDetail.css';

const FoodTruckDetail = () => {
    const dispatch = useDispatch();
    const foodTruckIdObj = useParams();
    const foodTruckId = foodTruckIdObj.foodTruckId;
    const sessionUser = useSelector(state => state.session.user);

    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getFoodTruckThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    if (!foodTruck) return null;



    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +foodTruckId)
    const ratings = reviews.map(review => review.rating)
    const sumRatings = function (array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        return total;
    }
    const rawAverageRating = sumRatings(ratings) / ratings.length
    const averageRating = rawAverageRating.toFixed(1);

    const images = foodTruck.images;
    const imageUrl = images[0]?.imageURL

    const showReviewForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }

    return (
        <div className='food-truck-detail-component'>
            <div className='food-truck-detail-component-banner'>
                {imageUrl && <img className='food-truck-detail-component-food-truck-img' src={imageUrl} alt='Food Truck' />}
                <div className='food-truck-detail-component-food-truck-content'>
                    <h3 className='food-truck-detail-component-food-truck-title'>{foodTruck.name}</h3>
                    <div className='food-truck-detail-component-review-info'>
                        <div className='food-truck-detail-component-review-detail'>
                            <div className='food-truck-detail-component-count-reviews'>{reviews.length} Reviews</div>
                            {ratings.length > 1 &&
                                <div className='food-truck-detail-component-avg-rating'>Average Rating: {averageRating}</div>
                            }
                        </div>
                    </div>
                </div>
                <div className='food-truck-detail-component-truck-details'>
                    <div className='food-truck-detail-component-truck-cuisine'>
                        {foodTruck.cuisine}
                    </div>
                    <div className='food-truck-detail-component-truck-price'>
                        {foodTruck.price}
                    </div>
                    <div className='food-truck-detail-component-truck-address'>
                        {foodTruck.address}
                    </div>
                    <div className='food-truck-detail-component-truck-city'>
                        {foodTruck.city}
                    </div>
                    <div className='food-truck-detail-component-truck-state'>
                        {foodTruck.state}
                    </div>
                    <div className='food-truck-detail-component-truck-zip'>
                        {foodTruck.zipCode}
                    </div>
                </div>
            </div>
            <div className='food-truck-detail-component-reviews-container'>
                {/* REVIEWS
                <div>
                    {foodTruck.ownerId !== sessionUser.id && (
                        // TO DO: prevent user from reviewing a truck more than once
                        <button onClick={showReviewForm}>Review this food truck!</button>
                    )}
                </div>
                {renderForm && (
                    <NewReviewForm foodTruckId={foodTruckId} hideForm={() => setRenderForm(false)}/>
                )} */}
                <ReviewListing foodTruckId={foodTruckId} />
            </div>
        </div>
    )
}

export default FoodTruckDetail;

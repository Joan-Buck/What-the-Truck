import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getFoodTruckThunk, deleteFoodTruckThunk } from '../../store/foodTrucks';
import { getReviewsThunk } from '../../store/reviews';
import ReviewListing from '../Reviews/Reviews';
import EditFoodTruckModal from './EditFoodTruckModal';
import FoodTruckErrorPage from '../Error/FoodTruckErrorPage';
import './FoodTruckDetail.css';

const FoodTruckDetail = () => {
    const dispatch = useDispatch();
    const foodTruckIdObj = useParams();
    const foodTruckId = foodTruckIdObj.foodTruckId;
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getFoodTruckThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    // if (!foodTruck) return null;
    if (!foodTruck) return (
        <FoodTruckErrorPage />
    )



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


    const deleteFoodTruck = async (e) => {
        e.preventDefault();
        const result = await dispatch(deleteFoodTruckThunk(foodTruck.id))
        if (result.status === 200) {
            history.push('/my-food-trucks')
        }
    }


    return (
        <div className='food-truck-detail-component'>
            <div className='food-truck-detail-component-truck-container'>
                {foodTruck.ownerId === sessionUser.id && (
                    <div className='food-truck-detail-component-owner-btn-container'>
                        <EditFoodTruckModal foodTruck={foodTruck} className='food-truck-detail-component-edit-btn' />
                        <button onClick={deleteFoodTruck} className='food-truck-detail-component-delete-btn'>
                            Delete
                        </button>
                    </div>
                )}
                <div className='test'>
                    <div className='food-truck-detail-component-food-truck-img-container'>
                        {imageUrl && <img className='food-truck-detail-component-food-truck-img' src={imageUrl} alt='Food Truck' />}
                    </div>

                    <div className='food-truck-detail-component-food-truck-content'>
                        <h3 className='food-truck-detail-component-food-truck-title'>{foodTruck.name}</h3>
                        <div className='food-truck-detail-component-review-info'>
                            <div className='food-truck-detail-component-review-detail'>
                                {ratings.length > 0 &&
                                    <div className='food-truck-detail-component-avg-rating'>Average Rating: {averageRating}</div>
                                }
                                <div className='food-truck-detail-component-count-reviews'>{reviews.length} Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='food-truck-detail-component-truck-details'>
                    <div className='food-truck-detail-compononent-truck-info-container'>
                        <div className='food-truck-detail-component-truck-cuisine'>
                            {foodTruck.cuisine}
                        </div>
                        <div className='food-truck-detail-component-truck-price'>
                            {foodTruck.price}
                        </div>
                    </div>
                    <div className='food-truck-detail-compononent-truck-location-container'>
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

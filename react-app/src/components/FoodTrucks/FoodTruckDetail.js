import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFoodTruckThunk } from '../../store/foodTrucks';
import ReviewListing from '../Reviews/Reviews';
import './FoodTruckDetail.css';

const FoodTruckDetail = () => {
    const dispatch = useDispatch();
    const foodTruckIdObj = useParams();
    const foodTruckId = foodTruckIdObj.foodTruckId;
    const sessionUser = useSelector(state => state.session.user);
    console.log('sessionUser', sessionUser)

    const [renderForm, setRenderForm] = useState(false);

    useEffect(() => {
        dispatch(getFoodTruckThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])
    console.log('truck', foodTruck)
    if (!foodTruck) return null;

    const images = foodTruck.images;
    const imageUrl = images[0]?.imageURL

    const showReviewForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }

    return (
        <div className='food-truck-detail-component'>
            <div className='food-truck-detail-component-banner'>
                {imageUrl && <img className='food-truck-detail-component-food-truck-img' src={imageUrl} alt='Food Truck'/> }
                <div className='food-truck-detail-component-food-truck-content'>
                    <h3 className='food-truck-detail-component-food-truck-title'>{foodTruck.name}</h3>
                    <div className='food-truck-detail-component-review-info'>
                        <div className='food-truck-detail-component-review-detail'>
                            {/* TO DO: add in avg rating */}
                            <div className='food-truck-detail-component-avg-rating'>* * * * *</div>
                            {/* TO DO: add in number of reviews */}
                            <div className='food-truck-detail-component-count-reviews'>5 Reviews</div>
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
                REVIEWS
                {foodTruck.ownerId !== sessionUser.id && (
                    <button onClick={showReviewForm}>Review this food truck!</button>
                )}
                <ReviewListing foodTruckId={foodTruckId}/>
            </div>
        </div>
    )
}

export default FoodTruckDetail;

import React, { useState, useEffect } from 'react';
import './FoodTruckCard.css';
import { deleteFoodTruckThunk } from '../../store/foodTrucks';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditFoodTruckForm from './EditFoodTruckForm';
import { getReviewsThunk } from '../../store/reviews';
import EditFoodTruckModal from './EditFoodTruckModal';

const MyFoodTruckCard = ({ foodTruck }) => {
    const dispatch = useDispatch()
    const { id, ownerId, name, city, state } = foodTruck;
    const images = foodTruck.images
    const [renderForm, setRenderForm] = useState(false)

    useEffect(() => {
        dispatch(getReviewsThunk(id))
    }, [dispatch, id])


    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +id)
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

    const imageUrl = images[0]?.imageURL
    // if image is undefined, add placeholder image

     const isImageUrl = (url) => {
        return /\.(jpg|jpeg|png)$/.test(url);
    }


    return (
        <div className='food-truck-card-component'>
            <div className='food-truck-card-component-container'>
                {/* {imageUrl && <img className='food-truck-card-component-food-truck-img' src={imageUrl} alt='Food Truck' />} */}
                {isImageUrl(imageUrl) ?
                <img className='food-truck-card-component-food-truck-img'
                src={`${images[0].imageURL}`}
                alt='Food Truck'
                onError={(e) => (e.target.src='https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg')} /> :
                <img className='food-truck-card-component-food-truck-img' src={'https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/03/foodtruck.jpg'} alt='Default Food Truck' />
                }
                <div className='food-truck-card-component-food-truck-content'>
                    <h3 className='food-truck-card-component-food-truck-title'>{name}</h3>
                    <div className='food-truck-card-component-food-truck-location'>{city}, {state}</div>
                    <div className='food-truck-card-component-review-info'>
                        <div className='food-truck-card-component-review-detail'>
                            <div className='food-truck-card-component-count-reviews'>{reviews.length} Reviews</div>
                            {ratings.length > 1 &&
                                <div className='food-truck-card-component-avg-rating'>Average Rating: {averageRating}</div>
                            }
                        </div>
                        {ratings.length > 0 &&
                            <div className='food-truck-card-component-review-snippet'>
                                Recent Review: {reviews[0].content}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFoodTruckCard;

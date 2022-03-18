import React, { useState, useEffect } from 'react';
import './FoodTruckCard.css';
import { deleteFoodTruckThunk } from '../../store/foodTrucks';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EditFoodTruckForm from './EditFoodTruckForm';
import { getReviewsThunk } from '../../store/reviews';

const MyFoodTruckCard = ({ foodTruck }) => {
    const dispatch = useDispatch()
    const { id, ownerId, name } = foodTruck;
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

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true)
    }

    // if image is undefined, add placeholder image
    const imageUrl = images[0]?.imageURL


    return (
        <div className='food-truck-card-component'>
            <div className='food-truck-card-component-container'>
                {imageUrl && <img className='food-truck-card-component-food-truck-img' src={imageUrl} alt='Food Truck' />}
                <div className='food-truck-card-component-food-truck-content'>
                    <h3 className='food-truck-card-component-food-truck-title'>{name}</h3>
                    <div className='food-truck-card-component-review-info'>
                        <div className='food-truck-card-component-review-detail'>
                            <div className='food-truck-card-component-count-reviews'>{reviews.length} Reviews</div>
                            {ratings.length > 1 &&
                                <div className='food-truck-card-component-avg-rating'>Average Rating: {averageRating}</div>
                            }
                        </div>
                        {/* TO DO: add in most recent review snippet */}
                        {ratings.length > 1 &&
                            <div className='food-truck-card-component-review-snippet'>
                                Recent Review: {reviews[0].content}
                            </div>
                        }
                    </div>
                    <div className='food-truck-card-component-owner-btn-container'>
                        <button onClick={showForm} className='food-truck-card-component-edit-btn'>
                            Edit
                        </button>
                        {renderForm && (
                            <EditFoodTruckForm foodTruck={foodTruck} hideForm={() => setRenderForm(false)} />
                        )}
                        <button onClick={() => dispatch(deleteFoodTruckThunk(id))} className='food-truck-card-component-delete-btn'>
                            Delete
                        </button>
                    </div>
                    <div className='food-truck-card-component-details-link-container'>
                        <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${foodTruck.id}`}>See Food Truck Page</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFoodTruckCard;

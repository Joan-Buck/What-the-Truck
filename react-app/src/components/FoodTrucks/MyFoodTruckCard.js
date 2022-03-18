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
    console.log('food truck id', id)
    useEffect(() => {
        dispatch(getReviewsThunk(id))
    }, [dispatch, id])


    const reviewsObj = useSelector(state => state.reviews.entities)
    const reviews = Object.values(reviewsObj).filter(review => +review.truckId === +id)
    const ratings = reviews.map(review => review.rating)
    const sumRatings = function(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        return total;
    }
    const rawAverageRating = sumRatings(ratings)/ ratings.length
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
                {imageUrl && <img className='food-truck-card-component-food-truck-img' src={imageUrl} alt='Food Truck'/> }
                <div className='food-truck-card-component-food-truck-content'>
                    <h3 className='food-truck-card-component-food-truck-title'>{name}</h3>
                    <div className='food-truck-card-component-review-info'>
                        <div className='food-truck-card-component-review-detail'>
                            {/* TO DO: add in avg rating */}
                            <div className='food-truck-card-component-avg-rating'>Average Rating: {averageRating}</div>
                            {/* TO DO: add in number of reviews */}
                            <div className='food-truck-card-component-count-reviews'>{reviews.length} Reviews</div>
                        </div>
                        {/* TO DO: add in most recent review snippet */}
                        <div className='food-truck-card-component-review-snippet'>
                            Sample review content.......
                        </div>
                    </div>
                <div>
                    <button onClick={showForm}>
                        Edit
                    </button>
                    {renderForm && (
                        <EditFoodTruckForm foodTruck={foodTruck} hideForm={() => setRenderForm(false)}/>
                    )}
                    <button onClick={() => dispatch(deleteFoodTruckThunk(id))} className=''>
                        Delete
                    </button>
                    <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${foodTruck.id}`}>See Food Truck Page</NavLink>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyFoodTruckCard;

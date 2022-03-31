import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getFoodTruckThunk, deleteFoodTruckThunk } from '../../store/foodTrucks';
import { getReviewsThunk } from '../../store/reviews';
import ReviewListing from '../Reviews/Reviews';
import EditFoodTruckModal from './EditFoodTruckModal';
import ErrorPage from '../Error/ErrorPage';
import './FoodTruckDetail.css';

const FoodTruckDetail = () => {
    const dispatch = useDispatch();
    const foodTruckIdObj = useParams();
    const foodTruckId = foodTruckIdObj.foodTruckId;
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getFoodTruckThunk(foodTruckId)).then(
            response => {
                // OPTIONAL TO DO: can add info that page is loading
                setLoading(false)
                if (response.status === 404) {
                    setNotFound(true)
                }
            }
        )
    }, [dispatch, foodTruckId])

    useEffect(() => {
        dispatch(getReviewsThunk(foodTruckId))
    }, [dispatch, foodTruckId])

    const reviewsObj = useSelector(state => state.reviews.entities)

    const foodTruck = useSelector(state => state.foodTrucks.entities[foodTruckId])

    if (notFound) return (
        <ErrorPage />
    )

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

    const isImageUrl = (url) => {
        return /\.(jpg|jpeg|png|gif)$/.test(url);
    }

    const deleteFoodTruck = async (e) => {
        e.preventDefault();
        const result = await dispatch(deleteFoodTruckThunk(foodTruck.id))
        if (result.status === 200) {
            history.push('/my-food-trucks')
        }
    }


    return (
        <div className='food-truck-detail-container'>
            <div className='food-truck-detail-upper'>
                <div className={'food-truck-detail-img-text-container'}>
                    <div className={'food-truck-detail-img-container'}>
                        {isImageUrl(imageUrl) ?
                            <img className={'food-truck-detail-img'}
                            src={`${imageUrl}`}
                            alt='Food Truck'
                            onError={(e) => (e.target.src='https://goodtimes.sc/wp-content/uploads/2021/05/food-truck-shutterstock_577891972.jpg')}/> :
                            <img className={'food-truck-detail-img'} src={'https://goodtimes.sc/wp-content/uploads/2021/05/food-truck-shutterstock_577891972.jpg'} alt='Default Food Truck' />
                        }
                    </div>
                    {foodTruck.ownerId === sessionUser.id && (
                    <div className='food-truck-detail-button-group'>
                        <EditFoodTruckModal foodTruck={foodTruck} className={'food-truck-detail-button'} />
                        <button onClick={deleteFoodTruck} className={'food-truck-detail-button'}>
                            Delete
                        </button>
                    </div>
                )}
                    <div className='food-truck-detail-component-food-truck-content'>
                        <h3 className='food-truck-detail-component-food-truck-title'>{foodTruck.name}</h3>
                        <div className='food-truck-detail-component-review-info'>
                            <div className='food-truck-detail-component-review-detail'>
                                {ratings.length > 0 &&
                                    <div className='food-truck-detail-component-avg-rating'>Average Rating: {averageRating}</div>
                                }
                                <div className='food-truck-detail-component-count-reviews'>{reviews.length} Review(s)</div>
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
                <ReviewListing foodTruckId={foodTruckId} />
            </div>
        </div>
    )
}

export default FoodTruckDetail;

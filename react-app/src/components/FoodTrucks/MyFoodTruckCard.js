import React, { useState } from 'react';
import './FoodTruckCard.css';
import { deleteFoodTruckThunk } from '../../store/foodTrucks';
import { useDispatch } from 'react-redux';
import EditFoodTruckForm from './EditFoodTruckForm';

const MyFoodTruckCard = ({ foodTruck }) => {
    const dispatch = useDispatch()
    const { id, ownerId, name } = foodTruck;
    const images = foodTruck.images
    const [renderForm, setRenderForm] = useState(false)

    // TO DO: add in reviews data

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
                            <div className='food-truck-card-component-avg-rating'>* * * * *</div>
                            {/* TO DO: add in number of reviews */}
                            <div className='food-truck-card-component-count-reviews'>5 Reviews</div>
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
                    <button onClick={() => dispatch(deleteFoodTruckThunk(id))}>
                        Delete
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyFoodTruckCard;

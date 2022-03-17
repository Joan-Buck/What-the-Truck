import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodTruckCard.css';

const FoodTruckCard = ({ foodTruck }) => {

    const { id, ownerId, name } = foodTruck;
    const images = foodTruck.images

    // TO DO: add in reviews data

    return (
        <div className='food-truck-card-component'>
            <NavLink className={'food-truck-card-component-details-link'} to={`/food-trucks/${id}`}>Details</NavLink>
            <div className='food-truck-card-component-container'>
                <img className='food-truck-card-component-food-truck-img' src={`${images[0].imageURL}`} alt='Food Truck'/>
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
                </div>
            </div>
        </div>
    )
}

export default FoodTruckCard;

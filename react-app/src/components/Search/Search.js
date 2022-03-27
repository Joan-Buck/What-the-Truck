import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import FoodTruckCard from '../FoodTrucks/FoodTruckCard';
import './Search.css'

const Search = () => {
    const params = useParams();
    const paramsSearchItem = params.searchItem;
    const foodTrucksObj = useSelector(state => state.foodTrucks.entities);

    // sorting trucks by category matching
    // const foodTrucks = Object.values(foodTrucksObj).filter(foodTruck => {
    //     return (
    //         foodTruck.name.toLowerCase().includes(paramsSearchItem.toLowerCase()) ||
    //         foodTruck.city.toLowerCase().includes(paramsSearchItem.toLowerCase()) ||
    //         foodTruck.cuisine.toLowerCase().includes(paramsSearchItem.toLowerCase()))
    // })

    // sorting trucks by name matching
    const foodTruckNames = Object.values(foodTrucksObj).filter(foodTruck =>
        foodTruck.name.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    // sorting trucks by city matching
    const foodTruckCities = Object.values(foodTrucksObj).filter(foodTruck =>
        foodTruck.city.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    // // sorting trucks by cuisine matching
    const foodTruckCuisines = Object.values(foodTrucksObj).filter(foodTruck =>
        foodTruck.cuisine.toLowerCase().includes(paramsSearchItem.toLowerCase()))


    return (
        <div className={'search-results-container'}>
            <div className={'search-results-category'}>
                {foodTruckNames.length > 0 ?
                    <>
                        <div className={'search-results-title'}>Food Trucks with name matching {paramsSearchItem}</div>
                        <NameResults foodTruckNames={foodTruckNames} />
                    </>
                    :
                    <div className={'search-results-none'}>No Food Trucks were found with a name matching {paramsSearchItem} </div>
                }
            </div>
            <div className={'search-results-category'}>
                {foodTruckCities.length > 0 ?
                    <>
                        <div className={'search-results-title'}>Food Truck with city matching {paramsSearchItem}</div>
                        <CityResults foodTruckCities={foodTruckCities} />
                    </>
                    :
                    <div className={'search-results-none'}>No Food Trucks were found with city matching {paramsSearchItem}</div>

                }
            </div>
            <div className={'search-results-category'}>
                {foodTruckCuisines.length > 0 ?
                    <>
                        <div className={'search-results-title'}>Food Trucks with cuisine matching {paramsSearchItem}</div>
                        <CuisineResults foodTruckCuisines={foodTruckCuisines} />
                    </>
                    :
                    <div className={'search-results-none'}>No Food Trucks with cuisine matching {paramsSearchItem}</div>
                }
            </div>
        </div>
    )
}


const NameResults = ({ foodTruckNames }) => {

    return (
        <>
            {foodTruckNames.map((foodTruck, i) => (
                <div className='food-trucks-card-container' key={i}>
                    <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </>
    )
}


const CityResults = ({ foodTruckCities }) => {

    return (
        <>
            {foodTruckCities.map((foodTruck, i) => (
                <div className='food-trucks-card-container' key={i}>
                    <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </>
    )
}

const CuisineResults = ({ foodTruckCuisines }) => {

    return (
        <>
            {/* <div className={'search-result-category'}>
                Food Trucks By Cuisine
            </div> */}
            {foodTruckCuisines.map((foodTruck, i) => (
                <div className='food-trucks-card-container' key={i}>
                    <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                        <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                    </NavLink>
                </div>
            ))}
        </>
    )
}

export default Search;

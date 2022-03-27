import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import FoodTruckCard from '../FoodTrucks/FoodTruckCard';
import { searchFoodTrucksThunk } from '../../store/foodTrucks';
import './Search.css'

const Search = () => {
    const params = useParams();
    const paramsSearchItem = params.searchItem;
    // const dispatch = useDispatch();
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

    // useEffect(() => {
    //     dispatch(searchFoodTrucksThunk(paramsSearchItem))
    // }, [dispatch, paramsSearchItem])


    return (
        <div className={'search-results-container'}>
            <div className={'search-results-name'}>
                {/* TO DO: add ternary, if food truck names result show component, else show No Food Trucks match search */}
                {foodTruckNames.length > 0 ?
                    <>
                        <div>Food Trucks with name matching {paramsSearchItem}</div>
                        <NameResults foodTruckNames={foodTruckNames} />
                    </>
                    :
                    <div>No Food Trucks were found with a name matching {paramsSearchItem} </div>
                }
                {/* TO DO: add ternary, if food truck cities result show component, else show No Food Trucks match search */}
                {foodTruckCities.length > 0 ?
                    <>
                        <div>Food Truck with city matching {paramsSearchItem}</div>
                        <CityResults foodTruckCities={foodTruckCities} />
                    </>
                    :
                    <div>No Food Trucks were found with city matching {paramsSearchItem}</div>

                }
                {/* TO DO: add ternary, if food truck cuisine result show component, else show No Food Trucks match search */}
                {foodTruckCuisines.length > 0 ?
                    <>
                        <div>Food Trucks with cuisine matching {paramsSearchItem}</div>
                        <CuisineResults foodTruckCuisines={foodTruckCuisines} />
                    </>
                    :
                    <div>No Food Trucks with cuisine matching {paramsSearchItem}</div>
                }

                {/* {foodTrucks.map((foodTruck, i) => (
                    <div className='food-trucks-card-container' key={i}>
                        <NavLink className={'food-trucks-card-link'} to={`/food-trucks/${foodTruck.id}`}>
                            <FoodTruckCard key={foodTruck.id} foodTruck={foodTruck} />
                        </NavLink>
                    </div>
                ))} */}
            </div>
        </div>
    )
}


// TO DO: add component for each type of results
const NameResults = ({ foodTruckNames }) => {
    // const foodTruckNames = Object.values(foodTrucksObj).filter(foodTruck =>
    //     foodTruck.name.toLowerCase().includes(paramsSearchItem.toLowerCase()))

    return (
        <>
            {/* <div className={'search-result-category'}>
                Food Trucks By Name
            </div> */}
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
            {/* <div className={'search-result-category'}>
                Food Trucks By City
            </div> */}
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

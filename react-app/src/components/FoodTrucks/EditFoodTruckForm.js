import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editFoodTruckThunk } from '../../store/foodTrucks';

const EditFoodTruckForm = ({ foodTruck, hideForm }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(foodTruck.name);
    const [address, setAddress] = useState(foodTruck.address);
    const [city, setCity] = useState(foodTruck.city);
    const [state, setState] = useState(foodTruck.state);
    const [zipCode, setZipCode] = useState(foodTruck.zipCode);
    const [cuisine, setCuisine] = useState(foodTruck.cuisine);
    const [price, setPrice] = useState(foodTruck.price);
    const [imageURL, setImageURL] = useState(foodTruck.images[0]?.imageURL);
    const userId = useSelector(state => state.session.user.id)
    const [validationErrors, setValidationErrors] = useState([])


    // TO DO: modalize
    const submitEditFoodTruckForm = async (e) => {
        e.preventDefault();

        const editedFoodTruck = {name, address, city, state, zip_code: zipCode, cuisine, price, image_url: imageURL, foodTruckId: foodTruck.id}
        const data = await dispatch(editFoodTruckThunk(editedFoodTruck))
        if (data && data.errors) {
            setValidationErrors(data.errors)
        }
        // if successful close form
    }



    return (
        <div className='new-food-truck-form-component'>
            <form className='edit-food-truck-form' onSubmit={submitEditFoodTruckForm}>
                <ul className='form-errors'>
                    {validationErrors && validationErrors.map((error, i) =>
                    <li key={i}>{error}</li>)}
                </ul>
                <label htmlFor='name'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your Food Truck name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='address'>
                    <input
                        type='text'
                        name='address'
                        placeholder='Enter the address for your Food Truck'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='city'>
                    <input
                        type='text'
                        name='city'
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='state'>
                    <input
                        type='text'
                        name='state'
                        placeholder='State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='zip_code'>
                    <input
                        type='text'
                        name='zip_code'
                        placeholder='Zip Code'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}>
                    </input>
                </label>
                <label htmlFor='cuisine'>
                    <select name='cuisine' onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
                        <option value=''>
                            Select a cuisine...
                        </option>
                        <option value='Tacos/Burritos'>
                            Tacos/Burritos
                        </option>
                        <option value='Sandwiches'>
                            Sandwiches
                        </option>
                        <option value='Coffee'>
                            Coffe
                        </option>
                        <option value='BBQ'>
                            BBQ
                        </option>
                        <option value='Ice Cream'>
                            Ice Cream
                        </option>
                        <option value='Dessert'>
                            Dessert
                        </option>
                        <option value='Sushi'>
                            Sushi
                        </option>
                        <option value='Indian'>
                            Indian
                        </option>
                    </select>
                </label>
                <label htmlFor='price'>
                    <select name='price' onChange={(e) => setPrice(e.target.value)} value={price}>
                        <option value=''>
                            Select a price range...
                        </option>
                        <option value='$'>
                            $
                        </option>
                        <option value='$$'>
                            $$
                        </option>
                        <option value='$$$'>
                            $$$
                        </option>
                        <option value='$$$$'>
                            $$$$
                        </option>
                    </select>
                </label>
                <label htmlFor='image_url'>
                    <input name='image_url'
                        placeholder='Truck Image URL'
                        value={imageURL ?? ""}
                        onChange={(e) => setImageURL(e.target.value)}>
                    </input>
                </label>
                <button type='submit'>
                    Edit Food Truck
                </button>
            </form>
        </div>
    )
}

export default EditFoodTruckForm;

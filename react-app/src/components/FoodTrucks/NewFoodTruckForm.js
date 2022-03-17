import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFoodTruckThunk } from '../../store/foodTrucks';

const NewFoodTruckForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const zip_code = zipCode;
    const [cuisine, setCuisine] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const image_url = imageURL;
    const userId = useSelector(state => state.session.user.id)

    const submitNewFoodTruckForm = async(e) => {
        e.preventDefault();

        dispatch(createFoodTruckThunk({ name, address, city, state, zip_code, cuisine, price, image_url}))
        // TO DO: add error handling

    }

    return (
        <div className='new-food-truck-form-component'>
            <form className='new-food-truck-form' onSubmit={submitNewFoodTruckForm}>
                {/* TO DO: add errors */}
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
                    <select name='cuisine' onChange={(e) => setCuisine(e.target.value)}>
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
                    <select name='price' onChange={(e) => setPrice(e.target.value)}>
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
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}>
                    </input>
                </label>
                <button type='submit'>
                    Create New Food Truck
                </button>
            </form>

        </div>
    )
}

export default NewFoodTruckForm;

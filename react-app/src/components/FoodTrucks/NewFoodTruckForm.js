import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createFoodTruckThunk } from '../../store/foodTrucks';
import './NewFoodTruckForm.css';

const NewFoodTruckForm = ({ closeModal }) => {
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
    const userId = useSelector(state => state.session.user.id);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitNewFoodTruckForm = async (e) => {
        e.preventDefault();

        const data = await dispatch(createFoodTruckThunk({ name, address, city, state, zip_code, cuisine, price, image_url }))
        if (data && data.errors) {
            setValidationErrors(data.errors)
        }
        if (data && !data.errors) {
            closeModal()
        }
    }

    return (
        <div className={'food-truck-form-container'}>
            <div className={'food-truck-form-title-container'}>
                <div className={'food-truck-form-title'}>Add your new food truck!</div>
                <div className={'food-truck-form-disclaimer'}>Our app is currently only serving US based food trucks.</div>
            </div>
            <form className={'food-truck-form'} onSubmit={submitNewFoodTruckForm}>
                <ul className={'food-truck-form-errors'}>
                    {validationErrors && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>)}
                </ul>
                <label htmlFor='name' className={'food-truck-form-label'}>Food Truck Name
                    <input
                        type='text'
                        name='name'
                        // placeholder='Food Truck Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={'food-truck-form-input'}
                    >
                    </input>
                </label>
                <label htmlFor='address' className={'food-truck-form-label'}>Address
                    <input
                        type='text'
                        name='address'
                        // placeholder='Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={'food-truck-form-input'}
                    >
                    </input>
                </label>
                <label htmlFor='city' className={'food-truck-form-label'}>City
                    <input
                        type='text'
                        name='city'
                        // placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={'food-truck-form-input'}
                    >
                    </input>
                </label>
                <label htmlFor='state' className={'food-truck-form-label'}>State
                    <select name='state' onChange={(e) => setState(e.target.value)} className={'food-truck-form-select'}>
                        <option value=''>
                            Select your state...
                        </option>
                        <option value='Alabama'>
                            Alabama
                        </option>
                        <option value='Alaska'>
                            Alaska
                        </option>
                        <option value='Arizona'>
                            Arizona
                        </option>
                        <option value='Arkansas'>
                            Arkansas
                        </option>
                        <option value='California'>
                            California
                        </option>
                        <option value='Colorado'>
                            Colorado
                        </option>
                        <option value='Connecticut'>
                            Connecticut
                        </option>
                        <option value='Delaware'>
                            Delaware
                        </option>
                        <option value='Florida'>
                            Florida
                        </option>
                        <option value='Georgia'>
                            Georgia
                        </option>
                        <option value='Hawaii'>
                            Hawaii
                        </option>
                        <option value='Idaho'>
                            Idaho
                        </option>
                        <option value='Illinois'>
                            Illinois
                        </option>
                        <option value='Indiana'>
                            Indiana
                        </option>
                        <option value='Iowa'>
                            Iowa
                        </option>
                        <option value='Kansas'>
                            Kansas
                        </option>
                        <option value='Kentucky'>
                            Kentucky
                        </option>
                        <option value='Louisiana'>
                            Louisiana
                        </option>
                        <option value='Maine'>
                            Maine
                        </option>
                        <option value='Maryland'>
                            Maryland
                        </option>
                        <option value='Massachusetts'>
                            Massachusetts
                        </option>
                        <option value='Michigan'>
                            Michigan
                        </option>
                        <option value='Minnesota'>
                            Minnesota
                        </option>
                        <option value='Mississippi'>
                            Mississippi
                        </option>
                        <option value='Missouri'>
                            Missouri
                        </option>
                        <option value='Montana'>
                            Montana
                        </option>
                        <option value='Nebraska'>
                            Nebraska
                        </option>
                        <option value='Nevada'>
                            Nevada
                        </option>
                        <option value='New Hampshire'>
                            New Hampshire
                        </option>
                        <option value='New Jersey'>
                            New Jersey
                        </option>
                        <option value='New Mexico'>
                            New Mexico
                        </option>
                        <option value='New York'>
                            New York
                        </option>
                        <option value='North Carolina'>
                            North Carolina
                        </option>
                        <option value='North Dakota'>
                            North Dakota
                        </option>
                        <option value='Ohio'>
                            Ohio
                        </option>
                        <option value='Oklahoma'>
                            Oklahoma
                        </option>
                        <option value='Oregon'>
                            Oregon
                        </option>
                        <option value='Pennsylvania'>
                            Pennsylvania
                        </option>
                        <option value='Rhode Island'>
                            Rhode Island
                        </option>
                        <option value='South Carolina'>
                            South Carolina
                        </option>
                        <option value='South Dakota'>
                            South Dakota
                        </option>
                        <option value='Tennessee'>
                            Tennessee
                        </option>
                        <option value='Texas'>
                            Texas
                        </option>
                        <option value='Utah'>
                            Utah
                        </option>
                        <option value='Vermont'>
                            Vermont
                        </option>
                        <option value='Virginia'>
                            Virginia
                        </option>
                        <option value='Washington'>
                            Washington
                        </option>
                        <option value='West Virginia'>
                            West Virginia
                        </option>
                        <option value='Wisconsin'>
                            Wisconsin
                        </option>
                        <option value='Wyoming'>
                            Wyoming
                        </option>
                    </select>
                </label>
                <label htmlFor='zip_code' className={'food-truck-form-label'}>Zip Code
                    <input
                        type='text'
                        name='zip_code'
                        // placeholder='Zip Code'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className={'food-truck-form-input'}
                    >
                    </input>
                </label>
                <label htmlFor='cuisine' className={'food-truck-form-label'}>Cuisine
                    <select name='cuisine' onChange={(e) => setCuisine(e.target.value)} className={'food-truck-form-select'}>
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
                            Coffee
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
                <label htmlFor='price' className={'food-truck-form-label'}>Price
                    <select name='price' onChange={(e) => setPrice(e.target.value)} className={'food-truck-form-select'}>
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
                <label htmlFor='image_url' className={'food-truck-form-label'}>Image URL
                    <input name='image_url'
                        // placeholder='Food Truck Image URL'
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        className={'food-truck-form-input'}
                    >
                    </input>
                </label>
                <button type='submit' className={'form-button'}>
                    Create New Food Truck
                </button>
            </form>
        </div>
    )
}

export default NewFoodTruckForm;

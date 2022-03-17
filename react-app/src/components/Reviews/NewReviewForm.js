import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReviewThunk } from '../../store/reviews';

const NewReviewForm = ({ foodTruckId }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    
    const submitNewReviewForm = async (e) => {
        e.preventDefault();

        // TO DO: add error handling

        // TO DO: add dispatch createReviewThunk
       const data = await dispatch(createReviewThunk({ rating, content, foodTruckId }))
       if (data && data.errors) {
           setValidationErrors(data.errors)
       }
    }

    return (
        <div className='new-review-form-component'>
            <form className='new-review-form' onSubmit={submitNewReviewForm}>
                {/* TO DO: add error handling */}
                    <ul className='form-errors'>
                        {validationErrors && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>)}
                    </ul>
                <label htmlFor='rating'>
                    <select name='rating' onChange={(e) => setRating(e.target.value)}>
                        <option value=''>
                            Add a rating...
                        </option>
                        <option value='1'>
                            1
                        </option>
                        <option value='2'>
                            2
                        </option>
                        <option value='3'>
                            3
                        </option>
                        <option value='4'>
                            4
                        </option>
                        <option value='5'>
                            5
                        </option>
                    </select>
                </label>
                <label htmlFor='content'>
                    <textarea
                        name='content'
                        placeholder='Write your review here...'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                </label>
                <button type='submit'>
                    Add Review
                </button>
            </form>
        </div>
    )
}


export default NewReviewForm;

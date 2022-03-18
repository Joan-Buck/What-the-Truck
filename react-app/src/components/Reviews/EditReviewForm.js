import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editReviewThunk } from '../../store/reviews';

const EditReviewForm = ({ review, foodTruckId }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(review.rating);
    const [content, setContent] = useState(review.content);
    const [validationErrors, setValidationErrors] = useState([]);
    const reviewId = review.id
    console.log(reviewId)
    const submitEditReviewForm = async (e) => {
        e.preventDefault();

        const editedReview = {rating, content, truck_id: foodTruckId, reviewId}
        // TO DO: add dispatch editReviewThunk
           const data = await dispatch(editReviewThunk(editedReview))

        // TO DO: add error handling
       if (data && data.errors) {
           setValidationErrors(data.errors)
       }
    }

    return (
        <div className='new-review-form-component'>
            <form className='new-review-form' onSubmit={submitEditReviewForm}>
                {/* TO DO: add error handling */}
                    <ul className='form-errors'>
                        {validationErrors && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>)}
                    </ul>
                <label htmlFor='rating'>
                    <select name='rating' onChange={(e) => setRating(e.target.value)} value={rating}>
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


export default EditReviewForm;

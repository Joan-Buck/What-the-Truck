import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editReviewThunk } from '../../store/reviews';
import './EditReviewForm.css';


const EditReviewForm = ({ review, foodTruckId, hideForm, closeModal }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(review.rating);
    const [content, setContent] = useState(review.content);
    const [validationErrors, setValidationErrors] = useState([]);
    const reviewId = review.id

    const submitEditReviewForm = async (e) => {
        e.preventDefault();

        const editedReview = {rating, content, truck_id: foodTruckId, reviewId}
           const data = await dispatch(editReviewThunk(editedReview))

        // TO DO: close form
       if (data && data.errors) {
           setValidationErrors(data.errors)
       }

       if (data && !data.errors) {
        //    hideForm()
            closeModal()
       }
    }

    return (
        <div className={'review-form-container'}>
            <form className={'review-form'} onSubmit={submitEditReviewForm}>
                    <ul className={'form-errors'}>
                        {validationErrors && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>)}
                    </ul>
                <label htmlFor='rating'>
                    <select name='rating' onChange={(e) => setRating(e.target.value)} value={rating} className={'review-form-select'}>
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
                        className={'review-form-text-area'}
                    >
                    </textarea>
                </label>
                <button type='submit' className={'form-button'}>
                    Edit Review
                </button>
            </form>
        </div>
    )
}


export default EditReviewForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReviewThunk } from '../../store/reviews';
import './NewReviewForm.css';
import { FaStar } from 'react-icons/fa';

const NewReviewForm = ({ foodTruckId, closeModal }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    const [hover, setHover] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitNewReviewForm = async (e) => {
        e.preventDefault();

        const data = await dispatch(createReviewThunk({ rating, content, foodTruckId }))
        if (data && data.errors) {
            setValidationErrors(data.errors)
        }

        if (data && !data.errors) {
            closeModal()
        }
    }

    return (
        <div className={'review-form-container'}>
             <div className={'review-form-title-container'}>
                <div className={'review-form-title'}>Tell us about your meal!</div>
            </div>
            <form className={'review-form'} onSubmit={submitNewReviewForm}>
                <ul className={'form-errors'}>
                    {validationErrors && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>)}
                </ul>
                <div id="starRating">

                    {[...Array(5)].map((star, idx) => {
                        const ratingVal = idx + 1;
                        return (
                            <label key={idx}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingVal}
                                    placeholder="Tell us about your experience"
                                    onClick={() => setRating(ratingVal)}
                                />
                                <FaStar
                                    className="ratingStars"
                                    size={40}
                                    onMouseEnter={() => setHover(ratingVal)}
                                    onMouseLeave={() => setHover(null)}
                                    color={ratingVal <= (hover || rating) ? "FFA534" : "#e4e5e9"} />
                            </label>
                        )
                    })}
                </div>
                <label htmlFor='content' className={'review-form-label'}>
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
                    Add Review
                </button>
            </form>
        </div>
    )
}


export default NewReviewForm;

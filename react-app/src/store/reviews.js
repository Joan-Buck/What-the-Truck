const LOAD_REVIEWS = 'reviews/loadReviews';
const LOAD_REVIEW = 'reviews/loadReview';
const DELETE_REVIEW = 'reviews/deleteReview';

// --------------------------------------

export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

export const loadReview = (review) => {
    return {
        type: LOAD_REVIEW,
        review
    }
}

export const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// --------------------------------------

export const getReviewsThunk = (foodTruckId) => async dispatch => {
    const response = await fetch(`/api/reviews?foodTruckId=${foodTruckId}`)

    if (response.ok) {
        const data = await response.json()

        dispatch(loadReviews(data.reviews))
    }
    return response
}

export const createReviewThunk = ({ rating, content, foodTruckId }) => async dispatch => {
    const response = await fetch('/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rating,
            content,
            foodTruckId
        })
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(loadReview(data))
    }
    return data
}

export const editReviewThunk = (review) => async dispatch => {
    const response = await fetch(`/api/reviews/${review.reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rating: review.rating,
            content: review.content,
            truck_id: review.truck_id
        })
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(loadReview(data))
    }

    return data
}


export const deleteReviewThunk = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteReview(reviewId))
    }
}

// --------------------------------------

const initialState = { entities: {} }
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const entities = { ...state.entities }
            action.reviews.forEach(review => { entities[review.id] = review })
            return { ...state, entities }
        }
        case LOAD_REVIEW: {
            const entities = { ...state.entities, [action.review.id]: action.review }
            return { ...state, entities }
        }
        case DELETE_REVIEW: {
            const entities = { ...state.entities }
            delete entities[action.reviewId]
            return { ...state, entities }
        }
        default:
            return state
    }
}

export default reviewsReducer;

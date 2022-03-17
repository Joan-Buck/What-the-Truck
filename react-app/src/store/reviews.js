const LOAD_REVIEWS = 'reviews/loadReviews';
const LOAD_REVIEW = 'reviews/loadReview';
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

// --------------------------------------

export const getReviewsThunk = (foodTruckId) => async dispatch => {
    const response = await fetch(`/api/reviews?foodTruckId=${foodTruckId}`)

    if (response.ok) {
        const data = await response.json()

        dispatch(loadReviews(data.reviews))
    }
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
        default:
            return state
    }
}

export default reviewsReducer;

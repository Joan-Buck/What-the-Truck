const LOAD_REVIEWS = 'reviews/loadReviews';

// --------------------------------------

export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
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


// --------------------------------------

const initialState = { entities: {} }
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const entities = { ...state.entities }
            action.reviews.forEach(review => { entities[review.id] = review })
            return { ...state, entities }
        }
        default:
            return state
    }
}

export default reviewsReducer;

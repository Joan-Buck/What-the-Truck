const LOAD_FOOD_TRUCKS = 'foodTrucks/loadFoodTrucks';


// --------------------------------------

export const loadFoodTrucks = (foodTrucks) => {
    return {
        type: LOAD_FOOD_TRUCKS,
        foodTrucks
    }
};


// --------------------------------------

export const getFoodTrucksThunk = () => async dispatch => {
    const response = await fetch('/api/food-trucks/')

    if (response.ok) {
        const data = await response.json()
        dispatch(loadFoodTrucks(data.foodTrucks))
    }

    return response;
}

export const getMyFoodTrucksThunk = () => async dispatch => {
    const response = await fetch('/api/food-trucks/my-food-trucks')

    if (response.ok) {
        const data = await response.json()

        dispatch(loadFoodTrucks(data.foodTrucks))
    }
}

// --------------------------------------

const initialState = { foodTrucks: {} }
const foodTrucksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FOOD_TRUCKS: {
            const foodTrucks = {}
            action.foodTrucks.forEach(foodTruck => { foodTrucks[foodTruck.id] = foodTruck })
            return { ...state, foodTrucks }
        }
        default:
            return state
    }
}

export default foodTrucksReducer;

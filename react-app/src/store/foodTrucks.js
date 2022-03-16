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
    // console.log('resp----', response)

    if (response.ok) {
        const data = await response.json()
        console.log("data-----", data)
        dispatch(loadFoodTrucks(data.foodTrucks))
    }

    return response;
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

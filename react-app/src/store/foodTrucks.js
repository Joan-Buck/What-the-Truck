const LOAD_FOOD_TRUCKS = 'foodTrucks/loadFoodTrucks';
const LOAD_FOOD_TRUCK = 'foodTrucks/loadFoodTruck';

// --------------------------------------

export const loadFoodTrucks = (foodTrucks) => {
    return {
        type: LOAD_FOOD_TRUCKS,
        foodTrucks
    }
};

export const loadFoodTruck = (foodTruck) => {
    return {
        type: LOAD_FOOD_TRUCK,
        foodTruck
    }
}


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

    return response;
}

export const createFoodTruckThunk = ({ name, address, city, state, zip_code, cuisine, price, image_url }) => async dispatch => {
    const response = await fetch('/api/food-trucks/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            address,
            city,
            state,
            zip_code,
            cuisine,
            price,
            image_url
        })
    })

    const data = await response.json();
    console.log('data', data)
    dispatch(loadFoodTruck(data))
    return data
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
        case LOAD_FOOD_TRUCK: {
            const foodTrucks = { ...state.foodTrucks, [action.foodTruck.id]: action.foodTruck }
            return { ...state, foodTrucks }
        }
        default:
            return state
    }
}

export default foodTrucksReducer;

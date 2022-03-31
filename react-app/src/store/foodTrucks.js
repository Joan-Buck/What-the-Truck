const LOAD_FOOD_TRUCKS = 'foodTrucks/loadFoodTrucks';
const LOAD_FOOD_TRUCK = 'foodTrucks/loadFoodTruck';
const DELETE_FOOD_TRUCK = 'foodTrucks/deleteFoodTruck';

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

export const deleteFoodTruck = (foodTruckId) => {
    return {
        type: DELETE_FOOD_TRUCK,
        foodTruckId
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

export const getFoodTruckThunk = (foodTruckId) => async dispatch => {
    const response = await fetch(`/api/food-trucks/${foodTruckId}`)

    if (response.ok) {
        const data = await response.json()
        dispatch(loadFoodTruck(data))
    }

    return response
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
    if (response.ok) {
        dispatch(loadFoodTruck(data))
    }
    return data
}

export const editFoodTruckThunk = (foodTruck) => async dispatch => {
    const response = await fetch(`/api/food-trucks/${foodTruck.foodTruckId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: foodTruck.name,
            address: foodTruck.address,
            city: foodTruck.city,
            state: foodTruck.state,
            zip_code: foodTruck.zip_code,
            cuisine: foodTruck.cuisine,
            price: foodTruck.price,
            image_url: foodTruck.image_url
        })
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(loadFoodTruck(data))
    }
    return data
}

export const deleteFoodTruckThunk = (foodTruckId) => async dispatch => {
    const response = await fetch(`/api/food-trucks/${foodTruckId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(deleteFoodTruck(foodTruckId))
    }
    return response
}


// Search Thunk
export const searchFoodTrucksThunk = (searchItem) => async dispatch => {
    const response = await fetch(`/api/food-trucks?search=${searchItem}`)
    console.log({searchItem})
    const data = await response.json()

    if (response.ok) {
        dispatch(loadFoodTrucks(data.foodTrucks))
    }
    return data
}

// --------------------------------------

const initialState = { entities: {} }
const foodTrucksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FOOD_TRUCKS: {
            const entities = { ...state.entities }
            action.foodTrucks.forEach(foodTruck => { entities[foodTruck.id] = foodTruck })
            return { ...state, entities }
        }
        case LOAD_FOOD_TRUCK: {
            const entities = { ...state.entities, [action.foodTruck.id]: action.foodTruck }
            return { ...state, entities }
        }
        case DELETE_FOOD_TRUCK: {
            const entities = { ...state.entities }
            delete entities[action.foodTruckId]
            return { ...state, entities }
        }
        default:
            return state
    }
}

export default foodTrucksReducer;

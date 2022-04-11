const LOAD_API_KEY = 'maps/LOAD_API_KEY';

const loadApiKey = (key) => ({
    type: LOAD_API_KEY,
    key
});

export const getKey = () => async dispatch => {
    const res = await fetch('/api/maps/key', {
        method: 'POST'
    });

    const data = await res.json();
    dispatch(loadApiKey(data.key));

}


const initialState = {key: null}

const mapsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_API_KEY:
            return {key: action.key};
        default:
            return state;
    }
};

export default mapsReducer;

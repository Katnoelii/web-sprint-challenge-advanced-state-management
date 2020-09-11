import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, HANDLE_CHANGES} from '../actions'

const initialState = {
	isLoading: false,
	smurfs: [],
	error: "",
	values: {
		name: "",
		age: "",
		height: "",
	},
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error:'',
                values: {
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height
                }
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case HANDLE_CHANGES:
            const name = action.payload.target.name
            const value = action.payload.target.value
            return {
                ...state,
                values: {
                    ...state.values,
                    [name]: value
                }
            }
        default:
            return state
    }
};
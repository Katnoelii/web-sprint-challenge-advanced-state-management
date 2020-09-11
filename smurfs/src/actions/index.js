import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const HANDLE_CHANGES = 'HANDLE_CHANGES'


export const fetchData = () => {
    return (dispatch) => {
        dispatch({type:FETCH_DATA_START})
        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                // console.log(res)
                dispatch({type:FETCH_DATA_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({type:FETCH_DATA_FAILURE, payload: err.message})
            })
    }
}

export const addSmurf = (smurf) => {
    // console.log(smurf)
    return (dispatch)=> {
        dispatch({ type: FETCH_DATA_START });
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                dispatch({FETCH_DATA_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({FETCH_DATA_FAILURE, payload: err.message})
            })
    }
}

export const handleChanges = (e) => {
    return (dispatch) => {
        dispatch({type:HANDLE_CHANGES, payload: e})
    }
}
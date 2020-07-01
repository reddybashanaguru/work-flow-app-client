import AppConstants from '../../constants/actionConstants';


let initialState = {
    isFetching: false,
    error: null,
    data: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case AppConstants.DO_LOGIN:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload || []
            };

        default:
            return state;
    }
}
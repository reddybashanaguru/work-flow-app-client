import AppConstants from '../../constants/actionConstants';


let initialState = {
    isFetching: false,
    error: null,
    redirect: false
}

export default function routeReducer(state = initialState, action) {
    switch (action.type) {
        case AppConstants.GO_TO:
            return {
                ...state,
                redirect: true
            };

        default:
            return state;
    }
}
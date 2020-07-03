import AppConstant from "../../constants/actionConstants";


export function goTo(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.GO_TO,
            payload
        });
    };
}



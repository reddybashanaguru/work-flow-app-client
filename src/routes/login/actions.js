import AppConstant from "../../constants/actionConstants";


export function doLogin(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.DO_LOGIN,
            payload
        });
    };
}



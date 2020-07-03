import AppConstant from "../../constants/actionConstants";


export function updateWorkflow(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.UPDATE_WORKFLOW,
            payload
        });
    };
}

export function saveWorkflow(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.SAVE_WORKFLOW,
            payload
        });
    };
}


export function resetWorkflow(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.RESET_WORKFLOW,
            payload
        });
    };
}
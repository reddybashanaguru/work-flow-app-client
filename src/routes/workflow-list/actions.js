import AppConstant from "../../constants/actionConstants";


export function goTo(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.GO_TO,
            payload
        });
    };
}


export function updateWorkFlowList(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.UPDATE_LIST,
            payload
        });
    }
};

export function filteredWorkflowList(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: AppConstant.UPDATE_COMPLETE_LIST,
            payload
        });
    }
};

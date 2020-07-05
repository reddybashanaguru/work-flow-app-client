import AppConstants from '../../constants/actionConstants';


let initialState = {
    isFetching: false,
    error: null,
    workflow: {
        workflowName: '',
        nodes: [{
            title: '',
            content: ''
        }]
    },
    workflowSaved: false
};

let workflowListState = {
    isFetching: false,
    error: null,
    workflowList: []
}

const updateFlowList = (state, action) => {
    const flowListData = { ...state };
    let currentWorkFlow = flowListData.workflowList.filter(i => i.id === action.payload.id);
    let existingFlows = flowListData.workflowList.filter(i => i.id !== action.payload.id) || null;
    if (currentWorkFlow.length && currentWorkFlow[0].id !== -1) {
        let flow = currentWorkFlow[0];
        flowListData.workflowList = [...existingFlows, flow];
    } else {
        flowListData.workflowList = [...existingFlows, action.payload];
    }
    return { ...flowListData };
}

const resetFlow = () => {
    let resetFlowData = {
        isFetching: false,
        error: null,
        workflow: {
            workflowName: '',
            nodes: [{
                title: '',
                content: ''
            }]
        },
        workflowSaved: false
    }
    return { ...resetFlowData };
}

function workflowReducer(state = initialState, action) {
    switch (action.type) {
        case AppConstants.RESET_WORKFLOW:
            return resetFlow()
        case AppConstants.UPDATE_WORKFLOW:
            return {
                ...state,
                isFetching: false,
                error: null,
                workflow: action.payload || []
            };
        case AppConstants.SAVE_WORKFLOW:
            return {
                ...state,
                workflowSaved: true
            }
        default:
            return state;
    }
}

function workflowListReducer(state = workflowListState, action) {
    switch (action.type) {
        case AppConstants.SAVE_WORKFLOW:
        case AppConstants.UPDATE_LIST:
            return updateFlowList(state, action);
        default:
            return state;
    }
}

function workflowFilterListReducer(state = workflowListState, action) {
    switch (action.type) {
        case AppConstants.UPDATE_COMPLETE_LIST:
            return {
                workflowList: action.payload || []
            }
        default:
            return state;
    }
}

export {
    workflowReducer, workflowListReducer, workflowFilterListReducer
}

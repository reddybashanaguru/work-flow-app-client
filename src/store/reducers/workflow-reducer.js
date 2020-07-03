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
    let flowListData = { ...state };
    let newWorkFlow = action.payload || [];
    debugger;
    let existingWorkflow = flowListData.workflowList.find(i => i.id === newWorkFlow.id);
    if (existingWorkflow) {
        flowListData.workflowList[newWorkFlow.id] = newWorkFlow;
        debugger;
    } else {
        flowListData.workflowList = [...flowListData.workflowList, newWorkFlow];
    }
    return flowListData;
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
            return updateFlowList(state, action);
        default:
            return state;
    }
}

export {
    workflowReducer, workflowListReducer
}

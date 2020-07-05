import { connect } from "react-redux";
import { goTo, updateWorkFlowList, filteredWorkflowList } from "./actions";
import Component from "./flowlist";

function mapDispatchToProps(dispatch) {
    return {
        goTo: () => {
            dispatch(goTo())
        },
        updateWorkFlowList: (list) => {
            dispatch(updateWorkFlowList(list))
        },
        filteredWorkflowList: (workflow) => {
            dispatch(filteredWorkflowList(workflow))
        },
    };
}

function mapStateToProps(state) {
    return {
        workflowList: state.workflowList['workflowList'],
        routerData: state.routeData || false,
        filteredWorkflowListData: state.filteredWorkflowList['workflowList']
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

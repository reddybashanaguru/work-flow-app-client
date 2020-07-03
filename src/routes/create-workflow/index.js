import { connect } from "react-redux";
import { updateWorkflow, saveWorkflow, resetWorkflow } from "./actions";
import Component from "./create";

function mapDispatchToProps(dispatch) {
    return {
        updateWorkflow: payload => {
            dispatch(updateWorkflow(payload))
        },
        saveWorkflow: payload => {
            dispatch(saveWorkflow(payload))
        },
        resetWorkflow: () => {
            dispatch(resetWorkflow())
        }
    };
}

function mapStateToProps(state) {
    return {
        workflowData: state.workflow,
        workflowList: state.workflowList['workflowList'],
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

import { connect } from "react-redux";
import { goTo } from "./actions";
import Component from "./flowlist";

function mapDispatchToProps(dispatch) {
    return {
        goTo: () => {
            dispatch(goTo())
        }
    };
}

function mapStateToProps(state) {
    return {
        workflowList: state.workflowList['workflowList'],
        routerData: state.routeData || false
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

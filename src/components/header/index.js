import { connect } from "react-redux";
import { doLogin } from "./actions";
import Component from "./header-component";

function mapDispatchToProps(dispatch) {
    return {

    };
}

function mapStateToProps(state) {
    return {
        loginData: state.login
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

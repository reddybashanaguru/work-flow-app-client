import { connect } from "react-redux";
import { doLogin } from "./actions";
import Component from "./login";

function mapDispatchToProps(dispatch) {
    return {
        doLogin: payload => {
            dispatch(doLogin(payload))
        }
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

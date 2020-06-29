import React, { Component } from 'react';
import { famail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberme: false,
            user: {}
        }
    }

    login = () => {
        const { email, password } = this.state;
        let user = { email, password }
        this.setState({ user });
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }
    render() {
        const { email, password, rememberme } = this.state;
        return (
            <div className="container login-form">
                <div className="card">
                    <div className="card-header text-center">
                        Login
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.login}>
                            <div className="form-group">
                                <input
                                    onChange={(e) => this.onInputChange(e)}
                                    name="email"
                                    value={email}
                                    type="email" className="form-control" id="email"
                                    aria-describedby="emailHelp" placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={(e) => this.onInputChange(e)}
                                    name="password"
                                    value={password}
                                    type="password" className="form-control" id="password" placeholder="Password"
                                />
                            </div>
                            <div className="form-group form-check">
                                <input
                                    onChange={(e) => this.checkboxChange(e)}
                                    name="rememberme"
                                    value={rememberme}
                                    type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div className="footer"><a href="#" className="card-link">Don't have an account? Sign up here</a></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
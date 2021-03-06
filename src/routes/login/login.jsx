import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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

    //helper function
    isEmpty = (obj) => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    login = (e) => {
        e.preventDefault();
        const { email, password, rememberme } = this.state;
        let user = { email, password, rememberme };
        this.setState({ user });
        this.props.doLogin(user);
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    checkboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked });
    }
    render() {
        const { email, password, rememberme, user } = this.state;
        if (!this.isEmpty(user)) {
            return <Redirect to="/flow" />
        }
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
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={(e) => this.onInputChange(e)}
                                    name="password"
                                    value={password}
                                    required
                                    type="password" className="form-control" id="password" placeholder="Password"
                                />
                            </div>
                            <div className="form-group form-check">
                                <input
                                    onChange={(e) => this.checkboxChange(e)}
                                    name="rememberme"
                                    value={rememberme}
                                    required
                                    type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div className="footer"><a href="#" className="card-link">Don't have an account?Sign up here</a></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
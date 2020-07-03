import React from 'react';
import { faNetworkWired, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const HeaderComponent = (props) => {
    const { data = {} } = props.loginData || [];
    let username;
    if (data) {
        const { email = '' } = data;
        username = email.substr(0, 5)
    }

    return (
        <div className="header-layout-container">
            <nav class="navbar fixed-top" style={{ backgroundColor: '#E80093' }}>
                <Link to="/login">
                    <a class="navbar-brand" href="#" style={{ color: '#ffffff' }}>
                        <span className="mr-2"><FontAwesomeIcon icon={faNetworkWired} /></span>
                    FlowApp
                </a>
                </Link>
                {username &&
                    (<div>
                        <span style={{ color: 'white', marginRight: '16px', fontWeight: '800' }}>{username.toUpperCase()}</span>
                        <Link to="/login">
                            <button type="button" class="btn btn-light">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                    </button>
                        </Link>
                    </div>)
                }

            </nav>
        </div>
    )
}

export default HeaderComponent;
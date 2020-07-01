import React from 'react';
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className="header-layout-container">
            <nav class="navbar fixed-top" style={{ backgroundColor: '#E80093' }}>
                <Link to="/login">
                    <a class="navbar-brand" href="#" style={{ color: '#ffffff' }}>
                        <FontAwesomeIcon icon={faNetworkWired} />
                    FlowApp
                </a>
                </Link>

            </nav>
        </div>
    )
}

export default HeaderComponent;
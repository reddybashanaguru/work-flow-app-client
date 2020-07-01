import React, { Component } from 'react'

class Flowlist extends Component {
    render() {
        return (
            <div className="login-form">
                <form class="form-inline">
                    <input class="form-control" type="search" placeholder="Search Workflows" aria-label="Search" />
                    <i className="fa fa-search search-icon" />
                </form>
            </div>
        )
    }
}


export default Flowlist;
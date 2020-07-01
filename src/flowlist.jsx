import React, { Component } from 'react';
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateWorkflowComponent from './create';

class Flowlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createWorkFlow: false,
            Workflows: []
        }
    }

    create = () => {
        this.setState({ createWorkFlow: true })
    }
    render() {
        const { createWorkFlow, Workflows } = this.state;
        console.log(this.state, "state")
        return (
            <div>
                <div className="search-form">
                    <form class="form-inline">
                        <input class="form-control" type="search" placeholder="Search Workflows...." aria-label="Search" />
                        {/* <i className="fa fa-search search-icon" /> */}
                        <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                    </form>
                </div>
                <button type="button" class="btn btn-success create-button" onClick={this.create}> <FontAwesomeIcon icon={faPlus} />Create Workflow</button>
                {createWorkFlow && (
                    <CreateWorkflowComponent />
                )}
            </div>
        )
    }
}


export default Flowlist;
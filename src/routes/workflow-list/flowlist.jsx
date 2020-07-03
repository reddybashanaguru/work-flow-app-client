import React, { Component } from 'react';
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Flowlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Workflows: [],
            clickToRedirect: false
        }
    }

    goToCreate = () => {
        this.props.history.push("/flow/create");
    }
    editWorkflow = (index) => {
        this.props.history.push(`/flow/edit/${index}`)
    }

    render() {
        const { clickToRedirect } = this.state;
        const { workflowList = [], routerData } = this.props;
        // console.log('workflowList', workflowList);
        return (
            <div>
                <div className="search-form">
                    <form class="form-inline">
                        <input class="form-control" type="search" placeholder="Search Workflows...." aria-label="Search" />
                        <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                    </form>
                </div>
                <button type="button" class="btn btn-success create-button" onClick={this.goToCreate}>
                    <FontAwesomeIcon icon={faPlus} />
                  Create Workflow
                </button>
                {workflowList && (
                    <div className="container-fluid workflow-container">
                        <div className="row">
                            {workflowList.map((flow, index) => (
                                <div
                                    className="workflow-box col-sm-2"
                                    key={index}
                                    onClick={() => { this.editWorkflow(index) }}
                                >
                                    <p className="workflow-name">{flow.workflowName}-{index}</p>
                                    <p className="workflow-status">{"completed"}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}


export default Flowlist;
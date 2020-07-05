import React, { Component } from 'react';
import { faSearch, faPlus, faFilter, faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Flowlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Workflows: [],
            clickToRedirect: false,
            value: ''
        }
    }

    goToCreate = () => {
        this.props.history.push("/flow/create");
    }
    updateFlowStatus = (e, index) => {
        if (e.target.nodeName !== "P") {
            const { workflowList = [] } = this.props;
            let updatedFlowList = workflowList[index];
            if (updatedFlowList.status !== 'Completed') {
                updatedFlowList.status = 'Completed'
            } else {
                updatedFlowList.status = 'Pending'
            }
            this.props.updateWorkFlowList({ ...updatedFlowList });
        } else {
            return null;
        }
    }
    editWorkflow = (e, index) => {
        if (e.target.nodeName === 'P') {
            this.props.history.push(`/flow/edit/${index}`);
        } else {
            return null
        }
    }
    onSearchFilter = (e) => {
        const nameSearchValue = e.target.value;
        const { workflowList = [] } = this.props;
        let filteredList = [];
        if (nameSearchValue == "") {
            this.props.filteredWorkflowList(filteredList);
        } else if (workflowList.length) {
            filteredList = workflowList.filter(f => f.workflowName == nameSearchValue);
            this.props.filteredWorkflowList(filteredList);
        } else {
            return null;
        }
    }

    filterSelect = (e) => {
        const status = e.target.value;
        const { workflowList = [] } = this.props;
        let filteredList = [];
        if (status == "") {
            this.props.filteredWorkflowList(filteredList);
        } else if (workflowList.length) {
            filteredList = workflowList.filter(f => f.status == status);
            this.props.filteredWorkflowList(filteredList);
        } else {
            return null;
        }
    }

    deleteFlow = (e, flow) => {
        const workflowId = flow.id;
        const { workflowList = [], filteredWorkflowListData = [] } = this.props;
        let inputList = filteredWorkflowListData.length > 0 ? filteredWorkflowListData : workflowList;
        let updatedFlowList = inputList.filter(f => f.id !== workflowId);
        this.props.filteredWorkflowList(updatedFlowList);
    }

    render() {
        const { clickToRedirect } = this.state;
        const { workflowList = [], routerData, filteredWorkflowListData = [] } = this.props;
        let listData = filteredWorkflowListData.length > 0 ? filteredWorkflowListData : workflowList;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="search-form col-sm-8">
                        <form className="form-inline">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search Workflows...."
                                aria-label="Search"
                                onChange={(e) => { this.onSearchFilter(e) }}
                            />
                            <span className="search-icon"><FontAwesomeIcon icon={faSearch} /></span>
                            <div className="filter-box ml-5">
                                <span className="filter-icon mt-1 mb-1 ml-3"><FontAwesomeIcon icon={faFilter} /></span>
                                <select
                                    name="workFlowStatus"
                                    id="workFlowStatus"
                                    className="workflow-filter p-1"
                                    onChange={(e) => { this.filterSelect(e) }}
                                    value={this.state.value}
                                >
                                    <option value="" disabled>Filter</option>
                                    <option value="">All</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4 mt-5 pt-5 mr-0">
                        <button type="button" className="btn btn-success create-button" onClick={this.goToCreate}>
                            <span className="mr-1"> <FontAwesomeIcon icon={faPlus} /></span>
                  Create Workflow
                </button>
                    </div>
                </div>
                {listData && listData.length > 0 ? (
                    <div className="container-fluid workflow-container">
                        <div className="row">
                            {listData.map((flow, index) => (
                                <div
                                    className="workflow-box col-sm-2"
                                    key={index}
                                    name="workflow-box"
                                    onClick={(e) => { this.editWorkflow(e, index) }}
                                >
                                    <div className="delete-icon-box float-right">
                                        <span
                                            className="delete-icon"
                                            onClick={(e) => { this.deleteFlow(e, flow) }}
                                        ><FontAwesomeIcon icon={faTrash} color='white' /></span>
                                    </div>
                                    <div className="workflow-body pt-4">
                                        <p className="workflow-name">{flow.workflowName}-{index}</p>
                                        <p className="workflow-status">
                                            <span> {flow.status}</span>
                                            <span
                                                className={`list-check float-right`}
                                                disabled={flow.status == 'Pending'}
                                                name="workflow-status"
                                                onClick={(e) => this.updateFlowStatus(e, index)}
                                            >
                                                <FontAwesomeIcon
                                                    className={`${flow.status == 'Pending' ? 'disabled' : ''}`}
                                                    icon={faCheckCircle} size="2x"
                                                    color={flow.status == 'Pending' ? 'grey' : 'green'}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (<div className="container-fluid mt-5 p-3 no-list"><p>No Flows are available ...! Create now !</p></div>)
                }
            </div>
        )
    }
}


export default Flowlist;
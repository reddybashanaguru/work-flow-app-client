import React, { Component } from 'react';
import { faCheckCircle, faRandom, faTimes, faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CreateWorkflowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workflow: {
                workflowName: '',
                nodes: [{
                    title: '',
                    content: ''
                }]
            },
            updateColor: false,
            disableShuffle: false
        }
    }

    componentDidMount() {
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        if (workflowId && workflowList.length <= 0) {
            this.props.history.push("/flow");
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.workflowData.workflowSaved !== this.props.workflowData.workflowSaved) {
            alert('workflow saved successfully');
            this.props.history.push("/flow");
            this.props.resetWorkflow();
        }
        if (this.state.workflow.nodes.length !== prevState.workflow.nodes.length && !this.state.disableShuffle) {
            this.setState({ disableShuffle: true });
        }
    }
    goToList = () => {
        this.props.history.push("/flow");
    }
    addNode = () => {
        const { workflow } = this.state;
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        let updatedFlow = workflowId ? workflowList[workflowId] : workflow;
        let node = {
            title: '',
            content: '',
            status: 'Pending'
        }
        updatedFlow.nodes = updatedFlow.nodes.concat(node);
        this.props.updateWorkflow(updatedFlow);
    }
    onInputChange = (e) => {
        const { workflowData = [], workflowList } = this.props;
        const workflowId = this.props.match.params.id || [];
        let editWorkFlow = workflowList[workflowId];
        const { workflow } = workflowData;
        let updatedFlow = this.props.match.params.id ? editWorkFlow : workflow;
        updatedFlow[e.target.name] = e.target.value;
        this.setState({ workflow: updatedFlow });
    }
    onNodeInputChange = (e, index) => {
        const { workflowData = [], workflowList } = this.props;
        const workflowId = this.props.match.params.id || [];
        const { workflow } = workflowData;
        let editWorkFlow = workflowList[workflowId];
        let updatedFlow = this.props.match.params.id ? editWorkFlow : workflow;
        updatedFlow.nodes[index][e.target.name] = e.target.value;
        this.setState({ workflow: updatedFlow });
    }
    checkIconClick = (color, index) => {
        let updatedColor, updatedStatus;
        const { workflow } = this.state;
        if (color === "grey") {
            updatedColor = "blue";
            updatedStatus = "In Progress"

        } else if (color === "blue") {
            updatedColor = "green";
            updatedStatus = "Completed"
        } else {
            updatedColor = "grey";
            updatedStatus = "Pending"
        }
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        if (workflowId) {
            workflowList[workflowId]['nodes'][index]['color'] = updatedColor;
            workflowList[workflowId]['nodes'][index]['status'] = updatedStatus;
            this.setState({ updateColor: true, workflow: workflowList[workflowId] });
        }
    }
    deleteNode = () => {
        const { workflow } = this.state;
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        let updatedFlow;
        if (workflowId) {
            workflowList[workflowId]['nodes'].pop();
            updatedFlow = workflowList[workflowId];
        } else {
            workflow['nodes'].pop();
            updatedFlow = workflow
        }
        this.setState({ workflow: updatedFlow });
    }
    shuffleArray = () => {
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        workflowList[workflowId]['nodes'].sort(() => Math.random() - 0.5);
        this.setState({ workflow: workflowList[workflowId] });
    }
    enableShuffle = () => {
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        if (workflowList.length > 0 && workflowId) {
            for (let node of workflowList[workflowId]['nodes']) {
                return node.status !== 'Completed' ? true : false;
            }
        } else {
            return true;
        }

    }
    saveWorkflow = (e) => {
        e.preventDefault();
        const { workflow } = this.state;
        const { workflowList } = this.props;
        const workflowId = this.props.match.params.id || null;
        let workflowPayload = workflowId ? workflowList[workflowId] : workflow;
        if (!workflowId) {
            let workLength = workflowList ? workflowList.length : 0;
            workflowPayload['id'] = workLength;
            workflowPayload['status'] = 'Pending';
            for (let node of workflowPayload['nodes']) {
                node.color = 'grey';
            }
        } else {
            let workflowCompleted = workflowPayload['nodes'].filter(e => e.status !== "Pending" && e.status !== "In Progress");
            if (workflowCompleted.length) {
                workflowPayload['status'] = "Completed"
            }
        }
        this.props.saveWorkflow(workflowPayload);
    }
    render() {
        const workflowId = this.props.match.params.id || null;
        const { workflowData = [], workflowList } = this.props;
        let editWorkFlow = workflowList[workflowId];
        const { workflow = [] } = workflowData || [];
        const { nodes = [], workflowName = '' } = editWorkFlow ? editWorkFlow : workflow;
        const { disableShuffle } = this.state;
        return (
            <div className="create-container container-fluid mt-5 pt-5">
                <div>
                    <span className="mr-1" onClick={this.goToList}><FontAwesomeIcon icon={faArrowLeft} size="2x" /></span>
                </div>
                <form onSubmit={this.saveWorkflow} id="create-node-form">
                    <div className="form-group create-header row pb-4">
                        <div className="col-sm-6 mt-3 ml-3">
                            <input
                                onChange={(e) => this.onInputChange(e)}
                                name="workflowName"
                                value={workflowName}
                                type="text" className="form-control col-sm-5" id="workflowName"
                                placeholder="Workflow Name"
                                required
                            />
                        </div>
                        <div className="btn-group col-sm-5" role="group" aria-label="Basic example">
                            <button type="button"
                                className={`btn btnShuffle ${(this.enableShuffle() || disableShuffle) && "disabled"}`}
                                onClick={this.shuffleArray}
                                disabled={this.enableShuffle() || disableShuffle}
                            >
                                <span className="mr-1"><FontAwesomeIcon icon={faRandom} /></span>
                            Shuffle
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.deleteNode}
                            >
                                <span className="mr-1"><FontAwesomeIcon icon={faTimes} /></span>
                            Delete</button>
                            <button type="button" className="btn btn-success" onClick={this.addNode}>
                                <span className="mr-1"><FontAwesomeIcon icon={faPlus} /></span>
                            Add Node</button>
                            <button type="submit" className="btn btn-primary">
                                {workflowId ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                    <div className="node-body">
                        {nodes && nodes.map(((node, index) =>
                            <div key={index} className="node">
                                {workflowId && (
                                    <span className="check-circle"
                                        onClick={() => { this.checkIconClick(node.color ? node.color : "grey", index) }}
                                    ><FontAwesomeIcon icon={faCheckCircle} color={node.color ? node.color : "grey"} size="3x" /></span>
                                )}
                                <div className="form-group">
                                    <input
                                        onChange={(e) => this.onNodeInputChange(e, index)}
                                        name="title"
                                        value={node.title}
                                        type="text" className="form-control" id="title" placeholder="title"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        onChange={(e) => this.onNodeInputChange(e, index)}
                                        name="content"
                                        rows="20"
                                        value={node.content}
                                        required
                                        type="textarea" className="form-control" id="content" placeholder="content"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        )
    }
}


export default CreateWorkflowComponent;
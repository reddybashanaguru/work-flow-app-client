import React, { Component } from 'react'

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
            }
        }
    }

    addNode = () => {
        const { workflow } = this.state;
        let updatedFlow = workflow;
        let node = {
            title: '',
            content: ''
        }
        updatedFlow.nodes = updatedFlow.nodes.concat(node);
        this.setState({ workflow: updatedFlow })
    }
    onInputChange = (e) => {
        const { workflow } = this.state;
        let updatedFlow = workflow;
        updatedFlow[e.target.name] = e.target.value;
        this.setState({ workflow: updatedFlow });
    }
    onNodeInputChange = (e, index) => {
        const { workflow } = this.state;
        let updatedFlow = workflow;
        updatedFlow.nodes[index][e.target.name] = e.target.value;
        this.setState({ workflow: updatedFlow });
    }
    saveWorkflow = (e) => {
        e.preventDefault();
        console.log(this.state, "save workflow");
    }
    render() {
        const { workflow } = this.state;
        const { nodes, workflowName } = workflow;
        return (
            <div className="create-container">
                <form onSubmit={this.saveWorkflow} id="create-node-form">
                    <div className="form-group create-header">
                        <input
                            onChange={(e) => this.onInputChange(e)}
                            name="workflowName"
                            value={workflowName}
                            type="text" className="form-control" id="workflowName"
                            placeholder="Workflow Name"
                            required
                        />
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btnShuffle">Shuffle</button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                onClick={this.addNode}
                            >Delete</button>
                            <button type="button" class="btn btn-success" onClick={this.addNode}>Add Node</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                    <div className="node-body">
                        {nodes && nodes.map(((node, index) =>
                            <div key={index} className="node">
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